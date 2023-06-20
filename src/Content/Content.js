import React from 'react';
import './ProductList.css';


const ProductList = ({  products }) => {

    return (
        <div className="product-list">
            {products.map((product) => (
                <div className="c
                ard" key={product.id}>
                    <div className="card-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="card-info">
                        <div className="card-name">{product.name}</div>
                        <div className="card-price">${product.price.toFixed(2)}</div>
                        <div className="card-button">
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;