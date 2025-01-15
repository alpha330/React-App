import React, {useContext} from "react";
import './Header.css'
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import CartContext from "../../contexts/CartContext";

const Header = () => {
    let {pathname} = useLocation();
    let title = '';
    const {carts} =useContext(CartContext)

    if(pathname === '/')title = "Shop";
    if(pathname === '/Blog')title = "Blog";
    if(pathname === '/Contact')title = "Contact";
    if(pathname === '/AboutMe')title = "About Us";
    if(pathname.includes('Product'))title = "Shop";

    switch (pathname) {
        case '/':
            title = "Shop"
            break;
        case '/Blog':
            title = "Blog"
            break;
        case '/Contact':
            title = "Contact"
            break;
        case '/AboutMe':
            title = "About Us"
            break;
        default:
            break;
    }
    return (
        <div className="Header" >
            <NavBar />
            <div className="cart">
                <MdShoppingCartCheckout />
                <h3 className="items">{carts.length}</h3>
            </div>
            <h3 className="Header-Title">
                {title}
            </h3>
        </div>
    )
}

export default Header