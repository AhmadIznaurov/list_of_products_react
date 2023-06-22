import React, {useState} from 'react';
import './Content.css';
import Card from "./Card/Card";
import Checkout from '../Header/Checkout/Checkout';

const Content = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="content">
            <Card addToCart={addToCart} />
            <Checkout cartItems={cartItems} />
        </div>
    );
};

export default Content;



// Strange factor using some code to make something for ...