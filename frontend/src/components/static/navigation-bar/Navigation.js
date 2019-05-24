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
      return <li><NavButton name="Admin" icon="fas fa-tools"/></li>
    } else {
      return null;
    }
    /*
    
    <DropDownMenu name="categories" className="categoriesDD" 
    items={this.state.categories} function={this.OpenDropDown}/>
    <div className="search nav-item">
      <SearchBar />
    </div>
    */
  }
  handleClick = () => {
    const x = document.querySelector('.toggler');
    x.checked = false; 
  }
  render(){
    return(
        <div className="menu-wrap">
          <input type="checkbox" className="toggler"/>
          <div className="hamburger"><div className="first-line"></div></div>
          <div className="menu">
            <div>
              <div>
                <ul onClick={() => {this.handleClick()}}>
                  <li><NavButton name="Home"/></li>
                  <li><DropDownMenu name="countries" className="countriesDD" 
                  items={this.state.countries} function={this.OpenDropDown}/></li>
                  <li><NavButton name="About"/></li>
                  <li><NavButton name="Contact"/></li>
                  <this.isAdmin/>
                  <li><this.LoginOrLogout/></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Navigation;