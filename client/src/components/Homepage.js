import React from 'react'
import Button from '@material-ui/core/Button';
import {
    Link,
  } from 'react-router-dom';
 
 function Homepage() {
     return (
        <div className='homepageContainer'>
            <h1>WELCOME!!!</h1>
            <Link to={{ pathname: "/login"}} style={{textDecoration:"none",marginRight:20}}>
            <Button variant="contained" color="secondary">
                LOGIN
            </Button>
            </Link>
            <Link to={{pathname: "/signup"}}  style={{textDecoration:"none"}}>
            <Button variant="contained" color="secondary">
                SIGN-UP
            </Button>
            </Link>
        </div>
     )
 }
 
 export default Homepage
 