import { ButtonBase, Typography, styled } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BodyText from '../components/BodyText';
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

const ReportPage = () => {
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
      <div className='w-full flex items-center justify-center'>
        <div className='w-fit h-max text-primary'>
          <Button variant="text" sx={{margin: '60px 0 0 20%', position: 'absolute', zIndex: 3, 'textTransform': 'none',}} href="/reports">
            Other Reports
          </Button>
          
          <div className='lg:w-[55vw] md:w-[70vw] w-[90vw] h-max mt-24 bg-gray-200 flex flex-col items-center justify-center'>
            {/* the title */}
            <Typography 
              variant="h3" 
              style={{ fontFamily: ['Lalazer', 'sans-serif'], fontWeight: '800', width: '90%', marginBottom: '80px', paddingTop: '80px', textAlign: 'center' }}
            >
              {title ? title : 'This Story Does Not Exist'}
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

            <p className='mt-20 mb-20 w-[80%] whitespace-pre-wrap'>
              {body ? body : 'This Story Does Not Exist'}
            </p>
          </div>
        </div>
      </div>
  );
}
export default ReportPage;

const title = 'Tulip Retail - Software Developer'
// const date = 'January 12, 2024'
const hasPrompt = false
