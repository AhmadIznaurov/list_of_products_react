import React from "react";
import basket from "../../shopping-cart-solid.svg";
import './Checkout.css';

const Checkout = ({ cartItems }) => {

    const cartCount = cartItems.length;

    return (
        <div className="checkout">
            <img src={basket} alt="image" />
            <span className="counter">{cartCount}</span>
            <a href="/#" className="logout">Выход</a>
        </div>
    );
};

export default Checkout;
