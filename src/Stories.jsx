import "./styles/Stories.css";
import React from "react";
import { Grid, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import ButtonBase from "@mui/material/ButtonBase";
import { useTranslation } from "react-i18next";

import thumbnail0 from "./img/thumbnails/chatgpt_ignore_you.jpg";
import thumbnail1 from "./img/thumbnails/bing_ai_for_dnd.jpg";
import thumbnail2 from "./img/thumbnails/chatgpt_is_confused.jpg";
import thumbnail3 from "./img/thumbnails/angry_mac_hater.jpg";
import thumbnail4 from "./img/thumbnails/conspiracy_theory_chatgpt.jpg";

const Img = styled('img')({
	margin: 'none',
	display: 'block',
	objectFit: 'cover',
	height: '100%',
	width: '100%',
	borderRadius: "2%",
  });

const GridBreak = () => {return <Box sx={{width: "100%"}}/>};

const StoryPanel = ({storyNum = -1}) => {
	const { t } = useTranslation();

	const linkTo = "/stories/" + storyNum.toString();
	let title = t(`storyTitle${storyNum}`, "");
    let teaser = t(`storyTeaser${storyNum}`, "");
    let date = t(`storyDate${storyNum}`, "");

	return (
		<Grid item xs={4}>
			<Grid container sx={{fontFamily: ["Lalazer", "sans-serif"]}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: "100%", height: "40vh", borderRadius: "2%" }} href={linkTo}>
						<Img alt="complex" src={thumbnails[storyNum]} />
					</ButtonBase>
				</Grid>
				<Grid item xs={9}>
					<Link 
						to={linkTo}
						style={{ width: "100%", textDecoration: "none" }}
						underline="none"
					>
						<Typography
							variant="h6"
							style={{ color: "#CFCFCF", marginTop: "10px" }}
						>
							{title || "Story does not exist"}
						</Typography>
						<Typography
							variant="body2"
							style={{ color: "#CFCFCF", height: "40px", overflow: "hidden", opacity: "0.5" }}
						>
							{teaser || "Something went wrong"}
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={3}>
					<Typography variant="subtitle1" style={{ color: "#CFCFCF", opacity: "0.5", marginTop: "10px" }} align="right">
						{date || "Unknown Date"}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}



function Stories() {
	const { t } = useTranslation();

	return (<div className="stories">
		<div className="firstContainer">
			<h1 className="title">Short AI Stories</h1>
			<p className="description"> {t("storiesDesc")} </p>
			<h1 style={{margin: "150px calc(66vw - 100px) 2px 0", color: "#CFCFCF", alignItems: "left", textAlign: "left", zIndex: "2"}}>Stories</h1>
			<hr style={{width: "66vw", border: "0", borderTop: "2px solid #363636", margin: "0 0 0 0"}}/>
		</div>
		<Box sx={{width: "100%", margin: "15px 0 200px 0"}}>
			<Grid 
				container 
				rowSpacing={8} 
				columnSpacing={{ xs: 1, sm: 2, md: 4 }}
				justifyContent={"center"}
				alignItems={"top"}
			>
				<StoryPanel
					storyNum={0}
				/>
				<StoryPanel
					storyNum={1}
				/>
				<GridBreak/>
				<StoryPanel
					storyNum={2}
				/>
				<StoryPanel
					storyNum={3}
				/>
				<GridBreak/>
				<StoryPanel
					storyNum={4}
				/>
			</Grid>
		</Box>
	</div>);
}

const thumbnails = [
	thumbnail0,
	thumbnail1,
	thumbnail2,
	thumbnail3,
	thumbnail4,
];

export default Stories;