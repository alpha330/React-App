import React from "react";
import './Button.scss'

// eslint-disable-next-line react/prop-types
const Button = ({children,handleClick = () =>{}, ...props}) => {
    return (<button onClick={handleClick} className="button" {...props}>{children}</button>);
}

export default Button