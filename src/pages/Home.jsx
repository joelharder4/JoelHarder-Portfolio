import React, { useState } from 'react';
import { Button } from "antd";
import { DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ScrollingImages from '../components/ScrollingImages';
import logos from '../tools/logos';
import { motion, AnimatePresence } from 'motion/react';
import Timeline from '../components/Timeline';

const Home = () => {
  const navigate = useNavigate();
  const [showMustache, setShowMustache] = useState(false);

  return (
    <div className="font-['Lalezar'] text-primary-text bg-white">
      <div className="w-full min-h-[100vh] pb-8">
        <motion.div
          className="w-fit flex md:flex-row flex-col-reverse lg:gap-16 gap-12 items-center px-8 mx-auto md:pt-[20vh] pt-[15vh]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <div className='md:w-full w-[90%] flex flex-col items-center'>
            <div className="bg-gray-200 md:max-w-[700px] w-full" initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}>
              <p className="px-12 pt-12 text-5xl lg:text-7xl">
                Hi! I&apos;m <font className='bg-gradient-to-r from-secondary via-primary/90 to-secondary bg-clip-text text-transparent animated-gradient'>
                  Joel Harder
                </font>
              </p>
              <p className="px-12 pb-12 text-xl lg:text-2xl">
                I am a Computer Science Student at the University of Guelph, and a Software Developer interested in front-end.
              </p>
            </div>
            <div 
              className='w-full flex flex-row items-center justify-center gap-6 mt-4'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <Button
                type='primary'
                size='large'
                onClick={() => {navigate('/projects')}}
              >
                My Projects →
              </Button>
              <Button
                variant='outlined'
                type='default'
                icon={<DownloadOutlined />}
                size={'large'}
                download
                href='/files/Joel_Harder_Resume.pdf'
              >
                Resume
              </Button>
            </div>
          </div>
          <motion.div
            className="w-70 lg:w-96 flex-shrink-0 relative z-10 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setShowMustache(!showMustache)}
          >
            <img
              alt="A picture of Joel Harder"
              src="/img/joel_headshot_small.png"
              className="relative drop-shadow-[20px_25px_0px_rgba(65,149,204,1)]"
            />
            <AnimatePresence>
              {showMustache && (
                <motion.div
                className="absolute top-[40%] left-1/2 -translate-x-8/11 w-1/4 pointer-events-none"
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
          </motion.div>
        </motion.div>
      </div>
      <div className='absolute left-1/2 -translate-x-1/2 -mt-12 animate-bounce hidden md:block'>
        <ArrowDownOutlined />
      </div>

      <ScrollingImages
        images={logos}
      />

      {/* <hr className='w-1/3 mx-auto border-gray-300 my-6'/>

      <Timeline /> */}
    </div>
  );
};

export default Home;