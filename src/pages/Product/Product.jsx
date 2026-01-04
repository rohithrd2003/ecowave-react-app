import React, { useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../../api/productsApi';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Errormessage/Error';
import trendingBottle from '../../assets/hero_sustainable.png';
import trendingSet from '../../assets/hero_collection.png';
import './Product.css';

const Product = ({ searchQuery }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const data = await fetchProducts();

                // Mock mobile products to enhance the catalog
                const mobileProducts = [
                    {
                        id: 101,
                        title: "iPhone 15 Pro Max - Eco Graphite",
                        price: 159900,
                        description: "The ultimate iPhone with titanium design and advanced camera system.",
                        category: "mobiles",
                        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=800&auto=format&fit=crop"
                    },
                    {
                        id: 102,
                        title: "Samsung Galaxy S24 Ultra - Sustainable Green",
                        price: 129999,
                        description: "Galaxy AI is here. Epic camera, epic display, and sustainable materials.",
                        category: "mobiles",
                        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop"
                    },
                    {
                        id: 103,
                        title: "Google Pixel 8 Pro - Recycled Porcelain",
                        price: 106990,
                        description: "The most pro Pixel yet, with a best-in-class camera and AI features.",
                        category: "mobiles",
                        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop"
                    },
                    {
                        id: 104,
                        title: "OnePlus 12 - Eternal Green",
                        price: 64999,
                        description: "Fast and Smooth performance with an elegant sustainable design.",
                        category: "mobiles",
                        image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=800&auto=format&fit=crop"
                    }
                ];

                setProducts([...data, ...mobileProducts]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    // Helper to group by category and ensure at least 10 items
    const groupedProducts = useMemo(() => {
        const filtered = products.filter(product => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase());
        });

        const groups = filtered.reduce((acc, product) => {
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
        }, {});

        // Ensure at least 10 items per category for rich sliders
        Object.keys(groups).forEach(category => {
            let categoryItems = groups[category];
            while (categoryItems.length > 0 && categoryItems.length < 10) {
                categoryItems = [...categoryItems, ...categoryItems].slice(0, 10);
            }
            groups[category] = categoryItems;
        });

        return groups;
    }, [products, searchQuery]);

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;

    const hasResults = Object.keys(groupedProducts).length > 0;

    return (
        <div className="products-page">
            <section className="offers-section">
                <div className="offer-banner">
                    <div className="offer-content">
                        <span className="offer-label">Limited Time Offer</span>
                        <h1>Get 40% OFF on All Bamboo Products!</h1>
                        <p>Join the wave of sustainability today.</p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>
            </section>

            <section className="trendy-section">
                <div className="section-title">
                    <h2>Trendy Products for Today</h2>
                    <div className="title-underline"></div>
                </div>
                <div className="trendy-grid">
                    <div className="trendy-item">
                        <img src={trendingBottle} alt="Eco Bottle" />
                        <div className="trendy-info">
                            <span>Bestseller</span>
                            <h4>Eco-Friendly Bottle</h4>
                            <p>₹1,599 <del>₹2,999</del></p>
                        </div>
                    </div>
                    <div className="trendy-item">
                        <img src={trendingSet} alt="Travel Set" />
                        <div className="trendy-info">
                            <span>New Trend</span>
                            <h4>Premium Travel Kit</h4>
                            <p>₹2,499 <del>₹3,999</del></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="main-products">
                <div className="products-header">
                    <h2>
                        {searchQuery ? `Search results for "${searchQuery}"` : 'Shop by Category'}
                    </h2>
                </div>

                {hasResults ? (
                    <div className="category-sliders">
                        {Object.entries(groupedProducts).map(([category, items]) => (
                            <ProductSlider key={category} title={category} products={items} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <p>No products found matching your search. Try a different keyword.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
