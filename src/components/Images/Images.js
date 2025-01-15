import React from "react";
import './Images.css'

const Images = ({srcImage,nameImage}) => (
    <div className='Item-image'>
    <img className='Item-image-pic' alt={nameImage} src={srcImage}/>
    </div>
)
    

export default Images