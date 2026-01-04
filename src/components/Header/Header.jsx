import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const suggestions = ['Mobiles', 'Shoes', 'Electronics', 'Bamboo Products', 'Organic Cotton'];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
        setIsMenuOpen(false);
        navigate('/product');
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Conditional logic for header content
    const isProductPage = location.pathname === '/product';
    const showSearch = isProductPage;

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                    <Link to="/home" className="logo" onClick={closeMenu}>
                        <img src={logo} alt="EcoWave Logo" className="logo-img" />
                        <span className="logo-text">EcoWave</span>
                    </Link>
                </div>

                <div className="header-center desktop-only">
                    <nav className="nav">
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            Home
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            Products
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            About
                        </NavLink>
                    </nav>
                </div>

                <div className="header-right">
                    {showSearch && (
                        <div className="header-search-container">
                            <div className="header-search">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="search-input"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                />
                                <button className="search-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </button>
                            </div>
                            {showSuggestions && (
                                <div className="search-suggestions">
                                    {suggestions.map(s => (
                                        <div key={s} className="suggestion-item" onClick={() => handleSuggestionClick(s)}>
                                            {s}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Dedicated Mobile Drawer */}
            <div className={`mobile-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <div className="drawer-backdrop" onClick={closeMenu}></div>
                <div className="mobile-drawer">
                    <nav className="mobile-nav">
                        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            Home
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            Products
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                            About
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
