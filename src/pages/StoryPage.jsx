import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import MarkdownReader from '../tools/MarkdownReader';
import { fetchJson } from '../tools/fetchJson';
import { useNavigate } from 'react-router-dom';
import NotFound404 from './NotFound404';

const StoryPage = () => {
  const { storyId } = useParams();
  const navigate = useNavigate();

  const [storyInfo, setStoryInfo] = useState({});
  const [fileExists, setFileExists] = useState(null);

  const jsonPath = `/stories/${storyId}/${storyId}.json`;
  const filePath = `/stories/${storyId}/${storyId}.md`;


  useEffect(() => {
    fetch(filePath, { method: 'HEAD' })
      .then(res => {
        const contentType = res.headers.get("Content-Type") || "";

        if (!res.ok || contentType.includes("text/html")) {
          setFileExists(false);
        } else {
          setFileExists(true);
          fetchJson(jsonPath)
            .then(data => setStoryInfo(data))
            .catch(() => {
              setStoryInfo({});
              setFileExists(false);
            });
        }
      })
      .catch(() => setFileExists(false));
  }, [storyId, filePath, jsonPath]);


  const renderContent = () => {
    if (fileExists === null) {
      return <div>Loading...</div>;
    }
    if (fileExists) {
      return (<>
        <h1 className='text-5xl font-bold py-4 px-12'>{storyInfo['title'] ?? 'Untitled Story'}</h1>
        <p className='px-12 text-sm'>by <span className='font-bold'>{storyInfo['author'] ?? 'Unknown'}</span></p>
        <p className='px-12 text-xs mb-4'>{storyInfo['date'] ?? 'Unknown'}{storyInfo['updated'] ? ` • Updated: ${storyInfo['updated']}` : null}</p>
        <hr/>

        <MarkdownReader filePath={filePath} className='p-12'/>
      </>);
    }
    return <NotFound404 />;
  };
  
  
  return (
    <div className='w-full m-0'>
      <div className='mt-20 md:w-[70vw] lg:w-[50vw] w-[90vw] mx-auto'>
        <Button
          color='primary'
          variant='link'
          size='large'
          onClick={() => navigate('/stories')}
          className='float-right'
        >
          Other Stories
        </Button>
      </div>
      <div className='w-full justify-center flex text-primary-text'>
        <div className='md:w-[70vw] lg:w-[55vw] xl:w-[45vw] w-[90vw]'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
