import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="home  ">
      <h1>Welcome to The Generics</h1>
      <p>Get our Latest Album</p>
      <div className="tours ">
        <h2>TOURS</h2>
        <div className="tour-item ">
          <h3>JUL16</h3>
          <p>DETROIT, MI</p>
          <p>DTE ENERGY MUSIC THEATRE</p>
          <button className='button'>BUY TICKETS</button>
        </div>
        <div className="tour-item ">
          <h3>JUL19</h3>
          <p>TORONTO, ON</p>
          <p>BUDWEISER STAGE</p>
          <button className='button'>BUY TICKETS</button>
        </div>
        <div className="tour-item ">
          <h3>JUL22</h3>
          <p>BRISTOW, VA</p>
          <p>JIGGY LUBE LIVE</p>
          <button className='button'>BUY TICKETS</button>
        </div>
        <div className="tour-item ">
          <h3>JUL29</h3>
          <p>PHOENIX, AZ</p>
          <p>AK-CHIN PAVILION</p>
          <button className='button'>BUY TICKETS</button>
        </div>
        <div className="tour-item ">
          <h3>AUG2</h3>
          <p>LAS VEGAS, NV</p>
          <p>T-MOBILE ARENA</p>
          <button className='button'>BUY TICKETS</button>
        </div>
        <div className="tour-item ">
          <h3>AUG7</h3>
          <p>CONCORD, CA</p>
          <p>CONCORD PAVILION</p>
          <button className='button'>BUY TICKETS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;