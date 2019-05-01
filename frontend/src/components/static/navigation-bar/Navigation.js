import React, { Component } from 'react';
import SearchBar from './SearchBar';
import DropDownMenu from './DropDownMenu';
import NavButton from './NavButton';
//import { Consumer } from '../../../context';

class Navigation extends Component{
  constructor(props){
    super(props);
    let countries = ['Japan', 'China', 'USA', 'Russia'];
    let categories = ['Salty', 'Sweet', 'Drinks', 'Other']; 
    let isLoggedIn = true;
    this.state = {countries, categories, isLoggedIn};
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
      document.querySelector('.categoriesDD').classList.add('hidden');
    }else if(target === 'categories'){
      toggleTarget = document.querySelector('.categoriesDD');
      document.querySelector('.countriesDD').classList.add('hidden');
    }
    e.target.classList.toggle('active');
    toggleTarget.classList.toggle('hidden');
  }
  LoginOrLogout = () => {
    if(!this.state.isLoggedIn) {
      return <NavButton icon="fas fa-sign-out-alt" name="Logout"/>
    } else {
      return <NavButton icon="fas fa-sign-in-alt" name="Login"/>
    }
  }
  render(){
    return(
      <nav>
        <NavButton name="Home"/>
        <DropDownMenu name="countries" className="countriesDD" 
        items={this.state.countries} function={this.OpenDropDown}/>
        <DropDownMenu name="categories" className="categoriesDD" 
        items={this.state.categories} function={this.OpenDropDown}/>
        <NavButton name="About" />
        <NavButton name="Contact"/>
        <div className="search nav-item">
        <SearchBar />
        </div>
        <NavButton name="Admin" icon="fas fa-tools"/>
        <this.LoginOrLogout />
      </nav>
    )
  }
}

export default Navigation;