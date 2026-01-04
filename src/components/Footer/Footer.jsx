import React from 'react';
import { Link } from 'react-router-dom';
import mailIcon from '../../assets/mail.svg';
import phoneIcon from '../../assets/phone.svg';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section brand-column">
                    <h4>EcoWave</h4>
                    <p>Sustainable Living Starts Here. We curate products that harmony with nature and elevate your lifestyle.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <img src={mailIcon} alt="Email" className="footer-icon" />
                        <span>hello@ecowave.com</span>
                    </div>
                    <div className="contact-item">
                        <img src={phoneIcon} alt="Phone" className="footer-icon" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon-wrapper">
                            <img src={facebookIcon} alt="Facebook" className="social-icon" />
                        </a>
                        <a href="#" className="social-icon-wrapper">
                            <img src={instagramIcon} alt="Instagram" className="social-icon" />
                        </a>
                        <a href="#" className="social-icon-wrapper">
                            <img src={twitterIcon} alt="Twitter" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} EcoWave. Crafted for a greener planet.</p>
                    <div className="footer-policies">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
