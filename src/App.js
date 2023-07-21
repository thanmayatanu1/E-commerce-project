import React, { useState, useEffect, useCallback} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import CartList from './components/Store/CartList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home/Home';
import FetchMovies from './Movies/FetchMovies';


function App() {
  const [product] = useState([
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ]);


  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (shouldShowCart) => {
    setShowCart(shouldShowCart);
  };

  return (
    <Router>
      <Header count={cart.length} handleShow={handleShow} />
      <Routes>
          <Route path="/" element={<Product product={product} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/fetchmovies" element={<FetchMovies />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={showCart && <CartList key="cart" cart={cart} />} />
        </Routes>
      </Router>
  );
}

export default App;