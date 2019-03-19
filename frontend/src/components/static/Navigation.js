import React, { Component } from 'react';
import NavButton from './NavButton';
import SearchBar from './SearchBar';
import DropDownMenu from './DropDownMenu';

class Navigation extends Component{
  constructor(props){
    super(props);
    let countries = ['Japan', 'China', 'USA', 'Russia'];
    let categories = ['Salty', 'Sweet', 'Drinks', 'Other']; 
    this.state = {countries, categories};
  }
  OpenDropDown(e){
    console.log(e.target.innerHTML);
    // document.querySelector('.dropdown-content').style.visibility = 'visible';
  }
  render(){
    return(
      <nav>
        <DropDownMenu name="countries" className="countries" 
        items={this.state.countries} function={this.OpenDropDown}/>
        <DropDownMenu name="categories" className="categories" 
        items={this.state.categories} function={this.OpenDropDown}/>
        <div className="search">
          <SearchBar/>
          <NavButton name="Search"/>
        </div>
      </nav>
    )
  }
}

export default Navigation;