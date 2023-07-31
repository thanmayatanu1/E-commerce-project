import { useEffect , useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Authentication/AuthContext';

function CartList ({cart}) {
    const authCtx = useContext(AuthContext);

    const [CART, setCart ] = useState([])

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


    return (
        <div>
            {
                CART.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.imageUrl} alt={cartItem.title} width="100px"></img>
                            <span>{cartItem.title}</span>
                            <button
                            onClick = {() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? {...item , quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item
                                })
                                setCart(_CART)
                            }}
                            
                            >-</button>
                            <span>{cartItem.quantity}</span>
                            <button
                            onClick = {() => {
                                const _CART = CART.map((item, index) => {
                                    return cartindex === index ? {...item , quantity : item.quantity + 1} : item
                                })
                                setCart(_CART)
                            }}
                            
                            >+</button>
                            <p style={{width: '5%'}}> Rs. {cartItem.price * cartItem.quantity}</p>
                        </div>
                    )
                })
            }



            <p> Total: <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default CartList;