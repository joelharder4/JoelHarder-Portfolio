import React from "react";
import { Typography } from "@mui/material";

function BodyText(props) {
    const styleDefault = {
        color: "#CFCFCF",
        fontFamily: ["Lalazer", "sans-serif"],
        width: "60%",
        textAlign: "justify",
        whiteSpace: "pre-wrap",
        fontSize: "20px",
        fontWeight: "400",
    };
    const newStyle = { ...styleDefault, ...props.style }

    return (
        <Typography 
            variant="body1" 
            style={newStyle}
        >
            {props.children}
        </Typography>
    )
}


export default BodyText;