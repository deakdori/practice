import React from 'react';
import "./Button.css";

const Button = ({onClick}) => {
    return (
        <button onClick={onClick}>Clear All</button>
    )
}

export default Button;