import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownReader from '../tools/MarkdownReader';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProjectPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [fileExists, setFileExists] = useState(null);

  const filePath = `/projects/${projectName}/${projectName}.md`;

  useEffect(() => {
    fetch(filePath, { method: 'HEAD' })
      .then(res => {
        const contentType = res.headers.get("Content-Type") || "";

        if (!res.ok || contentType.includes("text/html")) {
          setFileExists(false);
        } else {
          setFileExists(true);
        }
      })
      .catch(() => setFileExists(false));
  }, [projectName, filePath]);

  const renderContent = () => {
    console.log(fileExists, filePath);
    if (fileExists === null) {
      return <div>Loading...</div>; // Or a spinner component
    }
    if (fileExists) {
      return <MarkdownReader filePath={filePath} className='p-12'/>;
    }
    return <div>404 - Project Not Found</div>; // Or a dedicated 404 component
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