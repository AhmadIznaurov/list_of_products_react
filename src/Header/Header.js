import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <p>Lincode</p>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Одежда</a></li>
                    <li><a href="#">Детям</a></li>
                    <li><a href="#">Книги</a></li>
                    <li><a href="#">Компьютеры</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className="checkout">
                <img src="/static/media/shopping_cart_PNG38.png" alt="image" />
                <span className="counter">0</span>
            </div>
            <a href="#" className="logout">Выход</a>
        </div>
    );
}

export default Header;