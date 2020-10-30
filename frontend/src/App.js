import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import TodoList from './components/TodoList'

import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/todo-list" component={TodoList} />
          </div>
      </div>
    </Router>
  );
}

export default App;
