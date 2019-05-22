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
    this.state = {
      countries
      , categories
      , isLoggedIn: ''
    };
  }
  componentWillMount () {
    this.setState({isLoggedIn: sessionStorage.getItem("activeUserType")});
  }
  LoginOrLogout = () => {
    if(this.state.isLoggedIn) {
      return <NavButton icon="fas fa-sign-out-alt" name="Logout"/>
    } else {
      return <NavButton icon="fas fa-sign-in-alt" name="Login"/>
    }
  }
  isAdmin = () => {
    if(this.state.isLoggedIn === "admin") {
      return <NavButton name="Admin" icon="fas fa-tools"/>
    } else {
      return null;
    }
  }
  render(){
    return(
      <nav>
        <div className="myLinks">
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
          <this.isAdmin />
          <this.LoginOrLogout />
        </div>
      </nav>
    )
  }
}

export default Navigation;