import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import { fetchJson } from '../../tools/fetchJson';

const StoryCard = ({storyId = ''}) => {
	const [storyInfo, setStoryInfo] = useState({});
	const filePath = `/stories/${storyId}/${storyId}.json`;

	useEffect(() => {
		fetchJson(filePath)
		.then((info) => {
			setStoryInfo(info);
		})
	}, [filePath]);

	const linkTo = '/stories/' + storyId.toString();

	return (
		<Grid item xs={4}>
			<Grid container spacing={2} sx={{fontFamily: ['sans-serif']}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: '100%', height: '25rem', borderRadius: '2%' }} href={linkTo}>
						<img alt="complex" src={storyInfo['thumbnail']} className='m-0 block object-cover h-full w-full rounded-md border-2' />
					</ButtonBase>
				</Grid>
				<Grid item xs>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<p className="text-primary text-xl">
							{storyInfo['title'] || 'Unnamed Project'}
						</p>
						<p className="text-primary text-sm overflow-hidden h-10 opacity-50">
							{storyInfo['teaser'] || 'Something went wrong'}
						</p>
					</Link>
				</Grid>
				<Grid item xs="auto">
          <p className="text-primary opacity-50 text-right md:text-xs text-sm">
            {storyInfo['date'] || 'Unknown Date'}
          </p>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default StoryCard;