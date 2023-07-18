import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div className='flex shopping-card'>
      <NavLink exact to="/home" activeClassName="active" >Home</NavLink>
      <NavLink  to="/" activeClassName="active">Store</NavLink>
      <NavLink  to="/about" activeClassName="active">About</NavLink>
     <NavLink  exact to="/cart"  activeClassName="active"> <button onClick={() => props.handleShow(true)}>Cart
        <sup>{props.count}</sup> </button>
     </NavLink>
     
    
    </div>
  );
};


export default Header;