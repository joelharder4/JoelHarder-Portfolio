import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownReader from './MarkdownReader';
import { Button } from '@mui/material';

const ProjectPage = () => {
    const { projectName } = useParams();

    return (
        <div className='w-full m-0'>
            <div className='mt-20 w-[80vw] mx-auto'>
                <Button variant="text" sx={{zIndex: 3, 'textTransform': 'none', float: 'right'}} href="/projects">
                    Other Projects
                </Button>
            </div>
            <div className='w-full justify-center flex text-white'>
                <div className='w-[80vw] bg-[#303030]'>
                    <MarkdownReader filePath={`/projects/${projectName}.md`} className='p-12'/>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;