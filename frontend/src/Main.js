import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';

class Main extends Component {
  render() {
    return(
      <div className="container">
        <Header/>
        <Footer/>
      </div>
    )
  }
}

export default Main;
