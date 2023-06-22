import React from 'react';

import macbook from "../../images/mack-book-card-1.jpg";
import Galaxy from "../../images/Galaxy-card-2.jpg";
import Skuter from "../../images/skuter-card-3.jpg";
import SamsungTV from "../../images/samsung-Tv-card-4.jpg";
import Mask from "../../images/mask-card-5.jpg";
import WashMashine from "../../images/wasch-maschine-card-6.jpg";
import Holodilnik from "../../images/holodilnik-card-7.jpg";
import SubCard from "../../images/sub-card-8.jpg";
import Naushniki from "../../images/nauschniki-card-9.jpg";
import Video from "../../images/video-carta.png";
import Button from "../Button/Button";



const Card = ({ addToCart }) => {  // определение функционального компонента Card, который принимает в качестве свойства функцию addToCart

    const products = [
        // определение массива объектов products, который содержит информацию о всех товарах в магазине

        { id: 1, name: 'MacBook', price: 1000, bought: false, rating: 5, image: macbook },
        { id: 2, name: 'Galaxy', price: 999, bought: false, rating: 4, image: Galaxy },
        { id: 3, name: 'Скутер', price: 600, bought: false, rating: 5, image: Skuter },
        { id: 4, name: 'Монитор Samsung', price: 12000, bought: false, rating: 3, image: SamsungTV },
        { id: 5, name: 'Респераторная маска', price: 500, bought: false, rating: 5, image: Mask },
        { id: 6, name: 'Стиральная машина', price: 100000, bought: false, rating: 3, image: WashMashine },
        { id: 7, name: 'Белый холодильник', price: 43100, bought: false, rating: 5, image: Holodilnik },
        { id: 8, name: 'Колонка', price: 3000, bought: false, rating: 4, image: SubCard },
        { id: 9, name: 'Наушники', price: 1500, bought: false, rating: 5, image: Naushniki },
        { id: 10, name: 'Видеокарта RTX 3060', price: 41000, bought: false, rating: 8, image: Video } ];



    return (    // возвращение JSX разметки, которая содержит список компонентов "card",
        <div className="content"> {products.map((product) => (  // созданных при помощи метода .map(). Каждый элемент массива products превращается в компонент.
            <div className="card" key={product.id}> <div className="card-image">
                <img src={product.image} alt={product.name} /> </div>
                <div className="card-info"> <div className="card-name">{product.name}</div>
                    <div className="card-price">${product.price.toFixed(2)}</div>

                    <Button addToCart={addToCart}/>
                </div>
            </div>
        ))}
        </div>
    );
};

// Атрибуты компонента заполняются данными из каждого объекта массива products.
// При клике на кнопку, который рендерит компонент Button, функция addToCart вызывается с передачей аргумента-объекта product. };


export default Card;