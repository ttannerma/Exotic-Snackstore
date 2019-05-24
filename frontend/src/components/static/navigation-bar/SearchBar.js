import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component{
  constructor(props) {
      super(props);
      this.state = {
          searchValue: ""
      }
  }
  handleChange = (event) => {
    this.setState({
        searchValue: event.target.value
    })
  }
  render(){
    return (
      <div className="search nav-item">
        <input type="text" onChange={this.handleChange} placeholder="Search..." name="search-input"></input>
        <Link name="Search" className="navbutton" 
        to={`/search/${this.state.searchValue}`} disabled={this.state.searchValue === ""}>
        <i className="fas fa-search"></i>
        </Link>
      </div>
    )
  }
}

export default SearchBar;