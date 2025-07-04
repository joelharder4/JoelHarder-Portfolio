import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScrollingImages from '../components/ScrollingImages';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DownloadIcon from '@mui/icons-material/Download';
import logos from '../tools/logos';
import { motion, AnimatePresence } from 'motion/react';

const Home = () => {
  const navigate = useNavigate();
  const [showMustache, setShowMustache] = useState(false);

  return (
    <div className="font-['Lalezar'] text-primary-text bg-white">
      <div className="w-full min-h-[100vh] pb-8">
        <div className="w-fit flex md:flex-row flex-col-reverse lg:gap-16 gap-12 items-center px-8 mx-auto md:pt-[20vh] pt-[15vh]">
          <div className='md:w-full w-[90%] flex flex-col items-center'>
            <motion.div className="bg-gray-200 md:max-w-[700px] w-full" initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}>
              <p className="px-12 pt-12 text-5xl lg:text-7xl">
                Hi! I&apos;m <font className='bg-gradient-to-r from-secondary via-primary/90 to-secondary bg-clip-text text-transparent animated-gradient'>
                  Joel Harder
                </font>
              </p>
              <p className="px-12 pb-12 text-xl lg:text-2xl">
                I am a Computer Science Student at the University of Guelph, and a Software Developer interested in front-end.
              </p>
            </motion.div>
            <motion.div 
              className='w-full flex flex-row items-center justify-center gap-6 mt-4'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Button
                variant='contained'
                color='primary'
                onClick={() => {navigate('/projects')}}
              >
                My Projects →
              </Button>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<DownloadIcon />}
                download
                component='a'
                href='/files/Joel_Harder_Resume.pdf'
              >
                Resume
              </Button>
            </motion.div>
          </div>
          <div className="w-70 lg:w-96 flex-shrink-0 relative z-10">
            <motion.img
              alt="A picture of Joel Harder"
              src="/img/joel_headshot.jpeg"
              className="relative drop-shadow-[25px_30px_0px_rgba(65,149,204,1)]"
              initial={{ scale: 0, x: 300 }}
              animate={{ scale: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setShowMustache(!showMustache)}
            />
            <AnimatePresence>
              {showMustache && (
                <motion.div
                className="absolute top-[40%] left-1/2 -translate-x-5/7 w-1/4 pointer-events-none"
                initial={{ opacity: 0.6, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
                exit={{ opacity: 0.8, clipPath: 'inset(0 100% 0 0)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <img
                  src="/img/mustache.png"
                  alt="A funny mustache"
                  className="w-full"
                />
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -mt-12 animate-bounce hidden md:block'>
        <ArrowDownwardIcon />
      </div>
      <ScrollingImages
        images={logos}
      />
    </div>
  );
};

export default Home;