import React from 'react';
import '../App.css';

function Header(props) {
  return (
    <div className='flex shopping-card'>
     <div onClick={() => props.handleShow(false)} >Home</div>
     <div>Store</div>
     <div>About</div>
     <button onClick={() => props.handleShow(true)}>Cart
        <sup>{props.count}</sup>
     </button>
    
    </div>
  );
};


export default Header;
