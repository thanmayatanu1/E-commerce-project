import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div className='flex'>
       <h1>The generics</h1>
      <NavLink exact to="/home" activeClassName="active" >Home</NavLink>
      <NavLink  to="/" activeClassName="active">Store</NavLink>
      <NavLink  to="/about" activeClassName="active">About</NavLink>
      <NavLink  to="/contact us" activeClassName="active">Contact Us</NavLink>
      <NavLink  to="/fetchmovies" activeClassName="active">Add Movie</NavLink>
     <NavLink  exact to="/cart"  activeClassName="active"> <button onClick={() => props.handleShow(true)}>Cart
        <sup>{props.count}</sup>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
        
         </button>
        
     </NavLink>
     </div>
    
     );
};


export default Header;