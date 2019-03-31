import React, { Component } from 'react';

class SearchBar extends Component{
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            searchValue: ''
        }
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value})
    }
    handleSubmit(event) {
        console.log(this.state.searchValue)
        event.preventDefault()
    }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placeholder="Search..."></input>
        <button name="Search nav-button" type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar;