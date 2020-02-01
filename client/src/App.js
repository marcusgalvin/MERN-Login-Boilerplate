import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom';


import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Product from "./components/Product"







class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-app">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
