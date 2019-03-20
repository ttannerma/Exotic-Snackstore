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
    let target = e.target.innerHTML;
    let toggleTarget;
    if(target === 'countries'){
      toggleTarget = document.querySelector('.countriesDD');
    }else if(target === 'categories'){
      toggleTarget = document.querySelector('.categoriesDD');
    }
    toggleTarget.classList.toggle('hidden');
  }
  render(){
    return(
      <nav>
        <DropDownMenu name="countries" className="countriesDD" 
        items={this.state.countries} function={this.OpenDropDown}/>
        <DropDownMenu name="categories" className="categoriesDD" 
        items={this.state.categories} function={this.OpenDropDown}/>
        <div className="search nav-item">
          <SearchBar/>
          <NavButton name="Search"/>
        </div>
      </nav>
    )
  }
}

export default Navigation;