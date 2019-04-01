import React, { Component } from 'react';

// Creates item elements into array and returns it
class Item extends Component {

  constructor() {
    super()
    this.state = {products: []}
  }

  // Use fetch API to get data on products.
  componentDidMount() {
    //Nippe was here
    //.then(this.setProductData)
  }
  // Assign data value to this.state
  setProductData = (results) => {
    this.setState({products: results})
  }
  // Creates item elements. Assigns them with values gathered from database.
  createItem = () => {
    let items = []

    // Fetch items from database and create elements for them.
    for (let i = 0; i < this.state.products.length; i++) {
      
      const ratings = this.state.products[i].ratings
      let id = this.state.products[i].id
      let name = this.state.products[i].name
      let description = this.state.products[i].description
      let price = this.state.products[i].price

      // Create item elements
      let item =
        <div className="item">
          <img src="https://fpoimg.com/300x300?text=Advertisement" alt="Product"/>
          <h2>{name}</h2>
          <p>{description}</p>
          <form className="itemAddForm">
                    <input type="number" onChange={this.handleChange} name="quantity" min="-10" max="999" step="1" />
                    <button type="button"
                        onClick={() => { this.saveItem(id, this.input) }}>Buy</button>
          </form>
          <h2>{price} €<span>{ratings ? ratings : 'No ratings'}</span></h2>
        </div>
        items.push(item)
    }

    // If there are no items return message.
    if (items.length === 0) {
        return <h1> No products found! </h1>
    }

    // Return array containing elements.
    return items
  }

  // Handles the event when incrementing product quantity within item container.
  handleChange = (event) => {
    this.setState({
        value: Number(event.target.value)
    })
  }
  // Contains item data which are passed to shopping cart.
  saveItem = (productId) => {
      console.log('product id: ' + productId,'amount to add or decrease: '+  this.state.value)
  }

  render() {
    return (
      this.createItem()
    )
  }
}
export default Item;