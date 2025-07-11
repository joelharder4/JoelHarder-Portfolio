import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownReader from '../tools/MarkdownReader';
import { Button } from '@mui/material';

const ProjectPage = () => {
  const { projectName } = useParams();

  return (
    <div className='w-full m-0'>
      <div className='mt-20 md:w-[70vw] lg:w-[50vw] w-[90vw] mx-auto'>
        <Button variant="text" sx={{zIndex: 3, 'textTransform': 'none', float: 'right'}} href="/projects">
          Other Projects
        </Button>
      </div>
      <div className='w-full justify-center flex text-primary-text'>
        <div className='md:w-[70vw] lg:w-[50vw] w-[90vw]'>
          <MarkdownReader filePath={`/projects/${projectName}/${projectName}.md`} className='p-12'/>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;