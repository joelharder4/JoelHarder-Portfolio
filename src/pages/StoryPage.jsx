import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import MarkdownReader from '../tools/MarkdownReader';
import { fetchJson } from '../tools/fetchJson';


const StoryPage = () => {
  const { storyId } = useParams();
  const filePath = `/stories/${storyId}/${storyId}.json`;
  const [storyInfo, setStoryInfo] = useState({});

  useEffect(() => {
    fetchJson(filePath)
    .then((info) => {
      setStoryInfo(info);
    })
  }, [filePath, storyInfo]);
  
  
  return (
    <div className='w-full m-0'>
      <div className='mt-20 md:w-[70vw] lg:w-[50vw] w-[90vw] mx-auto'>
        <Button variant="text" sx={{zIndex: 3, 'textTransform': 'none', float: 'right'}} href="/stories">
          Other Stories
        </Button>
      </div>
      <div className='w-full justify-center flex text-primary'>
        <div className='md:w-[70vw] lg:w-[55vw] xl:w-[45vw] w-[90vw]'>
          {/* title */}
          <h1 className='text-5xl font-bold py-4 px-12'>{storyInfo['title'] ?? 'Untitled Story'}</h1>
          <p className='px-12 text-sm'>by <span className='font-bold'>{storyInfo['author'] ?? 'Unknown'}</span></p>
          <p className='px-12 text-xs mb-4'>{storyInfo['date'] ?? 'Unknown'}</p>
          <hr/>

          {/* body */}
          <MarkdownReader filePath={`/stories/${storyId}/${storyId}.md`} className='p-12'/>
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
