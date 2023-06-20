import React, { useState } from 'react';
import Content from './Content/Content';
import Header from './Header/Header';

const App = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => { setCartItems([...cartItems, product]); };

    return (
        <div>
            <Header cartItems={cartItems} />
            <Content addToCart={addToCart} />
        </div>
    );

};



export default App;