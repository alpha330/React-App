import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PRODUCTS from '../App/PRODUCTS.json';
import './SingleProduct.scss'

const SingleProduct = () => {
    const {id} = useParams()
    const productItem = PRODUCTS.find( item => item.id === id)


    return(
        <div className="single-product">
            {productItem.title}
        </div>
    )
}

export default SingleProduct