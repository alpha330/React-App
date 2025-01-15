import React from "react";
import './Button.css'

const Button = ({children,handleClick = () =>{}, ...props}) => (<button onClick={handleClick} className="button" {...props}>{children}</button>)

export default Button