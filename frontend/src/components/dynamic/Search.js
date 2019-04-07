import React, { Component } from 'react'
import Body from './Body'
import { Provider } from '../../context';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.searchVal = this.props.value;
    // props.location.pathname gets url path.
    // props.match.params.someId gets params from url.
  }

  render() {
    this.searchVal = this.props.match.params.searchVal
    return (
      <div>
        <h1>Search Results with {this.searchVal} </h1>
        <Provider value={this.searchVal}>
            <Body />
        </Provider>
      </div>
    )
  }
}
