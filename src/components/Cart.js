import React, { useState } from 'react';

const Cart = () => {
  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveItem = (index) => {
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    setCartElements(updatedCartElements);
  };

  return (
    <div>
      <button onClick={handleCartIconClick}>Cart</button>
      {isCartOpen && (
        <div>
          <h2>Cart</h2>
          {cartElements.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <img src={item.imageUrl} alt={item.title} />
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;