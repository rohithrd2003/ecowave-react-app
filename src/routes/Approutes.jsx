import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Productdetails from '../pages/Productdetails/Productdetails';
import About from '../pages/About/About';

const Approutes = ({ searchQuery }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product searchQuery={searchQuery} />} />
            <Route path="/product/:id" element={<Productdetails />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default Approutes;
