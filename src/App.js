import React, { useState} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import CartList from './components/Store/CartList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home/Home';
import FetchMovies from './Movies/FetchMovies';
import ContactUs from './components/ContactUS/contact us';
import ProductPage from './components/ProductPage';
import axios from 'axios';


function App() {
  const [product] = useState([
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      reviews: ['Review 1', 'Review 2', 'Review 3'],
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      reviews: ['Review 1', 'Review 2', 'Review 3'],
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      reviews: ['Review 1', 'Review 2', 'Review 3'],
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      reviews: ['Review 1', 'Review 2', 'Review 3'],
    },
  ]);


  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [error, setError] = useState('');

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (shouldShowCart) => {
    setShowCart(shouldShowCart);
  };

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post('https://react-http-2372d-default-rtdb.firebaseio.com/contacts.json' , formData);
    } catch (error) {
      setError('Something went wrong....Retrying');


    }

    };
  

  return (
    <Router>
      <Header count={cart.length} handleShow={handleShow} />
      <Routes>
          <Route path="/" element={<Product product={product} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact us" element={<ContactUs handleFormSubmit={handleFormSubmit} />} />
          <Route path="/fetchmovies" element={<FetchMovies />} />
          <Route path="/product/:productId" element={<ProductPage product={product} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={showCart && <CartList key="cart" cart={cart} />} />
        </Routes>
      </Router>
  );
}

export default App;