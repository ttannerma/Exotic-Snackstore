import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://localhost:8080/products/'
    };
  }
  fetch = () => {
    //fetch(this.url).then(r => r.json())
    console.log('Fetch');
  }
  render() {
    return (
      <Context.Provider value={this.fetch}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export 