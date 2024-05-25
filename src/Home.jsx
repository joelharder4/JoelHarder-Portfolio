import React from 'react';
import './styles/Home.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from 'react-i18next';
const { useRef, useLayoutEffect } = React;
gsap.registerPlugin( useLayoutEffect, useRef, ScrollTrigger);

const cssButton = {
    'marginLeft': 'auto',
    'marginRight': 'auto',
    'display': 'block',
    'width': 'Max-content',
    'textTransform': 'none',
    'fontFamily': ('Lalazer', 'sans-serif'),
    'letterSpacing': '-0.3px',
    'fontSize': '18px',
    'fontWeight': '700',
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#2F679E',
        light: '#1976D2',
        dark: '#213A52',
        contrastText: '#CFCFCF',
      },
    },
  });

const Home = () => {
    const { t } = useTranslation();
    const title = useRef();
    const panel1 = useRef();
    const panel2 = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.name', 
                {css: {'opacity': '0', 'marginLeft': '40vw'}}, 
                {css: {'opacity': '1', 'marginLeft': '0'}, duration: 2}
            );
            gsap.fromTo(
                '.shadow', 
                {css: {'opacity': '0', 'marginLeft': '40vw'}}, 
                {css: {'opacity': '1', 'marginLeft': '0'}, duration: 2}
            );
            gsap.fromTo(
                '.monospace', 
                {css: {'opacity': '0', 'marginTop': 'min(100vw, 100vh)'}}, 
                {css: {'opacity': '1', 'marginTop': 'min(25vw, 33vh)'}, duration: 1.5, delay: 1}
            );
        }, title);
        
        return () => ctx.revert();
    }, []);

    function scrollToDetails() {
        panel2.current.scrollIntoView({behavior: 'smooth'});
    }

    function scrollToTop() {
        panel1.current.scrollIntoView({behavior: 'smooth'});
    }

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
        const logos = self.selector('.logo');
        logos.forEach((logo, i) => {
            gsap.from(logo, {
                    css: {'opacity': '0'},
                    duration: 2,
                    scrollTrigger: {
                        trigger: logo,
                        toggleActions: 'restart resume resume resume'
                    },
                    delay: 0.2 * i
                }
            );
        });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const button = self.selector('.scrollToTop');
            gsap.from(button, {
                    css: {'opacity': '0', 'cursor': 'default'},
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: self.selector('.panel2'),
                        start: '500px',
                        toggleActions: 'restart none none reverse'
                    }
                }
            );
        }, panel2); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


    return (<div className="homepage">
        <div className="panel1" ref={panel1}>
            <div ref={title} style={{paddingLeft: '5vw', paddingTop: '25vh'}}>
                <h1 className="shadow">Joel<br/>Harder</h1>
                <h1 className="name">Joel<br/>Harder</h1>
                <p className="monospace">Computer Science Student & Software Developer</p>
            </div>
            <div className="btnContainer">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" sx={cssButton} onClick={scrollToDetails} color="primary">My Experience</Button>
                </ThemeProvider>
            </div>
        </div>
        <div className="panel2 pt-14" ref={panel2}>
            <div className="flex flex-row gap-8 w-full justify-center my-4 h-14 md:h-20 lg:h-32" ref={main}>
                <img className="logo" src={'/img/logos/python.png'} alt="Python Programming language logo"/>
                <img className="logo" src={'/img/logos/javascript.png'} alt="Javascript Programming language logo"/>
                <img className="logo" src={'/img/logos/html.png'} alt="HTML Programming language logo"/>
                <img className="logo" src={'/img/logos/react.png'} alt="React Programming language logo"/>
                <img className="logo" src={'/img/logos/php.png'} alt="PHP Programming language logo"/>
                <img className="logo" src={'/img/logos/mysql.png'} alt="mySQL Programming language logo"/>
            </div>
            <div className='w-full flex items-center justify-center my-16'>
                <div className='w-[90vw] md:w-[80vw] lg:w-[70vw] bg-[#303030]'>
                    <p className="p-16 md:p-20 text-sm md:text-lg lg:text-xl font-thin font-['Lalezar'] text-[#CFCFCF] whitespace-pre-wrap">
                        {t('homepageDesc')}
                    </p>
                </div>
            </div>
            <div style={{position: 'fixed', top: '90vh', left: '90vw'}} className="scrollToTop">
                <Fab aria-label="Top" color="#CFCFCF" size="small" onClick={scrollToTop}>
                    <UpIcon />
                </Fab>
            </div>
        </div>
    </div>);
}

export default Home;