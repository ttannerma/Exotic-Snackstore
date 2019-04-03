import React, { Component } from 'react';
import Items from './Items';

// Creates item elements into array and returns it
class Item extends Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
        <Items category={this.props} />
      )
  }
}
export default Item;