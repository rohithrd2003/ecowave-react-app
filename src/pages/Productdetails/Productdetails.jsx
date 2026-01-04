import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById } from '../../api/productsApi';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Errormessage/Error';
import './Productdetails.css';

const Productdetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;
    if (!product) return <Error message="Product not found" />;

    return (
        <div className="product-details-container">
            <button onClick={() => navigate(-1)} className="back-btn">
                &larr; Back to Products
            </button>

            <div className="product-details-content">
                <div className="details-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="details-info">
                    <span className="details-category">{product.category}</span>
                    <h1 className="details-title">{product.title}</h1>
                    <p className="details-price">₹{product.price}</p>

                    <div className="details-description">
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="details-meta">
                        <div className="rating">
                            <span>Rating: {product.rating?.rate} / 5 </span>
                            <span className="count">({product.rating?.count} reviews)</span>
                        </div>
                    </div>

                    <button className="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
