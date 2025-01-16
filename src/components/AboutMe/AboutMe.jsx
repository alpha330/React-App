import React from "react";
import './AboutMe.css';
import SlideShow from "../SimpleSlider/SimpleSlider";

const AboutMe = () =>{
    return(
        <div>
             <div>
            <SlideShow></SlideShow>
        </div>
        <div className="about-me">
            <h3 className="about-me-title-text">About Me</h3>     
            <div className="about-me-content">
                Content
                
            </div>
        </div>
        </div> 
    )
} 

export default AboutMe