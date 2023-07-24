import React, {useState} from 'react';
 import CartContext from './cart-context';

 const CartProvider = (props) => {
    const [isLog, setIsLog] = useState(false);
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);

    //Login

    const logInHandler = (token) => {
        setToken(token);
        setIsLog(true);
        localStorage.setItem("token", token);
    };

    const logOutHandler = () => {
        setToken(null);
        setIsLog(false);
        localStorage.removeItem("token");
    };

    const cartContextValue = {
        auth: {
            tokenn: token,
            isLoggedin: isLog,
            login: logInHandler,
            logout: logOutHandler
        }
    };


    //user activity timeout logic
    const USER_ACTIVITY_TIMEOUT = 10 * 60 * 1000;
    let userActivityTimeout;

    const resetUserActivityTimeout = () => {
        clearTimeout(userActivityTimeout);
        userActivityTimeout = setTimeout(logOutHandler, USER_ACTIVITY_TIMEOUT);
};

const handleUserActivity = () => {
    resetUserActivityTimeout();
  };

  const handleUnmount = () => {
    clearTimeout(userActivityTimeout);
    window.removeEventListener("mousemove", handleUserActivity);
    window.removeEventListener("keydown", handleUserActivity);
  };

  const handleMount = () => {
    resetUserActivityTimeout();
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
  };

  useState(() => {
    handleMount();
    return handleUnmount;
  }, []);

  return (
    <CartContext.Provider value={cartContextValue} >
       {props.children}
    </CartContext.Provider>
  );
};