import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import heroSustainable from '../../assets/hero_sustainable.png';
import heroCollection from '../../assets/hero_collection.png';
import heroComingSoon from '../../assets/hero_coming_soon.png';
import ecoBottle from '../../assets/eco_bottle.png';
import bambooSet from '../../assets/bamboo_set.png';
import leafIcon from '../../assets/leaf.svg';
import handshakeIcon from '../../assets/handshake.svg';
import sparklesIcon from '../../assets/sparkles.svg';
import './Home.css';

const Home = () => {
    const slides = [
        {
            image: heroSustainable,
            title: "Sustainable Living",
            subtitle: "Ethically sourced products for a better tomorrow.",
            ctaText: "Shop Collection",
            path: "/product"
        },
        {
            image: heroCollection,
            title: "New Collection",
            subtitle: "Discover our latest eco-friendly arrivals.",
            ctaText: "View Products",
            path: "/product"
        },
        {
            image: heroComingSoon,
            title: "Eco-Future",
            subtitle: "Innovating for a greener planet. Coming soon.",
            ctaText: "Learn More",
            path: "/product"
        }
    ];

    return (
        <div className="home-page">
            <Carousel slides={slides} />

            <section className="trending-section">
                <div className="section-header">
                    <h2>Trending Now</h2>
                    <p>Our most loved sustainable essentials</p>
                </div>
                <div className="trending-grid">
                    <div className="trending-card">
                        <img src={ecoBottle} alt="Eco Bottle" className="card-image" />
                        <h4>Stainless Steel Bottle</h4>
                        <span>₹1,999</span>
                    </div>
                    <div className="trending-card">
                        <img src={bambooSet} alt="Bamboo Kit" className="card-image" />
                        <h4>Travel Bamboo Set</h4>
                        <span>₹1,249</span>
                    </div>
                    <div className="trending-card">
                        <img src={heroCollection} alt="Canvas Bag" className="card-image" />
                        <h4>Organic Canvas Tote</h4>
                        <span>₹899</span>
                    </div>
                </div>
            </section>

            <section className="impact-section">
                <div className="impact-content">
                    <h2>Our Sustainable Impact</h2>
                    <div className="stats-row">
                        <div className="stat-item">
                            <h3>50k+</h3>
                            <p>Plastic Bottles Saved</p>
                        </div>
                        <div className="stat-item">
                            <h3>10k+</h3>
                            <p>Trees Planted</p>
                        </div>
                        <div className="stat-item">
                            <h3>100%</h3>
                            <p>Ethical Sourcing</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="coming-soon">
                <div className="coming-header">
                    <h2>New Coming Soon</h2>
                    <p>Get ready for our next wave of eco-innovation</p>
                </div>
                <div className="coming-grid">
                    <div className="coming-item">
                        <div className="coming-overlay">
                            <h3>Solar Series</h3>
                            <p>Launching Q2 2026</p>
                        </div>
                    </div>
                    <div className="coming-item">
                        <div className="coming-overlay">
                            <h3>Ocean Plastic Wear</h3>
                            <p>Summer 2026</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <div className="feature-icon-wrapper">
                        <img src={leafIcon} alt="Eco-Friendly" className="feature-icon-img" />
                    </div>
                    <h3>Eco-Friendly</h3>
                    <p>Reduction in carbon footprint through sustainable practices.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon-wrapper">
                        <img src={handshakeIcon} alt="Ethical Sourcing" className="feature-icon-img" />
                    </div>
                    <h3>Ethical Sourcing</h3>
                    <p>Fair trade and supporting local artisans globally.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon-wrapper">
                        <img src={sparklesIcon} alt="High Quality" className="feature-icon-img" />
                    </div>
                    <h3>High Quality</h3>
                    <p>Durable products designed to last and minimize waste.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
