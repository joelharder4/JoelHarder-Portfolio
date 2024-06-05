import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-28 w-full font-sans text-primary'>
      <div className='w-full flex items-center justify-center'>
        <div className='w-[90vw] md:w-[75vw] flex flex-col gap-16'>
          <h1 className='md:text-8xl text-6xl font-semibold text-secondary font-["Lalezar"]'>
            About Joel
          </h1>
          <div>
            <p className='text-justify whitespace-pre-wrap text-sm md:text-lg'>
              <img src='/img/hiking_cropped.png' alt='Me on a hike' className='max-w-[30vw] border-4 border-primary float-left mr-8'/>
              
              <div>{t('homepageDesc')}</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;