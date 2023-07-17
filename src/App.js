import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import CartList from './components/CartList';

function App() {
  const [product] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  

  const addToCart = (data) => {
    setCart([...cart, {...data, quantity: 1}]);
  };

  const handleShow = (value) => {
    setShowCart(value)

  }

  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}
      
      >

      </Header>

      {
        showCart ? 
        <CartList cart={cart}></CartList> :
        <Product product={product} addToCart={addToCart}></Product>
      }

      <Product product={product} addToCart={addToCart}></Product>
    </div>
  );
}

export default App;