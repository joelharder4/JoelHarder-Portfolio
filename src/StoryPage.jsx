import { Box, ButtonBase, Typography, styled } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BodyText from "./BodyText";
import gsap from "gsap";

import example0 from "./img/screenshots/chat_gpt_ignore_prompt.png"

const Img = styled('img')({
	objectFit: 'cover',
    border: "1px solid #363636",
    boxShadow: "0 0 15px #363636",
    height: "100%",
    width: "100%"
  });

function StoryPage() {
    const { storyNum } = useParams();
    const { t } = useTranslation();
    const buttonRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    let title = t(`storyTitle${storyNum}`, "");
    let body = t(`storyBody${storyNum}`, "");
    let date = t(`storyDate${storyNum}`, "");
    let prompt = t(`storyPrompt${storyNum}`, "");
    let example = exampleScreenshots[storyNum];

    useEffect(() => {
        const button = buttonRef.current;
    
        const onMouseEnter = () => {
            gsap.to(button, { opacity: 0.3, duration: 0.4 });
            setIsHovering(true);
        };
    
        const onMouseLeave = () => {
            gsap.to(button, { opacity: 1, duration: 0.4 });
            setIsHovering(false);
        };
    
            button.addEventListener('mouseenter', onMouseEnter);
            button.addEventListener('mouseleave', onMouseLeave);
    
        return () => {
            button.removeEventListener('mouseenter', onMouseEnter);
            button.removeEventListener('mouseleave', onMouseLeave);
        };
      }, []);

    return (
        <Box sx={{ width: "100%", height: "max-content", margin: "15vh 0 0 0", position: "absolute" }} align="center">
            <Typography 
                variant="h2" 
                style={{ color: "#CFCFCF", fontFamily: ["Lalazer", "sans-serif"], fontWeight: "800", width: "60%" }}
            >
                {title ? title : "This Story Does Not Exist"}
            </Typography>

            <Typography 
                variant="subtitle1" 
                style={{ color: "#CFCFCF", fontFamily: ["Lalazer", "sans-serif"], width: "60%", textAlign: "right", margin: "20px 0 0 0", whiteSpace: "pre-wrap", fontSize: "20px", fontWeight: "400", opacity: "0.5" }}
            >
                {date ? date : "Unknown Date"}
            </Typography>

            <BodyText style={{ margin: "20vh 0 100px 0" }}>
                {body ? body : "This Story Does Not Exist"}
            </BodyText>

            {example ? <>
                {isHovering ? <BodyText style={{position: "absolute", fontSize: "20px", textAlign: "center", margin: "320px 0 0 20%"}}>Click to Copy Custom Instructions</BodyText> : null}
                <ButtonBase 
                    onClick={() => {navigator.clipboard.writeText(prompt)}}
                    ref={buttonRef}
                    sx={{
                        margin: "0 0 100px 0",
                        width: 'auto',
                        height: '50%',
                    }}
                >
                    <Img src={example}/>
                </ButtonBase>
                </> : null}
        </Box>
    )
}
export default StoryPage;


const exampleScreenshots = [
    example0
];