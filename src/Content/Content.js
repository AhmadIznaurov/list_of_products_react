import React, { useState } from 'react';
import './Content.css';
import Card from "./Card/Card";
import Checkout from '../Header/Checkout/Checkout';

const Content = ({ cartItems, addToCart }) => {
    // определение функционального компонента Content, который принимает
    // два значения cartItems и addToCart через деструктуризацию props


    return (

        // JSX-разметка, которая содержит два дочерних компонента:
        // Card и Checkout, которым передаются данные через props

        <div className="content">
            <Card addToCart={addToCart} />
            <Checkout cartItems={cartItems} />
        </div>
    );
};

export default Content;

