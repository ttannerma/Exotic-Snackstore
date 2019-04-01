import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/Navigation';
import Body from './components/dynamic/Body';

import Provider from './context';

class Main extends Component {
  render() {
    return(
      <Provider>
        <div className="container">
          <Header/>
          <Navigation/>
          <Body/>
          <Footer/>
        </div>
      </Provider>
    )
  }
}

export default Main;
