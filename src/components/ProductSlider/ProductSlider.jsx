import React, { useRef } from 'react';
import Productcard from '../Productcard/Productcard';
import './ProductSlider.css';

const ProductSlider = ({ title, products }) => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 350; // Width of a card + gap
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="category-slider-container">
            <div className="slider-header">
                <h2>{title}</h2>
            </div>

            <div className="slider-relative-wrapper">
                <button
                    className="slider-arrow left"
                    onClick={() => scroll('left')}
                    aria-label="Scroll Left"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div className="product-slider-track" ref={sliderRef}>
                    {products.map((product, index) => (
                        <div className="slider-item" key={`${product.id}-${index}`}>
                            <Productcard product={product} />
                        </div>
                    ))}
                </div>

                <button
                    className="slider-arrow right"
                    onClick={() => scroll('right')}
                    aria-label="Scroll Right"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
