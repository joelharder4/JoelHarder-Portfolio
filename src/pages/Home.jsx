import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScrollingImages from '../components/ScrollingImages';
import logos from '../logos';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="font-['Lalezar'] text-primary bg-white">
      <div className="w-full h-[100vh]">
        <div className="w-fit flex md:flex-row flex-col-reverse lg:gap-16 gap-12 items-center mx-auto md:pt-[30vh] pt-[15vh]">
          <div className='md:w-full w-[90%] flex flex-col md:ml-8 items-center'>
            <div className="bg-gray-200 md:max-w-[700px] w-full">
              <p className="px-12 pt-12 text-5xl lg:text-7xl">
                Hi! I&apos;m <font className='text-secondary'>Joel Harder</font>
              </p>
              <p className="px-12 pb-12 text-xl lg:text-2xl">
                I am a <font className='text-secondary'>Computer Science</font> Student at the University of Guelph, and a Software Developer interested in front-end.
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-center gap-6 mt-4'>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {navigate('/about')}}
              >
                About Me
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => {navigate('/projects')}}
              >
                My Projects →
              </Button>
            </div>
            
          </div>
          <div className="max-w-96 md:w-fit w-[80vw] md:mr-12">
            <img
              alt="A picture of Joel Harder (as the Rizz God)"
              src="/img/rizz_god.jpg"
              className="relative z-10 drop-shadow-[25px_30px_0px_rgba(65,149,204,1)]"
            />
          </div>
        </div>
      </div>
      <ScrollingImages images={logos}
      />
    </div>
  );
};

export default Home;