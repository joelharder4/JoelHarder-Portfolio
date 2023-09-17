import React from "react";
import "./styles/Home.css";
import Button from "@mui/material/Button";


function Home() {
    return (<>
        <div>
            <h2 className="shadow">Joel<br/>Harder</h2>
            <h1 className="name">Joel<br/>Harder</h1>
            <p className="monospace">Computer Science Student & Software Developer</p>
        </div>
        <div className="btnContainer">
            <Button variant="outlined" sx={cssButton} >My Experience</Button>
        </div>
    </>);
}


const cssButton = {
    "marginLeft": "auto",
    "marginRight": "auto",
    "display": "block",
    "width": "Max-content",
    "text-transform": "none",
    "font-family": ("Lalazer", "sans-serif"),
    "letter-spacing": "-0.3px",
    "font-size": "18px",
    "font-weight": "700",
}

export default Home;