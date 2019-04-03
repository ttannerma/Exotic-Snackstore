import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.value = this.props.value;
  }
  /*
  onInit = () => {
    
    fetch(`http://localhost:8080/products/${}`)
            .then(r => r.json())
            .then(this.logData)
            .catch(() => {
                console.log('no products found.')
        })
  }*/
  render() {
    return (
      <div>
        <h1>Search Results with {this.value} </h1>
      </div>
    )
  }
}
