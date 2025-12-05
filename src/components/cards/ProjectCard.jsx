import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
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
			className='flex flex-row w-full'
			whileHover={{ scale: 1.01 }}
		>
			<div className='w-full'>
				<ButtonBase sx={{
					width: '100%',
					height: '12rem',
					'@media (max-width: 1000px)': {
						height: '7rem'
					},
					borderRadius: '2%'
				}} href={linkTo}
				>
					<img
						alt="complex"
						src={projectInfo['thumbnail']}
						className='m-0 block object-cover h-full w-full rounded-md border-2 transition-transform duration-300 ease-out hover:scale-101'
					/>
				</ButtonBase>
			</div>
      <Link 
        to={linkTo}
        style={{ width: '100%', textDecoration: 'none' }}
        underline="none"
      >
        <div className='w-full ml-4 mt-2'>
          
          <p className="text-primary-text text-2xl">
            {projectInfo['title'] || 'Unnamed Project'}
          </p>
          <p className="text-primary-text text-sm mb-1 opacity-50">
            {projectInfo['teaser'] || 'Something went wrong'}
          </p>
          <p className="text-primary-text opacity-50 md:text-xs text-sm">
            {projectInfo['date'] || 'Unknown Date'}
          </p>
        </div>
      </Link>
		</motion.div>
	);
};


export default ProjectCard;