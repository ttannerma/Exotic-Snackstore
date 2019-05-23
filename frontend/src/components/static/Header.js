import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
    return(
      <header>
        <NavLink to="/"><h1>Exotic Snackstore</h1></NavLink>
        <img src="assets/candy.png" alt=""/>
      </header>
    )
  }
}

export default Header;