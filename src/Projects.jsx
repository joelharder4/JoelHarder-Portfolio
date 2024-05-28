import React from 'react';
import ProjectCard from './components/ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
	const { t } = useTranslation();

	const projects = [
		'MoleculeViewer',
		'Tucon',
	]

    return (
		<div className="font-['Lalezar'] text-primary h-[100vh]">
			<div className="flex flex-col items-center w-full mb-16">
				<h1 className="drop-shadow-xl mt-40 mb-6 text-8xl text-center">Coding Portfolio</h1>
				<p className="text-center font-thin text-xl w-[60vw]"> {t('projectsDesc')} </p>

				<div className="mt-20 lg:w-[75vw] md:w-[85vw] w-[70vw]">
					<h1 className="w-full items-left text-left z-10 text-2xl">Projects</h1>
					<hr className="w-full border-t-2  border-[#363636]"/>

					<div className="mt-4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 flex">
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