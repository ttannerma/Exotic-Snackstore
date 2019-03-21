import React, { Component } from 'react';

// Creates item elements into array and returns it
class Item extends Component {

  constructor() {
    super()
    this.createItem = this.createItem.bind(this)
    this.state = {products: []}
    this.setProductData = this.setProductData.bind(this)
  }

  // Use fetch API to get data on products.
  componentDidMount() {
    fetch('http://localhost:8080/products/').then(r => r.json()).then(this.setProductData)
  }
  // Assign data value to this.state
  setProductData(results) {
    this.setState({products: results})
  }
  // Creates item elements. Assigns them with values gathered from database.
  createItem() {
    let items = []
    for (let i = 0; i < this.state.products.length; i++) {
      let item =
        <div className="item">
          <img src="https://fpoimg.com/300x300?text=Advertisement" alt="Product"/>
          <h2>{this.state.products[i].name}</h2>
          <p>{this.state.products[i].description}</p>
          <h2>{this.state.products[i].price} €<span>Ratings</span></h2>
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