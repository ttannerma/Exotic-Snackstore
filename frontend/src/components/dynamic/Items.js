import React, { Component } from 'react';
import { Consumer } from '../../context';

class Items extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            value: 0,
            category: props.category
        }
    }
    // Called when searched a second time. Compares old and new props.
    componentWillReceiveProps(nextProps) {
        if(this.props.category !== nextProps.category) {
            console.log('new props: ', nextProps.category)
            this.setState({
                category: nextProps.category
            })
            this.fetchNewProducts(nextProps.category)
        }
    }

    fetchNewProducts(category) {
        fetch(`http://localhost:8080/search/${category}`).then(r => r.json())
        .then(this.setProductData)
    }

  // Use fetch API to get data on products.
  componentDidMount() {
    // Check if products need to be searched by category. If not, then fetch all products.
    if(this.state.category === '' || this.state.category === undefined) {
        fetch(`http://localhost:8080/products/`).then(r => r.json())
        .then(this.setProductData)
    } else {
        // Fetch products by category.
        fetch(`http://localhost:8080/search/${this.state.category}`).then(r => r.json())
        .then(this.setProductData)
    }
  }

  // Assign all product data to this.state
  setProductData = (results) => {
    this.setState({products: results})
  }

  // Creates item elements.
  createItem = () => {

    // If there are no items return message.
    if (this.state.products.length === 0) {
        return <h1> No products found! </h1>
    }

    let items = []
    // Iterate all products in current state.
    for (let i = 0; i < this.state.products.length; i++) {
      let { ratings, id, name, description, price } = this.state.products[i];

      // Create item elements.
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

export default Items;