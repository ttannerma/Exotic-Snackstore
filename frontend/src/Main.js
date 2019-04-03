import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/Navigation';
import Body from './components/dynamic/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          <Header/>
          <Navigation/>
          <Body/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default Main;
