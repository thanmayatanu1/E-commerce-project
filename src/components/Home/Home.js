import React from "react";
import { Button } from 'react-bootstrap';

import classes from "./Home.module.css";
import HomeTour from "./HomeTour";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
        <div className={classes.home}>
      <h1 className={classes.blink}>The Generics</h1>
      <Button  variant="primary" size="lg">Get out latest Album</Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
      >
        <path
          fill="#fff"
          d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Zm4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"
        />
      </svg>
    </div>
    {/* Tours  */}
    <HomeTour></HomeTour>
    <Footer></Footer>
    </React.Fragment>
  );
};

export default Home;
