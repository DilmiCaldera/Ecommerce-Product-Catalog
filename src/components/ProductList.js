import React from 'react';
import "../styles/ProductList.scss";
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    return (
        <div className='product-lists grid '>
            {
                products.map(product => {
                    let discountedPrice = (product.price);
                    return (
                        <ProductItem key = {product.id} product = {{...product, discountedPrice}} />
                    )
                })
            }
        </div>
    )
}

export default ProductList