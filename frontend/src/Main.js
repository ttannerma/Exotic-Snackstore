import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/Navigation';
import Body from './components/dynamic/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/static/About';
import Contact from './components/static/Contact';
import Search from './components/dynamic/Search';

class Main extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          <Header/>
          <Navigation/>
          <div className="content-shell">
            <Switch>
              <Route exact path ="/" component={Body}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/search" component={Search}></Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default Main;
