import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/navigation-bar/Navigation';
import Body from './components/dynamic/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/static/About';
import Contact from './components/static/Contact';
import Search from './components/dynamic/Search';
import ItemPage from './components/dynamic/ItemPage';
import Login from './components/static/Login/Login';

class Main extends Component {
  render() {
    return(
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div className="head">
            <Header/>
            <Navigation/>
          </div>
          <div className="container">
            <div className="content-shell">
              <Switch>
                <Route exact path ="/" component={Body}></Route>
                <Route exact path ="/home" component={Body}></Route>
                <Route exact path ="/login" component={Login}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/search/:searchVal" component={Search}></Route>
                <Route exact path="/categories/:searchVal" component={Search}></Route>
                <Route exact path="/countries/:searchVal" component={Search}></Route>
                <Route exact path="/products/:productName" component={ItemPage}></Route>
              </Switch>
            </div>
          </div>
          <Footer/>
        </Router>
    )
  }
}

export default Main;
