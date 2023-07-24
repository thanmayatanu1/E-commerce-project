import React from 'react';

const CartContext = React.createContext({
    auth:{
        tokenn:"",
        isLoggedin:false,
        login:()=>{},
        logout:()=>{}
    },
});

export default CartContext;