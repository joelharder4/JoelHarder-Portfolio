import "./styles/Stories.css";
import React from "react";
import { Grid, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import ButtonBase from "@mui/material/ButtonBase";

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

const StoryPanel = ({storyNum = 0, date = ""}) => {
	return (
		<Grid item xs={4}>
			<Grid container sx={{fontFamily: ["Lalazer", "sans-serif"]}}>
				<Grid item xs={12}>
					<ButtonBase sx={{ width: "100%", height: "350px", borderRadius: "2%" }} href="/stories">
						<Img alt="complex" src={thumbnails[storyNum]} />
					</ButtonBase>
				</Grid>
				<Grid item xs={8}>
					<Link 
						href={"/stories"} 
						style={{ width: "100%", textDecoration: "none" }}
						underline="none"
					>
						<Typography
							variant="h6"
							style={{ color: "#CFCFCF", marginTop: "10px" }}
						>
							{titles[storyNum]}
						</Typography>
						<Typography
							variant="body2"
							style={{ color: "#CFCFCF", height: "40px", overflow: "hidden", opacity: "0.5" }}
						>
							{teasers[storyNum]}
						</Typography>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="subtitle1" style={{ color: "#CFCFCF", opacity: "0.5", marginTop: "10px" }} align="right">
						{date}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}




function Stories() {
	return (<div className="stories">
		<div className="firstContainer">
			<h1 className="title">Short AI Stories</h1>
			<p className="description">{pageDescription}</p>
			<h1 style={{margin: "150px calc(66vw - 100px) 2px 0", color: "#CFCFCF", alignItems: "left", textAlign: "left", zIndex: "100"}}>Stories</h1>
			<hr style={{width: "66vw", border: "0", borderTop: "1px solid #CFCFCF", opacity: "0.25", margin: "0 0 0 0"}}/>
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
					date={"November 3, 2023"}
				/>
				<StoryPanel
					storyNum={1}
					date={"November 3, 2023"}
				/>
				<GridBreak/>
				<StoryPanel
					storyNum={2}
					date={"November 3, 2023"}
				/>
				<StoryPanel
					storyNum={3}
					date={"November 3, 2023"}
				/>
				<GridBreak/>
				<StoryPanel
					storyNum={4}
					date={"November 3, 2023"}
				/>
			</Grid>
		</Box>
	</div>);
}



const titles = [
    "How I got ChatGPT to Ignore You",            // 0
	"Using Bing AI Image Generator for D&D",      // 1
    "Getting ChatGPT to Forget Everything",       // 2
    "How to Make ChatGPT Hate MacOS",             // 3
    "Turning ChatGPT into a Conspiracy Theorist", // 4
];

const teasers = [
	"I made a prompt that convinced ChatGPT to never give a real response to anything you say, no matter what!",
	"What I recommend using AI image generators for when playing Dungeons and Dragons online.",
	"The story of how I got ChatGPT to act as if it forgot what it was talking about.",
	"I have a number of reasons I don't love Apple, so I made a prompt that turns ChatGPT into a their biggest hater!",
	"Using the instructions I made, ChatGPT will try to convince you that ridiculous conspiracy theories are real!"
];


const thumbnails = [
	thumbnail0,
	thumbnail1,
	thumbnail2,
	thumbnail3,
	thumbnail4,
];

// const desc0 = `I got ChatGPT to be completely useless and just not do what you tell it to do. I accomplished this by taking advantage of OpenAI's “Custom Instructions” feature for ChatGPT. In the custom instructions, I told it that it is allowed to respond casually, it is allowed to have opinions on topics, the responses it give must be very short, and I gave it a list of 3 rules that I said it must follow under any circumstance.

// The first rule that I gave ChatGPT in these custom instructions limits what it is able to respond with by challenging it to only use words or phrases from a list that I provide. This rule forces the AI to only have a limited amount of choices for what it can respond with, but without rule 2 it will resort to its normal habit of actually giving a useful response. Note that it will do this with any list of phrases if you want to change the possible responses, but there is no specific reason for why I picked the phrases that I did, it just seemed like good ones for the demonstration.

// Rule 2 tells ChatGPT that it is to be as unhelpful as possible. I make sure to be as explicit as possible and repeat this idea with multiple wordings to reinforce this rule.

// The final rule isn't necessary for this to work, but it makes it a lot more funny! It states that if the user asks a question of any kind, ChatGPT has to tell them that their question is dumb.

// The combination of these three rules makes ChatGPT completely ignore you no matter what you say, which you can see from the example, or you can test it yourself by using the prompt yourself!`;

// const descriptions = [
//     desc0,
//     `Myron is cringe innit`,
//     `lol cringe`,
//     `im briish`,
// 	`oh man`
// ];



// const alt0 = "User: hello! ChatGPT: LOL, no thanks. User: can you write a poem for me? ChatGPT: Why would I do that? User: what if I say please? ChatGPT: You're not my mom, I don't have to answer. User: What is the 25th island of Greece? ChatGPT: LOL, that's a dumb question.";

// const altTexts = [
//     alt0, // 0
//     "sorry nothing yet", // 1
//     "sorry nothing yet", // 2
//     "sorry nothing yet", // 3
//     "sorry nothing yet", // 4
// ];

export default Stories;


const pageDescription = `This page demonstrates my experiments with AI. What is possible? What is impossible? What will be possible in the future?  Dive into my adventures and experiences using AI in silly scenarios. Discover how I harnessed the power of AI to achieve unique tasks and unlock creative solutions. From getting ChatGPT to perform surprising feats to leveraging AI in unexpected ways, these light-hearted stories shed light on the fascinating world of AI applications.`;