import React, { Component } from 'react';

// Creates item elements into array and returns it
class Item extends Component {

  constructor() {
    super()
    this.createItem = this.createItem.bind(this)
  }

  // Creates item elements.
  createItem() {
    let items = []
    for (let i = 0; i < 5; i++) {
      let item =
        <div className="item">
          <img src="https://fpoimg.com/300x300?text=Advertisement" alt="Product"/>
          <h2>Item name</h2>
          <p>This is product info</p>
          <h2>9,95€</h2>
        </div>
        items.push(item)
    }

    // Return array containing elements.
    return items
  }

  render() {
    return (
      this.createItem()
    )
  }
}
export default Item;