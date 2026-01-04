import React from 'react';
import './Loader.css'; // I'll create this or use a simple inline style/spinner

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading EcoWave products...</p>
        </div>
    );
};

export default Loader;
