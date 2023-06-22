import React from "react";
import basket from "../../shopping-cart-solid.svg";
import './Checkout.css';

const Checkout = ({ cartItems }) => {   // определение функционального компонента Checkout, который принимает свойство cartItems

    const cartCount = cartItems.length;   // определение переменной cartCount, равной длине массива cartItems

    return (       // возвращение JSX разметки, которая содержит компонент корзины.
        <div className="checkout">
            <img src={basket} alt="image" />
            <span className="counter">{cartCount}</span>
            <a href="/#" className="logout">Выход</a>

        </div>
    );
};


// Компонент корзины содержит изображение и счетчик, количество товаров в корзине.
// Значение счетчика берется из переменной cartCount.
// Компонент также содержит ссылку на страницу выхода из аккаунта.
export default Checkout;

