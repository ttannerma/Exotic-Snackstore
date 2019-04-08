import React, { Component } from 'react';
import Header from './components/static/Header';
import Footer from './components/static/Footer';
import Navigation from './components/static/Navigation';
import Body from './components/dynamic/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/static/About';
import Contact from './components/static/Contact';
import Search from './components/dynamic/Search';
import  NotFound  from './components/dynamic/NotFound';
import { Provider } from './context';
import { Consumer } from './context';

class Main extends Component {
  render() {
    return(
      <Provider>
        <Router>
          <div className="container">
            <Header/>
            <Navigation/>
            <div className="content-shell">
              <Switch>
                <Route exact path ="/home" component={Body}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Consumer>
                  {value => {
                    return (
                      <Route exact path="/search" value={value} component={Search}></Route>
                    )
                  }}
                </Consumer>
                <Route path='*' exact={true} component={NotFound}/>
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default Main;
