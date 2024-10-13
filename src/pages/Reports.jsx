import '../styles/Stories.css';
import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

const thumbnails = [
	'/img/thumbnails/tulip_retail.png'
];


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
						<img alt="complex" src={thumbnails[storyNum]} className='m-0 block object-cover h-full w-full rounded-md border-2'/>
					</ButtonBase>
				</Grid>
				<Grid item xs={9}>
					<Link 
						to={linkTo}
						style={{ width: '100%', textDecoration: 'none' }}
						underline="none"
					>
						<p className="text-primary text-xl">
							{title || 'Unnamed Project'}
						</p>
						<p className="text-primary text-sm overflow-hidden h-10 opacity-50">
							{teaser || 'Something went wrong'}
						</p>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<p className="text-primary opacity-50 text-right md:text-xs text-sm">
                        {date || 'Unknown Date'}
                    </p>
				</Grid>
			</Grid>
		</Grid>
    </>)
}



const Reports = () => {
	// const { t } = useTranslation();

	return (
    <div className="stories text-primary">
      <div className="flex flex-col items-center h-min">
        <h1 className="drop-shadow-xl mt-40 mb-6 text-8xl text-center font-['Lalezar']">Work Term Reports</h1>
        <p className="text-center font-['Lalezar'] text-xl w-[60vw]"> This page is filled with reflections on aspects of my work term experiences, highlighting what I did and what learned. </p>
        
		<div className="mt-20 lg:w-[75vw] md:w-[85vw] w-[70vw]">
			<h1 className="w-full items-left text-left z-10 text-2xl font-['Lalezar']">Reports</h1>
			<hr className="w-full border-t-2  border-[#363636]"/>
		</div>
      </div>
      <Box sx={{width: '100%', margin: '15px 0 200px 0'}}>
        <Grid 
          container 
          rowSpacing={8} 
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent={'center'}
          alignItems={'top'}
        >
          <ReportPanel storyNum={0}/>
        </Grid>
      </Box>
    </div>
  );
}

export default Reports;