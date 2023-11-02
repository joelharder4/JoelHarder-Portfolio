import React from "react";
import pythonLogo from "./img/logos/python.png";
import javascriptLogo from "./img/logos/javascript.png";
import htmlLogo from "./img/logos/html.png";
import reactLogo from "./img/logos/react.png";
import phpLogo from "./img/logos/php.png";
import mysqlLogo from "./img/logos/mysql.png";
import "./styles/Home.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fab } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { useState } from "react";
const { useRef, useLayoutEffect } = React;
gsap.registerPlugin( useLayoutEffect, useRef, ScrollTrigger);

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
    // const [showScrollTopVisible, setShowScrollTopVisible] = useState(false);
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
            <div className="textContainer">
                <p>{jobExperience}</p>
                {/* {jobExperience.split("\n\n").map((paragraph, i) => {
                    return <p key={i}>{paragraph}</p>
                })} */}
            </div>
            <div style={{position: "fixed", top: "90vh", left: "90vw"}} className="scrollToTop">
                <Fab aria-label="Top" color="#CFCFCF" size="small" onClick={scrollToTop}>
                    <UpIcon />
                </Fab>
            </div>
        </div>
    </div>);
}


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

const jobExperience = `I'm Joel, a dedicated computer science student at the University of Guelph, currently in my third year of a five-year Computer Science Bachelor's degree program with Co-op and I will graduate in 2026. My journey in the world of technology has been amazing so far, and I'm thrilled to share my experience with you.

During my Co-op placement at Tulip Retail (September to December, 2023), I had the incredible opportunity to immerse myself in the world of Software Development. This experience was pivotal in learning to apply my academic knowledge in a real workplace. At Tulip Retail, I delved into a wide array of technologies, including PHP, React, MySQL, and various general software development tools such as JIRA, Git, and experience working with a CI/CD framework. Working collaboratively with my team, we delivered full-stack projects that not only met but often exceeded expectations.

My university education has been a valuable foundation for my technical knowledge. Throughout my studies, I've had the privilege of exploring a diverse range of programming languages, from the foundational C and Python to the versatile Java, HTML, CSS, and the world of database management with SQLite. These courses have equipped me with a strong theoretical understanding of computer science principles, which I've been able to apply in practical settings.

In addition to academics, I've also taken the initiative to develop my own personal projects. A particular project which stands out and that I am very proud of is this Website! It was developed using React.js, HTML, CSS, and it is hosted using Google's Firebase hosting. Another notable highlight was my participation in a Hackathon at the University of Waterloo. This event named Olypihack pushed me to sharpen my skills in HTML, CSS, React JS, and Python while collaborating in a group environment.

As I continue to grow and learn in the ever-evolving field of computer science, I am excited to embark on new challenges and collaborations. My goal is to contribute my skills, creativity, and dedication to innovative projects, making a positive impact in the world of technology.

Thank you for visiting my website, and if you're interested in discussing potential employment opportunities or learning more about my journey, please don't hesitate to reach out by using the "contact me" option on the navigation bar. I also encourage you to explore the other sections of my website. On the "About Me" page, you can discover more about my hobbies and personality beyond Software Development. The "Projects" page showcases a comprehensive list of the significant technical projects I've created. The "Stories" page is where I share my personal experiments with ChatGPT and other intriguing small projects. Lastly, on the "Reports" page, you will find my final work term reports from my co-op placements, offering insights into my professional growth.`;

export default Home;