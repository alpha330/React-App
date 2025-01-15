import React,{useReducer} from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartContext from "../../contexts/CartContext";
import cartReducers from "../../reducers/Carts";

const Layout = ({children}) => {
    let cartsItem = JSON.parse(localStorage.getItem('carts'))
    const [state,dispatch] = useReducer(cartReducers,{carts:cartsItem,})
    return (
        <CartContext.Provider
            value={{
                carts:state.carts,
                dispatchCart:dispatch
            }}
        >
            <div>
                <Header />
                    {children}
                <Footer />
            </div>
        </CartContext.Provider>        
    )
}
    


export default Layout