import React, { Component } from 'react';
import SearchBar from './SearchBar';
import DropDownMenu from './DropDownMenu';

class Navigation extends Component{
  constructor(props){
    super(props);
    let countries = ['Japan', 'China', 'USA', 'Russia'];
    let categories = ['Salty', 'Sweet', 'Drinks', 'Other']; 
    this.state = {countries, categories};
  }
  componentDidMount = () => {
    window.onclick = function(event) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      if (!event.target.matches('.dropbutton')) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (!openDropdown.classList.contains('hidden')) {
            openDropdown.classList.add('hidden');
          }
        }
      }
    }
  }
  OpenDropDown(e){
    let target = e.target.innerHTML;
    let toggleTarget;
    if(target === 'countries'){
      toggleTarget = document.querySelector('.countriesDD');
    }else if(target === 'categories'){
      toggleTarget = document.querySelector('.categoriesDD');
    }
    e.target.classList.toggle('active');
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
        </div>
      </nav>
    )
  }
}

export default Navigation;