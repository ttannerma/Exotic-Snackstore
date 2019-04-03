import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavButton extends Component{
  constructor(props){
    super(props);
    this.name = props.name;
  }
  render(){
    return(
      <Link to={this.name.toLowerCase()} className="navbutton nav-item">
      {this.name}
    </Link>
    )
  }
}

export default NavButton;