import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div className='flex shopping-card'>
      <NavLink exact to="/home" activeClassName="active" ><button>Home</button></NavLink>
      <NavLink  to="/" activeClassName="active"><button>Store</button></NavLink>
      <NavLink  to="/about" activeClassName="active"><button>About</button></NavLink>
      <NavLink  to="/fetchmovies" activeClassName="active"><button>Add Movie</button></NavLink>
     <NavLink  exact to="/cart"  activeClassName="active"> <button onClick={() => props.handleShow(true)}>Cart
        <sup>{props.count}</sup> </button>
     </NavLink>
     </div>
     );
};


export default Header;