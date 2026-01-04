import React from 'react';
import './Error.css';

const Error = ({ message }) => {
    return (
        <div className="error-container">
            <h3>Something went wrong</h3>
            <p>{message || "We couldn't load the products. Please try again later."}</p>
        </div>
    );
};

export default Error;
