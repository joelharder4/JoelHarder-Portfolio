import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import MarkdownReader from '../tools/MarkdownReader';
import { fetchJson } from '../tools/fetchJson';
import { useNavigate } from 'react-router-dom';

const StoryPage = () => {
  const { storyId } = useParams();
  const filePath = `/stories/${storyId}/${storyId}.json`;
  const [storyInfo, setStoryInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchJson(filePath)
    .then((info) => {
      setStoryInfo(info);
    })
  }, [filePath, storyInfo]);
  
  
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
