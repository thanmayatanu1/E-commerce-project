import { useContext, useEffect } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContext from './components/Authentication/AuthContext';
import Header from './components/Navbar/Header';
import Product from './components/Store/Product';
import CartList from './components/Store/CartList';
import About from './components/About/About';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUS/contact us';
import ProductPage from './components/Store/ProductPage';
import { ProductList, useCart, handleFormSubmit } from './components/Store/ProductList';
import AuthForm from './components/Authentication/AuthForm';
import UserProfile from './components/Navbar/UserProfile';


function AppContent() {
  const authCtx = useContext(AuthContext);
  const { cart, showCart, addToCart, handleShow } = useCart();
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

  return (
    <>
      <Header count={cart.length} handleShow={handleShow} />
      <Routes>
      {authCtx.isLoggedIn &&<Route path="/" element={<Product product={ProductList} addToCart={addToCart}  />} />}
      {!authCtx.isLoggedIn &&<Route path="/" element={<AuthForm />} />}
        <Route path="/about" element={<About />} />
        <Route path="/contact us" element={<ContactUs handleFormSubmit={handleFormSubmit} />} />
        <Route path="/product/:productId" element={<ProductPage product={ProductList} />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={showCart && <CartList key="cart" cart={cart} />} />
        {!authCtx.isLoggedIn && (
          <Route path="/auth" element={<AuthForm onLogin={loginHandler} />} />
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile onLogout={logoutHandler} />} />
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