import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../dynamic/Search'

class DropDownMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
      , items: this.props.items
      , class: this.props.className
    }
  }
  CreateDropDown = () => {
    let index = 0;
    console.log(this.state);
    let renderItems = this.state.items.map((x) =>
    <NavLink to={'/'+this.state.name+'/'+x.toLowerCase()} key={index += 1} activeClassName='active'>
      {x}
    </NavLink>
  );
    return renderItems;
  }
  render(){
    return (
      <div className="dropdown nav-item">
          <button onClick={this.props.function} className="dropbutton" >{this.state.name}</button>
          <div className={"dropdown-content hidden "+this.state.class} id={this.state.name}>
            <this.CreateDropDown/>
          </div>
        </div>
    )
  }
}

export default DropDownMenu;