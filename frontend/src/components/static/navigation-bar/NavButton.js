import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavButton extends Component{
  constructor(props){
    super(props);
    this.name = props.name;
  }
  render(){
    if(this.props.icon) {
      return(
        <NavLink to={'/'+this.name.toLowerCase()} activeClassName='active' className="navbutton nav-item">
        {this.name} <i className={this.props.icon}></i>
      </NavLink>
      )
    }
    return(
      <NavLink to={'/'+this.name.toLowerCase()} activeClassName='active' className="navbutton nav-item">
      {this.name}
    </NavLink>
    )
  }
}

export default NavButton;