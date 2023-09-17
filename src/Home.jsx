import React from "react";
import "./styles/Home.css";
import Button from "@mui/material/Button";
import { gsap } from "gsap";
import { useState } from "react";
const { useRef, useLayoutEffect } = React;
gsap.registerPlugin( useLayoutEffect, useRef);


function Home() {
    const [showDetails, setShowDetails] = useState(false);
    const title = useRef();

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
                {css: {"opacity": "1", "marginTop": "calc(14vh + 310px)"}, duration: 1.5, delay: 1}
            );
        }, title);
        
        return () => ctx.revert();
    }, []);


    function test() {
        setShowDetails(!showDetails);
    }

    let detailPanel = (showDetails) ? 
        <div className="panel">
            <h1>hi aww<br></br> pwease</h1>
        </div> : null;


    return (<>
        <div className="panel">
            <div ref={title}>
                <h2 className="shadow">Joel<br/>Harder</h2>
                <h1 className="name">Joel<br/>Harder</h1>
                <p className="monospace">Computer Science Student & Software Developer</p>
            </div>
            <div className="btnContainer">
                <Button variant="outlined" sx={cssButton} onClick={test}>My Experience</Button>
            </div>
        </div>
        {detailPanel}
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

// const cssOverflow = (state) => {return (state) ? {"overflow-y": "hidden"} : {"overflow-y": "auto"}}

export default Home;