import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';

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
		<Grid item xs={4}>
			<Grid container sx={{fontFamily: ['Lalazer', 'sans-serif']}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: '100%', height: '15rem', borderRadius: '2%' }} href={linkTo}>
						<img alt="complex" src={projectInfo['thumbnail']} className='m-0 block object-cover h-full w-full rounded-md	' />
					</ButtonBase>
				</Grid>
				<Grid item xs={7} md={8}>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<p className="mt-4 text-[#CFCFCF] text-xl">
							{projectInfo['title'] || 'Unnamed Project'}
						</p>
						<p className="text-[#CFCFCF] text-sm overflow-hidden h-10 opacity-50">
							{projectInfo['teaser'] || 'Something went wrong'}
						</p>
					</Link>
				</Grid>
				<Grid item xs={5} md={4}>
                    <p className="text-[#CFCFCF] opacity-50 mt-4 text-right md:text-xs text-sm">
                        {projectInfo['date'] || 'Unknown Date'}
                    </p>
				</Grid>
			</Grid>
		</Grid>
	)
}


export default ProjectCard;