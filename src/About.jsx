import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-28 pb-28 w-full font-sans text-primary'>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[90vw] md:w-[75vw] flex flex-col gap-16'>
          <h1 className='md:text-8xl text-6xl font-semibold text-secondary font-["Lalezar"]'>
            About Joel
          </h1>
          <div>
            <div className='max-w-[40vw]'>
              <img src='/img/hiking_cropped.png' alt='A picture of me on a hike' className='border-4 border-primary float-left mr-8'/>
            </div>
            <p className='text-justify whitespace-pre-wrap text-sm md:text-xl lg:text-2xl'>
              {t('homepageDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;