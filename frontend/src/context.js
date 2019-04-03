import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
      , toggleSearchValue: this.toggleSearchValue
      }
    }
  
  toggleSearchValue = (value) => {
    console.log(this.state.searchValue);
    this.setState({searchValue: value});
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;