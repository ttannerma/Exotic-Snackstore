import React, { Component } from 'react';

class SearchBar extends Component{
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logData = this.logData.bind(this)
        this.state = {
            searchValue: ''
        }
    }
    handleChange(event) {
        this.setState({searchValue: event.target.value})
    }
    handleSubmit(event) {
        let searchVal = this.state.searchValue
        console.log(searchVal)
        event.preventDefault()
        
        fetch(`http://localhost:8080/products/${searchVal}`)
            .then(r => r.json())
            .then(this.logData)
            .catch(() => {
                console.log('no products found.')
            })
    }
    logData(results) {
        console.log(results)
    }
  render(){
    return(
      <form onSubmit={this.handleSubmit}
      method="post">
        <input type="text" onChange={this.handleChange} placeholder="Search..."></input>
        <button name="Search nav-button" type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar;