import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Consumer } from '../../context';

class SearchBar extends Component{
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }
    }
    handleChange = (event) => {
        this.setState({searchValue: event.target.value})
    }
    logData = (results) => {
        console.log(results)
    }
  render(){
    return(
      <div>
        <input type="text" onChange={this.handleChange} placeholder="Search..."></input>
        <Link name="Search" className="navbutton" type="submit" to={/search/+this.state.searchValue}>Search</Link>
      </div>
    )
  }
}

export default SearchBar;