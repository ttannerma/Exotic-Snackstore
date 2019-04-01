import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
  }
  fetch = () => {
    //
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

export const Consumer = Context.Consumer;