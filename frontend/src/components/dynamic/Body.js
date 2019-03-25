import React, { Component } from 'react';
import Item from './Item'

// Container for item elements
class Body extends Component {
    
  render() {
    return(
      <div id="main">
      <Item/>
      </div>
    )
  }
}

export default Body;