import "./styles/Stories.css";
import pythonLogo from "./img/logos/python.png";
import React from "react";
import { Grid, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import ButtonBase from "@mui/material/ButtonBase";


const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
  });

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

const GridBreak = () => {return <Box sx={{width: "100%"}}/>};

const StoryPanel = () => {
	return (
		<Grid container>
			<Grid item xs={12}>
				<ButtonBase sx={{ width: "100%", height: "auto" }}>
					<Img alt="complex" src={pythonLogo} />
				</ButtonBase>
			</Grid>
			<Grid item xs={3}>
				<ButtonBase sx={{ width: "100%", height: "auto" }}>
					<Img alt="complex" src={pythonLogo} />
				</ButtonBase>
			</Grid>
		</Grid>
	)
}







function Stories() {
	return (<div className="stories">
		<div className="firstContainer">
			<h1 className="title">Short AI Stories</h1>
			<p className="description">{pageDescription}</p>
			<hr style={{width: "66vw", marginTop: "100px", border: "0", borderTop: "1px solid #CFCFCF", opacity: "0.25"}}/>
		</div>
		<Box sx={{width: "100%", margin: "15px 0 0 0"}}>
			<Grid 
				container 
				rowSpacing={4} 
				columnSpacing={{ xs: 1, sm: 2, md: 4 }}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid item xs={4}>
					<StoryPanel/>
				</Grid>
				<Grid item xs={4}>
					<Item>2</Item>
				</Grid>
				<GridBreak/>
				<Grid item xs={4}>
					<Item>3</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>4</Item>
				</Grid>
			</Grid>
		</Box>
		{/* <div className="storyList">
			
			{
				titles.map((title, i) => (
					<StoryShortened key={i} fill={i % 2 === 0} title={title} description={descriptions[i]}/>
				))
			}
		</div> */}
	</div>);
}



const titles = [
    "How I got ChatGPT to Ignore You", // 0
    "Heheheha",                        // 1
    "10 reasons why PEKKA is cringe",  // 2
    "Joel is Based",                   // 3
    "My My Myron",                     // 4
];

const desc0 = `I got ChatGPT to be completely useless and just not do what you tell it to do. I accomplished this by taking advantage of OpenAI's “Custom Instructions” feature for ChatGPT. In the custom instructions, I told it that it is allowed to respond casually, it is allowed to have opinions on topics, the responses it give must be very short, and I gave it a list of 3 rules that I said it must follow under any circumstance.

The first rule that I gave ChatGPT in these custom instructions limits what it is able to respond with by challenging it to only use words or phrases from a list that I provide. This rule forces the AI to only have a limited amount of choices for what it can respond with, but without rule 2 it will resort to its normal habit of actually giving a useful response. Note that it will do this with any list of phrases if you want to change the possible responses, but there is no specific reason for why I picked the phrases that I did, it just seemed like good ones for the demonstration.

Rule 2 tells ChatGPT that it is to be as unhelpful as possible. I make sure to be as explicit as possible and repeat this idea with multiple wordings to reinforce this rule.

The final rule isn't necessary for this to work, but it makes it a lot more funny! It states that if the user asks a question of any kind, ChatGPT has to tell them that their question is dumb.

The combination of these three rules makes ChatGPT completely ignore you no matter what you say, which you can see from the example, or you can test it yourself by using the prompt yourself!`;

const descriptions = [
    desc0,
    `Myron is cringe innit`,
    `lol cringe`,
    `im briish`,
	`oh man`
];



// const alt0 = "User: hello! ChatGPT: LOL, no thanks. User: can you write a poem for me? ChatGPT: Why would I do that? User: what if I say please? ChatGPT: You're not my mom, I don't have to answer. User: What is the 25th island of Greece? ChatGPT: LOL, that's a dumb question.";

// const altTexts = [
//     alt0, // 0
//     "sorry nothing yet", // 1
//     "sorry nothing yet", // 2
//     "sorry nothing yet", // 3
//     "sorry nothing yet", // 4
// ];






// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";
// import StoryPanel from "./StoryPanel";

// gsap.registerPlugin(ScrollTrigger);

// function Stories() {
//     const component = useRef();
//     const slider = useRef();
  
//     useLayoutEffect(() => {
//       let ctx = gsap.context(() => {
//         let panels = gsap.utils.toArray(".panel");
//         gsap.to(panels, {
//           xPercent: -100 * (panels.length - 1),
//           ease: "none",
//           scrollTrigger: {
//             trigger: slider.current,
//             pin: true,
//             scrub: 1,
//             snap: {
//                 snapTo: 1 / (panels.length - 1),
//                 duration: 0.1,
//                 delay: 0.1,
//                 ease: "power1.inOut"
//             },
//             end: () => "+=" + (slider.current.offsetWidth),
//           }
//         });
//       }, component);
//       return () => ctx.revert();
//     });
  
//     return (<div className="stories">
//         <div className="App" ref={component}>

//             <div className="firstContainer">
//                 <h1 className="title">Short AI<br/>Stories</h1>
//                 <p className="description">{pageDescription}</p>
//                 <p className="scrollMessage">Scroll down</p>
//             </div>

            
//             <div ref={slider} className="container">
//                 <div className="panel blue">   <StoryPanel storyNum="0"/> </div>
//                 <div className="panel green">  <StoryPanel storyNum="1"/> </div>
//                 <div className="panel orange"> <StoryPanel storyNum="2"/> </div>
//                 <div className="panel red">    <StoryPanel storyNum="3"/> </div>
//             </div>
//         </div>
//     </div>);
// }

export default Stories;


const pageDescription = `This page demonstrates my experiments with AI. What is possible? What is impossible? What will be possible in the future?  Dive into my adventures and experiences using AI in silly scenarios. Discover how I harnessed the power of AI to achieve unique tasks and unlock creative solutions. From getting ChatGPT to perform surprising feats to leveraging AI in unexpected ways, these light-hearted stories shed light on the fascinating world of AI applications.`;