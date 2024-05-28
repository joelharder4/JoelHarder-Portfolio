import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-28 pb-28 w-full font-sans text-primary'>
      <div className='flex flex-col gap-16 mx-24'>
        <h1 className='text-8xl font-semibold text-secondary font-["Lalezar"]'>
          About Joel
        </h1>
        <div>
          <div className='max-w-[40vw]'>
            <img src='/img/hiking_cropped.png' alt='A picture of me on a hike' className='border-4 border-primary float-left mr-8'/>
          </div>
          <p className='text-justify whitespace-pre-wrap text-xl lg:text-2xl'>
            {t('homepageDesc')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;