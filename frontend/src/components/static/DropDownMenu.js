import React, { Component } from 'react';

class DropDownMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
      , items: this.props.items
      , class: this.props.className
    }
    this.CreateDropDown = this.CreateDropDown.bind(this);
  }
  CreateDropDown(){
    let index = 0;
    let renderItems = this.state.items.map((x) =>
    <a href={x.toLowerCase()} key={index += 1}>
      {x}
    </a>
  );
    return renderItems;
  }
  render(){
    return (
      <div className="dropdown nav-item">
          <button onClick={this.props.function} className="dropbutton">{this.state.name}</button>
          <div className={"dropdown-content"+" hidden "+this.state.class} id={this.state.name}>
            <this.CreateDropDown/>
          </div>
        </div>
    )
  }
}

export default DropDownMenu;