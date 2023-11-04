import { Box, ButtonBase, Typography, styled } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BodyText from "./BodyText";
import gsap from "gsap";
import Button from "@mui/material/Button";

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
        if (button === null) {
            return
        }
    
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

    return (<>
        <Button variant="text" sx={{margin: "100px 0 0 calc(70vw + 50px)", position: "absolute", zIndex: 3, "textTransform": "none",}} href="/stories">
            Other Stories
        </Button>
        <Box sx={{ width: "100%", height: "max-content", margin: "150px 0 0 0", position: "absolute" }} align="center">
            <Typography 
                variant="h2" 
                style={{ color: "#CFCFCF", fontFamily: ["Lalazer", "sans-serif"], fontWeight: "800", width: "60%", marginBottom: "80px" }}
            >
                {title ? title : "This Story Does Not Exist"}
            </Typography>

            <Typography 
                variant="subtitle1" 
                style={{ color: "#CFCFCF", fontFamily: ["Lalazer", "sans-serif"], margin: "-50px 0 0 70vw", whiteSpace: "pre-wrap", fontSize: "20px", fontWeight: "400", opacity: "0.5", position: "absolute" }}
            >
                {date ? date : "Unknown Date"}
            </Typography>

            {example ? <>
                {isHovering ? <BodyText style={{position: "absolute", fontSize: "18px", textAlign: "center", margin: "35vh 0 0 20%"}}>Click to Copy Custom Instructions</BodyText> : null}
                <ButtonBase 
                    onClick={() => {navigator.clipboard.writeText(prompt)}}
                    ref={buttonRef}
                    sx={{
                        margin: "50px 0 0 0",
                        width: 'auto',
                        height: '60vw',
                        maxHeight: '1000px'
                    }}
                >
                    <Img src={example}/>
                </ButtonBase>
                </> : null}

            <BodyText style={{ margin: "50px 0 200px 0" }}>
                {body ? body : "This Story Does Not Exist"}
            </BodyText>
        </Box>
    </>);
}
export default StoryPage;


const exampleScreenshots = [
    example0
];
