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
		<motion.div whileHover={{ scale: 1.02 }}>
			<Grid container spacing={2} sx={{fontFamily: ['sans-serif'], width: '100%'}}>
				<Grid item xs={12} sx={{ width: '100%' }}>
					<ButtonBase sx={{
						width: '100%',
						height: '15rem',
						'@media (max-width: 500px)': {
							height: '10rem'
						},
						borderRadius: '2%'
					}} href={linkTo} >
						<img alt="complex" src={projectInfo['thumbnail']} className='m-0 block object-cover h-full w-full rounded-md border-2' />
					</ButtonBase>
				</Grid>
				<Grid item xs={12}>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<p className="text-primary-text text-xl">
							{projectInfo['title'] || 'Unnamed Project'}
						</p>
						<p className="text-primary-text text-sm mb-1 opacity-50">
							{projectInfo['teaser'] || 'Something went wrong'}
						</p>
					</Link>

					<p className="text-primary-text opacity-50 md:text-xs text-sm">
						{projectInfo['date'] || 'Unknown Date'}
					</p>
				</Grid>
			</Grid>
		</motion.div>
	);
};


export default ProjectCard;