import React from "react";
import {correct} from "../services/images";
import "../styles/ShoppingCart.scss";

const ShoppingCart = () => {
    return (
        <div className='cart-message text-center'>
            <div className='cart-message-icon'>
                <img src = {correct} alt = "" />
            </div>
            <h6 className='text-white fs-14 fw-5'>An item has been added to your shopping cart</h6>
        </div>
    )
}

export default ShoppingCart
