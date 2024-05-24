import React from 'react';
import { Typography } from '@mui/material';

const BodyText = ({style, children}) => {
    const styleDefault = {
        color: '#CFCFCF',
        fontFamily: ['Lalazer', 'sans-serif'],
        textAlign: 'justify',
        whiteSpace: 'pre-wrap',
        fontSize: '20px',
        fontWeight: '400',
        padding: '0px 5% 0px 5%',
    };
    const newStyle = { ...styleDefault, ...style }

    return (
        <Typography 
            variant="body1" 
            style={newStyle}
        >
            {children}
        </Typography>
    )
}


export default BodyText;