import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},

});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
    startLogoutTimer();
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const startLogoutTimer = () => {
    const expirationTime = 1000 * 60 * 1000; // 5 minutes in milliseconds

    const logoutTimer = setTimeout(() => {
      logoutHandler();
      alert('Your session has expired. Please log in again.');
    }, expirationTime);

    // Clear the timer when the user manually logs out or closes the browser
    return () => clearTimeout(logoutTimer);
  };

  useEffect(() => {
    // Check if there is a token and if it is still valid
    if (initialToken && userIsLoggedIn) {
      const expirationTime = localStorage.getItem('expirationTime');
      const currentTime = new Date().getTime();

      if (currentTime >= expirationTime) {
        logoutHandler();
        alert('Your session has expired. Please log in again.');
      } else {
        const remainingTime = expirationTime - currentTime;
        startLogoutTimer(remainingTime);
      }
    }
  }, [initialToken, userIsLoggedIn]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;