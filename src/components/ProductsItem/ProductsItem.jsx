import React, {useContext, useEffect, useRef} from "react";
import './ProductItems.css'
import Images from "../Images/Images"
import Button from "../Button/Button"
import ThemeContext from '../../contexts/ThemeContext';
import { MdAdd, MdRemoveShoppingCart } from "react-icons/md";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

const ProductsItem = ({items}) => {
    const valueTheme = useContext(ThemeContext)
    const {carts,dispatchCart} = useContext(CartContext)
    const itemProductRef = useRef(null)
    const added = carts.includes(items.id)
    useEffect(
      ()=>{
        itemProductRef.current.style.opacity = '1'
      },
      []
    )

    const handleAdd = () => {
      if(added){
        dispatchCart(
          {
            type: 'REMOVE_FROM_CART'
          }
        )
      }else{
        dispatchCart(
          {
            type: 'ADD_TO_CART',
            id:items.id
          }
        )
      }
    }
    return (
        <div className='Item' key={`post-${itemProductRef.id}`} ref={itemProductRef}>
          <div className='Item-Name'>
          <Link to={`/Product/${items.id}`}>
            <h3 className='Item-Name-Text'>{items.name}</h3>
          </Link>
          <h3 className='Item-Name-id'>{items.id}</h3>
          </div>
          <Images srcImage={items.imageUrl} nameImage = {items.name}/>
          <div className='Item-Price'>
          <h3 className='Item-Price-Text'>{items.price}</h3>
          <Button 
          handleClick={handleAdd}
          style={{
            color:valueTheme.theme.color,
            backgroundColor:valueTheme.theme.backgroundColor,
            display:'flex',
            alligneItems:'center',
            justifyContent: 'center',
            }}>
              {added ? 
              (
              <>
              <MdRemoveShoppingCart />
              remove from cart
              </>
              ) : 
              (<>
              <MdAdd />
              add to cart
              </>)
              }
              
          </Button>
          </div>
        </div>
    )
}

Button.prototype = {
  items: PropTypes.string,
}
export default ProductsItem;