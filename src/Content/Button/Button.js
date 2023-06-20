import React from "react";

const Button = (props) => {

    return (
        <div className="card-button">
            <button className="btn" onClick={props.addToCart}>Добавить в корзину</button>
        </div>
    );
};

export default Button;