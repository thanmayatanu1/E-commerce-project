import React from 'react'
import classes from "./Footer.module.css"
import { FaFacebookSquare,FaTwitterSquare,FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className={classes.social}>
        <h1>The generics</h1>
        <div className={classes.social}>
          <span><FaTwitterSquare></FaTwitterSquare></span>
          <span> <FaFacebookSquare></FaFacebookSquare></span>
          <span><FaYoutube></FaYoutube></span>
        </div>
    </div>
  )
}