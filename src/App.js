import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import Main from "./components/Main"
import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Signup from "./components/Signup"

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/main' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      {/* <Homepage /> */}
     {/* <Header /> */}
     {/* <Main /> */}
    </div>
    </Router>
  );
}

export default App;
