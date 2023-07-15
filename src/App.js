import React from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div>
       <Cart />
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>

      {/* Render the appropriate component based on the current URL */}
      {window.location.pathname === '/about' ? <About /> : <Home />}
      <Product />
     
    </div>
  );
};


export default App;
