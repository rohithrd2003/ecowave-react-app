import React from 'react';
import { Link } from 'react-router-dom';
import './Productcard.css';

const Productcard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">₹{product.price}</p>
                <Link to={`/product/${product.id}`} className="view-details-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Productcard;
