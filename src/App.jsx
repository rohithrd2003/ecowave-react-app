import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Approutes from './routes/Approutes';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isProductDetails = location.pathname.startsWith('/product/');

  return (
    <div className="app">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="main-content">
        <Approutes searchQuery={searchQuery} />
      </main>
      {!isProductDetails && <Footer />}
    </div>
  );
}

export default App;
