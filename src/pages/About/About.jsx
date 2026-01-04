import React from 'react';
import treeIcon from '../../assets/tree.svg';
import recycleIcon from '../../assets/recycle.svg';
import handshakeIcon from '../../assets/handshake.svg';
import globeIcon from '../../assets/globe.svg';
import shieldIcon from '../../assets/shield.svg';
import circularIcon from '../../assets/circular.svg';
import usersIcon from '../../assets/users.svg';
import './About.css';

const About = () => {
    const stats = [
        {
            label: 'Trees Planted',
            value: '125,000+',
            icon: treeIcon,
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000"
        },
        {
            label: 'Plastic Saved',
            value: '50 Tons',
            icon: recycleIcon,
            image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000"
        },
        {
            label: 'Artisans Supported',
            value: '1,200',
            icon: handshakeIcon,
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=1000"
        },
        {
            label: 'Eco Projects',
            value: '15+',
            icon: globeIcon,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    const values = [
        {
            title: 'Radical Transparency',
            desc: 'We trace every fiber and every hand that touches our products, ensuring absolute ethical accountability.',
            icon: shieldIcon
        },
        {
            title: 'Circular Design',
            desc: 'Our products are designed to return to the earth or be recycled infinitely, eliminating the concept of waste.',
            icon: circularIcon
        },
        {
            title: 'Community First',
            desc: 'We invest 10% of our profits back into the artisan communities that craft our sustainable collections.',
            icon: usersIcon
        }
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Est. 2024</span>
                    <h1>Crafting a Greener Tomorrow, <span>Today.</span></h1>
                    <p>EcoWave is more than a store. It's a movement towards a more conscious, beautiful, and sustainable way of life.</p>
                    <button className="cta-button">Join the Wave</button>
                </div>
            </section>

            <section className="impact-container">
                <div className="impact-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <img src={stat.image} alt={stat.label} className="stat-hover-image" />
                            <div className="stat-icon-wrapper">
                                <img src={stat.icon} alt={stat.label} className="stat-icon-img" />
                            </div>
                            <h2 className="stat-value">{stat.value}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="story-section">
                <div className="story-image">
                    <div className="image-container">
                        <div className="eco-glow"></div>
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200"
                            alt="Our Journey"
                            className="journey-img"
                        />
                    </div>
                </div>
                <div className="story-text">
                    <span className="section-subtitle">Our Journey</span>
                    <h2>A Vision Born from Nature</h2>
                    <p>
                        EcoWave started on a small organic farm with a simple realization: the most beautiful products should also be the ones that protect our planet. We set out to redefine "luxury" as something that is kind to the earth and the hands that create it.
                    </p>
                    <p>
                        Today, we curate a global collection of ethical products that blend sophisticated modern aesthetics with ancient ecological wisdom.
                    </p>
                    <div className="founder-signature">
                        <p>With love for the Earth,</p>
                        <strong>The EcoWave Founding Team</strong>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="section-title-centered">
                    <span>Our Philosophy</span>
                    <h2>The Pillars of EcoWave</h2>
                </div>
                <div className="values-grid">
                    {values.map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="value-icon-wrapper">
                                <img src={v.icon} alt={v.title} className="value-icon-img" />
                            </div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
