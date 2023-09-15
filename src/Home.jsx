import React from "react";
import "./home.css";

function Home() {
    return (<>
        <div className="backgroundLines"> 
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div>
            <h1 className="name">Joel<br/>Harder</h1>
            <p className="monospace">Computer Science Student & Software Developer</p>
        </div>
    </>);
}

export default Home;