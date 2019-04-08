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
    this.setState({searchValue: value});
    console.log('Context searchValue',this.state.searchValue);
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