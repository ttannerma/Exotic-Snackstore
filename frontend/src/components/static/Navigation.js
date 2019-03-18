import React, { Component } from 'react';
import NavButton from './NavButton';
import SearchBar from './SearchBar';
import DropDownCountries from './DropDownCountries';

class Navigation extends Component{
  render(){
    return(
      <nav>
        <DropDownCountries/>
        <NavButton name="Countries"/>
        <NavButton name="Categories"/>
        <div className="search">
          <SearchBar/>
          <NavButton name="Search"/>
        </div>
      </nav>
    )
  }
}

export default Navigation;