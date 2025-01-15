import React, {useContext} from "react";
import './Footer.css'
import ThemeContext from "../../contexts/ThemeContext";

const Footer = () => {
    const valueTheme = useContext(ThemeContext)

    return (
        <div className="Footer">
            <div className="Footer-Left">
                <h3 className="Footer-Left-Text">
                    Footer Left Side
                </h3>
            </div>
            <div className="Footer-Center">
                <h3 className="Footer-Center-Text">
                    Footer Center Side
                </h3>
            </div>
            <div className="Footer-Right">
                <h3 className="Footer-Right-Text">
                    Footer Right Side
                </h3>
            </div>
            <button onClick={() => valueTheme.setActiveThem('theme_2')} className="btn-theme-1" >purple</button>
            <button onClick={() => valueTheme.setActiveThem('theme_1')} className="btn-theme-2" >green</button>
        </div>
    )
}

export default Footer