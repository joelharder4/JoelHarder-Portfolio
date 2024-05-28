import './styles/Stories.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StoryCard from './components/StoryCard';

const Stories = () => {
	const { t } = useTranslation();

	const projects = [
		'ChatGPTIgnoreYou',
		'AIForDND',
		'ConspiracyGPT',
		'MacHaterGPT',
		'ForgetfulGPT',
	]

	return (
    <div className="stories text-primary pb-16">
      <div className="flex flex-col items-center h-min">
        <h1 className="drop-shadow-xl mt-40 mb-6 text-8xl text-center font-['Lalezar']">Short AI Stories</h1>
        <p className="text-center font-['Lalezar'] text-xl w-[60vw]"> {t('storiesDesc')} </p>
      </div>
      <div className='flex flex-col w-full items-center'>
        <div className="mt-20 lg:w-[75vw] md:w-[85vw] w-[70vw] font-['Lalezar']">
          <h1 className="w-full items-left text-left z-10 text-2xl">Stories</h1>
          <hr className="w-full border-t-2 border-[#363636]"/>

          <div className="mt-4 w-full grid md:grid-cols-2 grid-cols-1 gap-8 flex">
            {projects.map((project) => {
              return (
                <StoryCard key={project} storyId={project}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;