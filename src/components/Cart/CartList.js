import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Authentication/AuthContext';
import Modal from './Modal';
import classes from './CartList.module.css';

function CartList({ cart, onClose }) {
  const authCtx = useContext(AuthContext);

  const [CART, setCart] = useState([]);
 

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  useEffect(() => {
    if (authCtx.token) {
      // Make a GET request to the CRUD CRUD API to retrieve the cart items for the logged-in user
      axios
        .get(`https://crudcrud.com/api/81c0a8e26b3f40c0aaa4fcfe5227c486/cart?user=${authCtx.token}`)
        .then((response) => {
          setCart(response.data);
        })
        .catch((error) => {
          console.log('Error retrieving cart items:', error);
        });
    }
  }, [authCtx.token]);

  const handleClose = () => {
    onClose(); // Call the onClose function passed as prop to close the page
  };

  

  return (
    <Modal >
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {CART.map((cartItem, cartIndex) => {
            return (
                
              <tr key={cartIndex}>
                <td>
                  <img src={cartItem.imageUrl} alt={cartItem.title} width="100px" />
                  <span>{cartItem.title}</span>
                </td>
                <td>
                  <button
                    onClick={() => {
                      const updatedCart = CART.map((item, index) =>
                        cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                      );
                      setCart(updatedCart);
                    }}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      const updatedCart = CART.map((item, index) =>
                        cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                      );
                      setCart(updatedCart);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>Rs. {cartItem.price * cartItem.quantity}</td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
      <div className={classes.total}>
      <p>Total: Rs. {CART.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={handleClose}>Close</button>
        <button className={classes.button}  >Purchase</button>
        </div> 
        
    </Modal>
  );
}

export default CartList;