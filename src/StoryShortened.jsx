import "./styles/StoriesShortened.css";
import React from "react";


function StoryShortened({title, description, fill = false}) {
    const background = fill ? {background: "#223A52"} : {background: "inherit"};

    return (<div className="storiesShortened" style={background}>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>); 
}


export default StoryShortened;