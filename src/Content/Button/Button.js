import React from "react";

const Button = (props) => {  // определение функционального компонента Button, который принимает свойства props

    return (       // возвращение JSX разметки, которая содержит кнопку.
        <div className="card-button">
            <button className="btn" onClick={props.addToCart}>Добавить в корзину</button>
        </div>
    );
};

// Событие onClick добавлено для обработчика события, который вызывает функцию addToCart,
// переданную компоненту Button через свойство props.


export default Button;