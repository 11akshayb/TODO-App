import React from 'react'
import Button from '@material-ui/core/Button';
import {
    Link,
  } from 'react-router-dom';
 
 function Homepage() {
     return (
        <div>
            <h1>WELCOME !</h1>
            <Link to={{ pathname: "/login"}}>
            <Button variant="contained" color="secondary">
                LOGIN
            </Button>
            </Link>
            <Link to={{pathname: "/signup"}}>
            <Button variant="contained" color="secondary">
                SIGN-UP
            </Button>
            </Link>
        </div>
     )
 }
 
 export default Homepage
 