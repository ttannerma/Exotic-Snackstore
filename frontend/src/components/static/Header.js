import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header>
        <Link to="/"className="headerH1">Exotic Snackstore</Link>
        <img src="assets/candy2.jpg" alt=""/>
      </header>
    )
  }
}

export default Header;