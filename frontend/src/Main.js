import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Nav from './components/static/Nav';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <Header/>
        <Nav/>
        <Footer/>
      </div>
    )
  }
}

export default Main;
