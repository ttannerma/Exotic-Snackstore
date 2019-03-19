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
  myFunction(){
    document.getElementById("myDropdown").classList.toggle("show"); 
  }
  render(){
    return(
      <nav>
        <DropDownMenu name="countries" items={this.state.countries}/>
        <div className="search">
          <SearchBar/>
          <NavButton name="Search"/>
        </div>
      </nav>
    )
  }
}

export default Navigation;