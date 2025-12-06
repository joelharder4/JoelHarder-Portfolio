import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const ProjectCard = ({project = ''}) => {
	const [projectInfo, setProjectInfo] = useState({});
	const filePath = `/projects/${project}/${project}.json`;

	useEffect(() => {
		fetch(filePath)
		.then((response) => response.text())
		.then((text) => {
			setProjectInfo(JSON.parse(text))
		})
	}, [filePath]);

	const linkTo = '/projects/' + project.toString();

	return (
		<motion.div
			className='w-full md:h-40 h-30'
			whileHover={{ scale: 1.02 }}
		>
      <Link 
        to={linkTo}
        style={{ width: '100%', height: '100%', textDecoration: 'none', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '12px' }}
        underline="none"
      >
        <img
          alt='Thumbnail for project'
          src={projectInfo['thumbnail']}
          className='m-0 block w-full md:h-40 h-30 object-cover rounded-md border-2'
        />

        <div className='mt-2 font-inter'>
          <p className="text-primary-text md:text-2xl text-lg font-bold">
            {projectInfo['title'] || 'Unnamed Project'}
          </p>
          <p className="text-primary-text md:text-sm text-xs mb-1 opacity-50">
            {projectInfo['teaser'] || 'Something went wrong'}
          </p>
          <p className="text-primary-text opacity-50 text-xs">
            {projectInfo['date'] || 'Unknown Date'}
          </p>
        </div>
      </Link>
	</motion.div>
	);
};


export default ProjectCard;