import React from 'react';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
    return (
	<div className="font-['Lalezar'] text-[#CFCFCF]">
		<div className="flex flex-col items-center w-full">
			<h1 className="drop-shadow-xl mt-48 mb-6 text-8xl text-center">Coding Portfolio</h1>
			<p className="text-center font-thin text-xl w-full"> Uh oh! Looks like this page is still under construction... <br/>
            Until this is finished, you can view most of my projects on https://github.com/joelharder4
            </p>

			<div className="mt-20 lg:w-[75vw] md:w-[85vw] sm:w-[70vw]">
				<h1 className="w-full items-left text-left z-10 text-2xl">Projects</h1>
				<hr className="w-full border-t-2  border-[#363636]"/>

				<div className="mt-4 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 flex">
					<ProjectCard projectName="test"/>
					<ProjectCard projectName="test"/>
					<ProjectCard projectName="test"/>
					<ProjectCard projectName="test"/>
					<ProjectCard projectName="test"/>
				</div>
			</div>
		</div>
	</div>);
}



export default Projects;