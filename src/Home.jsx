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
    // const [showDetails, setShowDetails] = useState(false);
    const title = useRef();
    const scrollTo = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".name", 
                {css: {"opacity": "0", "marginLeft": "40vw"}}, 
                {css: {"opacity": "1", "marginLeft": "5vw"}, duration: 2}
            );
            gsap.fromTo(
                ".shadow", 
                {css: {"opacity": "0", "marginLeft": "40vw"}}, 
                {css: {"opacity": "1", "marginLeft": "5vw"}, duration: 2}
            );
            gsap.fromTo(
                ".monospace", 
                {css: {"opacity": "0", "marginTop": "100vh"}}, 
                {css: {"opacity": "1", "marginTop": "calc(25vh + 310px)"}, duration: 1.5, delay: 1}
            );
        }, title);
        
        return () => ctx.revert();
    }, []);

    function scrollToDetails() {
        scrollTo.current.scrollIntoView({behavior: 'smooth'});
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
                        toggleActions: "restart restart restart restart"
                    },
                    delay: 0.2 * i
                }
            );
        });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);


    return (<>
        <div className="panel1">
            <div ref={title}>
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
        <div className="panel2">
            <div className="iconContainer" ref={main}>
                <img className="logo" src={pythonLogo} alt="Python Programming language logo"/>
                <img className="logo" src={javascriptLogo} alt="Javascript Programming language logo"/>
                <img className="logo" src={htmlLogo} alt="HTML Programming language logo"/>
                <img className="logo" src={reactLogo} alt="React Programming language logo"/>
                <img className="logo" src={phpLogo} alt="PHP Programming language logo"/>
                <img className="logo" src={mysqlLogo} alt="mySQL Programming language logo"/>
            </div>
            <div className="textContainer" ref={scrollTo}>
                <p>
                    {jobExperience}
                </p>
            </div>
        </div>
    </>);
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

const jobExperience = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum ante et odio vehicula vestibulum. Aenean quis luctus leo, eget ultricies elit. Sed sit amet vehicula ex. Donec eu cursus ligula, eu sodales mi. In erat ex, pulvinar laoreet justo malesuada, eleifend semper est. Cras molestie eros vitae risus ultrices dictum. Donec et mattis magna. Praesent in sapien eu sapien porttitor tincidunt.

Nam consectetur leo elit, in iaculis mi commodo scelerisque. Duis et sollicitudin velit. Aliquam tincidunt congue euismod. Donec at congue risus. Suspendisse tincidunt scelerisque justo nec aliquam. In iaculis arcu vel viverra imperdiet. Donec at dignissim leo. Vivamus ut luctus tortor, a consectetur ex. Donec cursus varius enim sit amet sodales. Nullam posuere elit et leo finibus pellentesque. Praesent eleifend volutpat accumsan.

Sed eu diam vel ipsum mollis pretium. Suspendisse magna nulla, viverra ut euismod sit amet, lacinia eu enim. Suspendisse potenti. Sed iaculis justo id est egestas iaculis. Nullam ornare, dui sed sollicitudin vehicula, risus metus tincidunt ligula, a maximus sapien mauris ut ex. In non faucibus ante, in luctus est. Nam convallis, velit id tristique condimentum, dui justo aliquet urna, at tristique massa odio sit amet ipsum. Duis eu vehicula tortor, vitae sollicitudin turpis. Pellentesque suscipit lectus non ligula mattis, id pulvinar nisi eleifend. Proin posuere pretium quam. Donec dapibus in nunc non convallis. Aliquam nec interdum ligula. Sed sed vestibulum orci, eget congue erat.
`;

export default Home;