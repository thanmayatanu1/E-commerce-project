import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import CartList from './components/CartList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';

async function fetchData() {
  const response = await fetch('https://api.pujakaitem.com/api/products');
  const data = await response.json();
  return data;
}

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (shouldShowCart) => {
    setShowCart(shouldShowCart);
  };

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      setIsLoading(true);
      try {
        const data = await fetchData();
        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromBackend();
  }, []);

  //   {
  //     id: 1,
  //     title: 'Colors',
  //     price: 100,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Black and white Colors',
  //     price: 50,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  //   },
  //   {
  //     id: 3,
  //     title: 'Yellow and Black Colors',
  //     price: 70,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  //   },
  //   {
  //     id: 4,
  //     title: 'Blue Color',
  //     price: 100,
  //     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  //   },
  // ]);

  // const [cart, setCart] = useState([]);
  // const [showCart, setShowCart] = useState(false);

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: 1 }]);
  // };

  // const handleShow = (shouldShowCart) => {
  //   setShowCart(shouldShowCart);
  // };

  return (
    <Router>
      <Header count={cart.length} handleShow={handleShow} />

      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Product product={product} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={showCart && <CartList key="cart" cart={cart} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;