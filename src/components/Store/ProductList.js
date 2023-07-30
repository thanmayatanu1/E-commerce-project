import  { useState } from 'react';
import axios from 'axios';

export const ProductList = [
    {
      id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      reviews: ['Great product!', 'Highly recommended'],
      
    },
    {
      id: 2,
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      reviews: ['Great product!', 'Highly recommended'],
      
    },
    {
      id: 3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      reviews: ['Great product!', 'Highly recommended'],
     
    },
    {
      id: 4,
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      reviews: ['Great product!', 'Highly recommended'],
     
    },
    {
      id: 5,
      title: 'T-Shirt',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
      reviews: ['Great product!', 'Highly recommended'],
      
    },
    {
      id: 6,
      title: 'Coffee Cup',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
      reviews: ['Great product!', 'Highly recommended'],
      
    },
  ];
  export const useCart = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
  
    const addToCart = (data) => {
      setCart([...cart, { ...data, quantity: 1 }]);
    };
  
    const handleShow = (shouldShowCart) => {
      setShowCart(shouldShowCart);
    };
  
    return { cart, showCart, addToCart, handleShow };
  };
  
  export const handleFormSubmit = async (formData) => {
    try {
      await axios.post('https://react-http-2372d-default-rtdb.firebaseio.com/contacts.json', formData);
    } catch (error) {
      console.log('Something went wrong....Retrying');
    }
  };