import { useContext, useEffect, useState } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import AuthContext from './components/Authentication/AuthContext';
import Header from './components/Navbar/Header';
import Product from './components/Store/Product';
import CartList from './components/Cart/CartList';
import About from './components/About/About';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUS/contact us';
import ProductPage from './components/Store/ProductPage';
import { ProductList, useCart, handleFormSubmit } from './components/Store/ProductList';
import AuthForm from './components/Authentication/AuthForm';
import UserProfile from './components/Navbar/UserProfile';




function AppContent() {
  const authCtx = useContext(AuthContext);
  const { cart,  addToCart,  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authCtx.login(token);
    }
  }, [authCtx]);


  const loginHandler = (token) => {
    authCtx.login(token);
    localStorage.setItem('token', token);
    navigate('/'); // Redirect to products page
  };

  const logoutHandler = () => {
    authCtx.logout();
    localStorage.removeItem('token');
    navigate('/auth'); // Redirect to authentication page
  };

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
    navigate('/'); 
  };

  return (
    <>
      <Header count={cart.length} handleShow={handleShowCart} />
      <Routes>
      {authCtx.isLoggedIn &&<Route path="/" element={<Product product={ProductList} addToCart={addToCart}  />} />}
      {!authCtx.isLoggedIn &&<Route path="/" element={<AuthForm />} />}
        <Route path="/about" element={<About />} />
        <Route path="/contact us" element={<ContactUs handleFormSubmit={handleFormSubmit} />} />
        <Route path="/product/:productId" element={<ProductPage products={ProductList} />} />
        
        <Route path="/home" element={<Home />} />
        {authCtx.isLoggedIn && (
        <Route path="/profile" element={<UserProfile />} />)}
         <Route path="/cart" element={
            showCart && (
              <div className="modal">
                <div className="modal-content">
                  <button onClick={handleCloseCart} className="close-button">
                    Close
                  </button>
                  <CartList cart={cart} onClose={handleCloseCart} />
         </div>
        </div>
         )} 
         />
        {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthForm onLogin={loginHandler} />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/auth" element={<Product product={ProductList} addToCart={addToCart} onLogout={logoutHandler} />} />
        )}
      </Routes>
      
      
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;