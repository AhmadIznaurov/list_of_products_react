import React, { useState } from 'react';
import Content from './Content/Content';
import Header from './Header/Header';

const App = () => {   // определение функционального компонента App

    // определение состояния cartItems при помощи хука useState, начальное значение - пустой массив
    // функционльный метод setCartItems используется для изменения состояния cartItems
    const [cartItems, setCartItems] = useState([]);

    // Определение функции addToCart,
    // которая добавляет новый продукт в массив cartItems

    const addToCart = (product) => { setCartItems([...cartItems, product]); };

    // JSX-разметка, которая содержит два дочерних компонента:
    // Header и Content, которым передаются данные через props

    return (
        <div>
            <Header cartItems={cartItems} />
            <Content cartItems={cartItems} addToCart={addToCart} />
        </div>
    );

};

export default App;




