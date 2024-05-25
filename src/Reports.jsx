import './styles/Stories.css';
import React from 'react';
import { Grid, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

const thumbnails = [
	'/img/thumbnails/tulip_retail.png'
];

const Img = styled('img')({
	margin: 'none',
	display: 'block',
	objectFit: 'cover',
	height: '100%',
	width: '100%',
	borderRadius: '2%',
  });

// const GridBreak = () => {return <Box sx={{width: "100%"}}/>};

const ReportPanel = ({storyNum = -1}) => {
	// const { t } = useTranslation();

	const linkTo = '/reports/' + storyNum.toString();
	// let title = t(`storyTitle${storyNum}`, "");
    // let teaser = t(`storyTeaser${storyNum}`, "");
    // let date = t(`storyDate${storyNum}`, "");
    let title = 'Tulip Retail'
    let teaser = 'Software Developer Co-op - Fall 2023'
    let date = 'January 12, 2023'

	return (<>
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
							{title}
						</Typography>
						<Typography
							variant="body2"
							style={{ color: '#CFCFCF', height: '40px', overflow: 'hidden', opacity: '0.5' }}
						>
							{teaser}
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="subtitle1" style={{ color: '#CFCFCF', opacity: '0.5', marginTop: '10px' }} align="right">
						{date}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
    </>)
}



const Reports = () => {
	// const { t } = useTranslation();

	return (<div className="stories">
		<div className="firstContainer">
			<h1 className="title">Work Term Reports</h1>
			<p className="description"> This page is filled with reflections on aspects of my work term experiences, highlighting what I did and what learned. </p>
			<h1 style={{margin: '150px calc(66vw - 100px) 2px 20px', color: '#CFCFCF', alignItems: 'left', textAlign: 'left', zIndex: '2'}}>Reports</h1>
			<hr style={{width: '66vw', border: '0', borderTop: '2px solid #363636', margin: '0 0 0 0'}}/>
		</div>
		<Box sx={{width: '100%', margin: '15px 0 200px 0'}}>
			<Grid 
				container 
				rowSpacing={8} 
				columnSpacing={{ xs: 1, sm: 2, md: 4 }}
				justifyContent={'center'}
				alignItems={'top'}
			>
				<ReportPanel
					storyNum={0}
				/>
			</Grid>
		</Box>
	</div>);
}

export default Reports;