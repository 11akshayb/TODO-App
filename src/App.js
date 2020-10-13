import React from 'react';
import './App.css';
// import Header from "./components/Header.js"
import Main from "./components/Main"
import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Signup from "./components/Signup"

import store from './redux/store';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
