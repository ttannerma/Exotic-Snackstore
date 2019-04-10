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
      <div>
        <input type="text" onChange={this.handleChange} placeholder="Search..."></input>
        <Link name="Search" className="navbutton" 
        to={`/search/${this.state.searchValue}`}>Search</Link>
      </div>
    )
  }
}

export default SearchBar;