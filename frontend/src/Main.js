import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/Navigation';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <Header/>
        <Navigation/>
        <Footer/>
      </div>
    )
  }
}

export default Main;
