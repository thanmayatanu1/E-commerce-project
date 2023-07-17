import { useEffect , useState } from 'react';

function CartList ({cart}) {

    const [CART, setCart ] = useState([])

    useEffect(() => {
        setCart(cart)

    }, [cart])


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