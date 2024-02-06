import React from "react";
import pythonLogo from "./img/logos/python.png";
import javascriptLogo from "./img/logos/javascript.png";
import htmlLogo from "./img/logos/html.png";
import reactLogo from "./img/logos/react.png";
import phpLogo from "./img/logos/php.png";
import mysqlLogo from "./img/logos/mysql.png";
import "./styles/Home.css";
import BodyText from "./BodyText";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fab, Box } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslation } from "react-i18next";
// import { useState } from "react";
const { useRef, useLayoutEffect } = React;
gsap.registerPlugin( useLayoutEffect, useRef, ScrollTrigger);

const cssButton = {
    "marginLeft": "auto",
    "marginRight": "auto",
    "display": "block",
    "width": "Max-content",
    "textTransform": "none",
    "fontFamily": ("Lalazer", "sans-serif"),
    "letterSpacing": "-0.3px",
    "fontSize": "18px",
    "fontWeight": "700",
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

function Home() {
    const { t } = useTranslation();
    const title = useRef();
    const panel1 = useRef();
    const panel2 = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".name", 
                {css: {"opacity": "0", "marginLeft": "40vw"}}, 
                {css: {"opacity": "1", "marginLeft": "0"}, duration: 2}
            );
            gsap.fromTo(
                ".shadow", 
                {css: {"opacity": "0", "marginLeft": "40vw"}}, 
                {css: {"opacity": "1", "marginLeft": "0"}, duration: 2}
            );
            gsap.fromTo(
                ".monospace", 
                {css: {"opacity": "0", "marginTop": "min(100vw, 100vh)"}}, 
                {css: {"opacity": "1", "marginTop": "min(25vw, 33vh)"}, duration: 1.5, delay: 1}
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
                    css: {"opacity": "0"},
                    duration: 2,
                    scrollTrigger: {
                        trigger: logo,
                        toggleActions: "restart resume resume resume"
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
                    css: {"opacity": "0", "cursor": "default"},
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: self.selector(".panel2"),
                        start: "500px",
                        toggleActions: "restart none none reverse"
                    }
                }
            );
        }, panel2); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


    return (<div className="homepage">
        <div className="panel1" ref={panel1}>
            <div ref={title} style={{paddingLeft: "5vw", paddingTop: "25vh"}}>
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
        <div className="panel2" ref={panel2}>
            <div className="iconContainer" ref={main}>
                <img className="logo" src={pythonLogo} alt="Python Programming language logo"/>
                <img className="logo" src={javascriptLogo} alt="Javascript Programming language logo"/>
                <img className="logo" src={htmlLogo} alt="HTML Programming language logo"/>
                <img className="logo" src={reactLogo} alt="React Programming language logo"/>
                <img className="logo" src={phpLogo} alt="PHP Programming language logo"/>
                <img className="logo" src={mysqlLogo} alt="mySQL Programming language logo"/>
            </div>
            <Box sx={{ width: "100%", height: "max-content", position: "absolute" }} align="center">
                <Box sx={{ width: "55vw", height: "max-content", margin: "80px 0 100px 0", position: "relative", background: "#303030" }} align="center">
                    <BodyText style={{ padding: "100px 100px 100px 100px" }}>
                        {t("homepageDesc")}
                    </BodyText>
                </Box>
            </Box>
            <div style={{position: "fixed", top: "90vh", left: "90vw"}} className="scrollToTop">
                <Fab aria-label="Top" color="#CFCFCF" size="small" onClick={scrollToTop}>
                    <UpIcon />
                </Fab>
            </div>
        </div>
    </div>);
}

export default Home;