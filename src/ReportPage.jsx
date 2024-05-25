import { Box, ButtonBase, Typography, styled } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BodyText from './BodyText';
import gsap from 'gsap';
import Button from '@mui/material/Button';

const exampleScreenshots = [
    '/img/thumbnails/tulip_retail.png'
];

const Img = styled('img')({
	objectFit: 'cover',
    border: '1px solid #363636',
    boxShadow: '0 0 15px #363636',
    height: '100%',
    width: '100%'
  });

const StoryPage = () => {
    const { reportNum } = useParams();
    const { t } = useTranslation();
    const buttonRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // let title = t(`storyTitle${reportNum}`, "");
    let body = t(`reportBody${reportNum}`, '');
    // let date = t(`storyDate${reportNum}`, "");
    // let prompt = t(`storyPrompt${reportNum}`, "");
    let example = exampleScreenshots[reportNum];

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

    return (
        <Box sx={{ width: '100%', height: 'max-content', position: 'absolute' }} align="center">
            <Button variant="text" sx={{margin: '60px 0 0 20%', position: 'absolute', zIndex: 3, 'textTransform': 'none',}} href="/stories">
                Other Reports
            </Button>
            
            <Box sx={{ width: '55vw', height: 'max-content', margin: '110px 0 0 0', position: 'relative', background: '#303030' }} align="center">
                {/* the title */}
                <Typography 
                    variant="h3" 
                    style={{ color: '#CFCFCF', fontFamily: ['Lalazer', 'sans-serif'], fontWeight: '800', width: '90%', marginBottom: '80px', paddingTop: '80px' }}
                >
                    {title ? title : 'This Story Does Not Exist'}
                </Typography>

                {/* the date */}
                <Typography 
                    variant="subtitle1" 
                    style={{ color: '#CFCFCF', fontFamily: ['Lalazer', 'sans-serif'], margin: '-50px 0 0 75%', whiteSpace: 'pre-wrap', fontSize: '20px', fontWeight: '400', opacity: '0.5', position: 'absolute' }}
                >
                    {date ? date : 'Unknown Date'}
                </Typography>

                {/* the example image */}
                {example ? <>{hasPrompt ? <>
                    {isHovering ? <BodyText style={{width: '100%', position: 'absolute', fontSize: '18px', textAlign: 'center', margin: '20vw 0 0 0', padding: 'none'}}>Click to Copy Custom Instructions</BodyText> : null}
                    <ButtonBase 
                        onClick={() => {navigator.clipboard.writeText(prompt)}}
                        ref={buttonRef}
                        sx={{
                            margin: '50px 0 0 0',
                            width: 'auto',
                            height: '40vw',
                            maxHeight: '1000px'
                        }}
                    >
                        <Img src={example}/>
                    </ButtonBase>
                    </> : <Img src={example} sx={{width: '80%'}} />}</> : null}

                <BodyText style={{ margin: '50px 0 200px 0', width: '70%', paddingBottom: '150px' }}>
                    {body ? body : 'This Story Does Not Exist'}
                </BodyText>
            </Box>
        </Box>
    );
}
export default StoryPage;

const title = 'Tulip Retail - Software Developer'
const date = 'January 12, 2024'
const hasPrompt = false
