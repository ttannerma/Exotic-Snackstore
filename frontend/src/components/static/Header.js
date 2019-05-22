import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  handleClick = (e) => {
    e.preventDefault();
    var x = document.querySelector(".myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  render(){
    return(
      <header>
        <NavLink to="/"><h1>Exotic Snackstore</h1></NavLink>
        <img src="assets/candy.png" alt=""/>
        <button onClick={(e)=> {this.handleClick(e)}} className="hamburger">
          <i className="fas fa-bars"></i>
        </button>
      </header>
    )
  }
}

export default Header;