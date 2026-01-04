import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.css';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 8000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="carousel">

            {slides.map((slide, index) => (
                <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                >
                    {index === current && (
                        <>
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                                <Link to={slide.path}>
                                    <button className="slide-cta">{slide.ctaText}</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={index === current ? 'dot active' : 'dot'}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
