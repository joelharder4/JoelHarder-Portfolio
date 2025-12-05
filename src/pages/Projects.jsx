import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';

const Projects = () => {

	const projects = [
		'MoleculeViewer',
		'Tucon',
		'StudyBuddy',
		// 'WebsiteTerminal',
		//'DiscordBot',
		'Hoi4DoubleEverything',
		// 'WordFrequencySearch',
	]

    return (
		<div className="font-['Lalezar'] text-primary-text min-h-[100vh]">
			<div className="flex flex-col items-center w-full mb-16">
				<h1 className="drop-shadow-xl mt-40 mb-6 md:text-8xl text-6xl text-center">Projects</h1>
				<p className="text-center font-thin md:text-xl text-lg md:w-[60vw] w-[85vw]">
				This page demonstrates the various coding projects that I have created or significantly contributed to. This includes University Assignments, Personal Projects, Video Game Mods, and Hackathon projects. It takes a lot of time and work to write everything so this page is a constant work in progress and it may not be the most up to date.
				</p>

				<div className="mt-20 xl:w-[50vw] lg:w-[60vw] md:w-[75vw] w-[70vw] xl:min-w-[1000px] lg:min-w-[900px] md:min-w-[700px] font-['Lalezar']">
					<h1 className="w-full items-left text-left z-10 text-2xl">Projects</h1>
					<hr className="w-full border-t-2  border-[#363636]"/>

					<div className="mt-4 w-full grid md:grid-cols-2 grid-cols-1 gap-8">
						{projects.map((project) => {
							return (
								<ProjectCard key={project} project={project}/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}



export default Projects;