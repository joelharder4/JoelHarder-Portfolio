import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownReader from '../tools/MarkdownReader';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import NotFound404 from './NotFound404';
import { fetchJson } from '../tools/fetchJson';

const ProjectPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const [projectInfo, setProjectInfo] = useState({});
  const [fileExists, setFileExists] = useState(null);

  const jsonPath = `/projects/${projectName}/${projectName}.json`;
  const filePath = `/projects/${projectName}/${projectName}.md`;

  useEffect(() => {
    fetch(filePath, { method: 'HEAD' })
      .then(res => {
        const contentType = res.headers.get("Content-Type") || "";

        if (!res.ok || contentType.includes("text/html")) {
          setFileExists(false);
        } else {
          setFileExists(true);
          fetchJson(jsonPath)
            .then((data) => {setProjectInfo(data)})
            .catch(() => {
              setProjectInfo({});
              setFileExists(false);
            })
        }
      })
      .catch(() => setFileExists(false));
  }, [projectName, filePath, jsonPath]);


  const renderContent = () => {
    if (fileExists === null) {
      return <div>Loading...</div>;
    }
    if (fileExists) {
      return (<>
        <h1 className='text-5xl font-bold py-4 px-12'>{projectInfo['title'] ?? 'Untitled Story'}</h1>
        <div className='flex mb-4'>
          <div>
            <p className='px-12 text-sm'>by <span className='font-bold'>{projectInfo['author'] ?? 'Unknown'}</span></p>
            { projectInfo['collaborators'] ? <p className='px-12 text-sm'>with <span className='font-bold'>{projectInfo['collaborators'] ?? 'Nobody'}</span></p> : null }
            <p className='px-12 text-xs'>{projectInfo['date'] ?? 'Unknown'}</p>
          </div>
          <div className='ml-auto mt-auto flex'>
            { projectInfo['siteLink'] ? 
              <a className='text-md underline mr-4 flex' href={projectInfo['siteLink']}>
                <img src='/img/logos/web.png' className='w-auto h-5 my-auto mr-1'/>
                Website
              </a> 
              : null }
            { projectInfo['steamLink'] ? 
              <a className='text-md underline mr-4 flex' href={projectInfo['steamLink']} target="_blank">
                <img src='/img/logos/steam.png' className='w-auto h-5 my-auto mr-1'/>
                Steam Workshop
              </a> 
              : null }
            { projectInfo['link'] ? 
              <a className='text-md underline mr-4 flex' href={projectInfo['link']} target="_blank">
                <img src='/img/logos/github.png' className='w-auto h-5 my-auto mr-1'/>
                GitHub
              </a> 
              : null }
          </div>
        </div>
        <hr/>

        <MarkdownReader filePath={filePath} className='p-12'/>
      </>);
    }
    return <NotFound404 />;
  };


  return (
    <div className='w-full m-0 text-primary-text'>
      <div className='mt-20 md:w-[70vw] lg:w-[60vw] w-[90vw] mx-auto'>
        <Button
          color='primary'
          variant='link'
          size='large'
          onClick={() => navigate('/projects')}
          className='float-right'
        >
          Other Projects
        </Button>
      </div>
      <div className='w-full justify-center flex'>
        <div className='md:w-[70vw] lg:w-[60vw] w-[90vw] max-w-300'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;