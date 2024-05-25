import React from 'react';
import { Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import { useTranslation } from 'react-i18next';

const thumbnails = {
    'test': '/img/thumbnails/chatgpt_ignore_you.jpg',
	'MoleculeViewer': '/img/thumbnails/angry_mac_hater.jpg',
};

const ProjectCard = ({project = ''}) => {
    const { t } = useTranslation();

    const Img = styled('img')({
        margin: 'none',
        display: 'block',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: '2%',
    });

	const linkTo = '/projects/' + project.toString();
	let title = t(`${project}Title`, '');
    let teaser = t(`${project}Teaser`, '');
    let date = t(`${project}Date`, '');

	return (
		<Grid item xs={4}>
			<Grid container sx={{fontFamily: ['Lalazer', 'sans-serif']}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: '100%', height: '15rem', borderRadius: '2%' }} href={linkTo}>
						<Img alt="complex" src={thumbnails[project]} />
					</ButtonBase>
				</Grid>
				<Grid item xs={7} md={8}>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<p className="mt-4 text-[#CFCFCF] text-xl">
							{title || 'Unnamed Project'}
						</p>
						<p className="text-[#CFCFCF] text-sm overflow-hidden h-10 opacity-50">
							{teaser || 'Something went wrong'}
						</p>
					</Link>
				</Grid>
				<Grid item xs={5} md={4}>
                    <p className="text-[#CFCFCF] opacity-50 mt-4 text-right md:text-xs text-sm">
                        {date || 'Unknown Date'}
                    </p>
				</Grid>
			</Grid>
		</Grid>
	)
}


export default ProjectCard;