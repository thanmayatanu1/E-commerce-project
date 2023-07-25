import React, { useState} from 'react';
import './App.css';
import Header from './components/Navbar/Header';
import Product from './components/Store/Product';
import CartList from './components/Store/CartList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Home from './components/Home/Home';
import FetchMovies from './components/Movies/FetchMovies';
import ContactUs from './components/ContactUS/contact us';
import ProductPage from './components/Store/ProductPage';
import { ProductList, useCart, handleFormSubmit} from './components/Store/ProductList';
import AuthForm from './components/Authentication/AuthForm';



function App() {
  const { cart, showCart, addToCart, handleShow } = useCart();
  

  return (
    <Router>
      <Header count={cart.length} handleShow={handleShow} />
      <Routes>
          <Route path="/" element={<Product product={ProductList} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact us" element={<ContactUs handleFormSubmit={handleFormSubmit} />} />
          <Route path="/fetchmovies" element={<FetchMovies handleFormSubmit={handleFormSubmit}/>} />
          <Route path="/product/:productId" element={<ProductPage product={ProductList} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={showCart && <CartList key="cart" cart={cart} />} />
          <Route path="/auth" element={<AuthForm />} />
        </Routes>
      </Router>
  );
}

export default App;