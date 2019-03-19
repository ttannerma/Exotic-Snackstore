import React, { Component } from 'react';

class DropDownMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
      , items: this.props.items
    }
    this.CreateDropDown = this.CreateDropDown.bind(this);
  }
  CreateDropDown(){
    let renderItems = this.state.items.map((x) =>
    <a key={x.toString()}>
      {x}
    </a>
  );
    return renderItems;
  }
  render(){
    return (
      <div className="dropdown">
          <button click="myFunction()" className="dropbtn">Dropdown</button>
          <div id="myDropdown" className="dropdown-content">
            <this.CreateDropDown/>
          </div>
        </div>
    )
  }
}

export default DropDownMenu;