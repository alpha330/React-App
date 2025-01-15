import React from "react";
import './Products.css'
import ProductsItem from "../ProductsItem/ProductsItem";

const Products = ({data}) => {
    
    return(
        <div className='Products-Section'>
        {data.map((item) => (
            <ProductsItem items={item} />
        ))}
    </div>
    );
}

export default Products