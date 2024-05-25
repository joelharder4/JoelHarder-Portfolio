import './styles/Stories.css';
import React from 'react';
import { Grid, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import { useTranslation } from 'react-i18next';

const thumbnails = [
	'/img/thumbnails/chatgpt_ignore_you.jpg',
	'/img/thumbnails/bing_ai_for_dnd.jpg',
	'/img/thumbnails/chatgpt_is_confused.jpg',
	'/img/thumbnails/angry_mac_hater.jpg',
	'/img/thumbnails/conspiracy_theory_chatgpt.jpg',
];

const Img = styled('img')({
	margin: 'none',
	display: 'block',
	objectFit: 'cover',
	height: '100%',
	width: '100%',
	borderRadius: '2%',
  });

const StoryPanel = ({storyNum = -1}) => {
	const { t } = useTranslation();

	const linkTo = '/stories/' + storyNum.toString();
	let title = t(`storyTitle${storyNum}`, '');
    let teaser = t(`storyTeaser${storyNum}`, '');
    let date = t(`storyDate${storyNum}`, '');

	return (
		<Grid item xs={4}>
			<Grid container sx={{fontFamily: ['Lalazer', 'sans-serif']}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: '100%', height: '40vh', borderRadius: '2%' }} href={linkTo}>
						<Img alt="complex" src={thumbnails[storyNum]} />
					</ButtonBase>
				</Grid>
				<Grid item xs={9}>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<Typography
							variant="h6"
							style={{ color: '#CFCFCF', marginTop: '10px' }}
						>
							{title || 'Story does not exist'}
						</Typography>
						<Typography
							variant="body2"
							style={{ color: '#CFCFCF', height: '40px', overflow: 'hidden', opacity: '0.5' }}
						>
							{teaser || 'Something went wrong'}
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="subtitle1" style={{ color: '#CFCFCF', opacity: '0.5', marginTop: '10px' }} align="right">
						{date || 'Unknown Date'}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}



const Stories = () => {
	const { t } = useTranslation();

	return (<div className="stories">
		<div className="firstContainer">
			<h1 className="title">Short AI Stories</h1>
			<p className="description"> {t('storiesDesc')} </p>
		</div>
		<div className='flex flex-col w-full items-center'>
			<div className="mt-20 lg:w-[75vw] md:w-[85vw] w-[70vw] font-['Lalezar'] text-[#CFCFCF]">
				<h1 className="w-full items-left text-left z-10 text-2xl">Stories</h1>
				<hr className="w-full border-t-2 border-[#363636]"/>

				<div className="mt-4 w-full grid md:grid-cols-2 grid-cols-1 gap-8 flex">
					<StoryPanel storyNum={0}/>
					<StoryPanel storyNum={1}/>
					<StoryPanel storyNum={2}/>
					<StoryPanel storyNum={3}/>
					<StoryPanel storyNum={4}/>
				</div>
			</div>
		</div>
	</div>);
}

export default Stories;