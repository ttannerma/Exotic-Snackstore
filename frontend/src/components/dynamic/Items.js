import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../shoppingcart-context'
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
            this.setState({
                category: nextProps.category
            })
            this.fetchNewProducts(nextProps.category)
        }
    }

    fetchNewProducts(category) {
      console.log('FetchnewProducts');
      this.props.getProducts(category, (products) => {
        console.log(products.data);
      });
    }

  // Use fetch API to get data on products.
  componentDidMount() {
    // Check if products need to be searched by category, if not then fetch all products.
    if(this.state.category === '' || this.state.category === undefined) {
      this.props.getProducts(this.setProductData);
    } else {
        // Fetch products by category.
        this.props.getProductsWithCat(this.state.category, this.setProductData);
    }
  }

  // Assign all product data to this.state
  setProductData = (results) => {
    console.log('Set Product data: '+results)
    this.setState({products: results});
  }

  displayError = () => {
    // If there are no items return message.
        return <h1> No products found! </h1>
  }

  // Creates item elements.
  createItem = () => {
    // If products are not found, display error message.
    if (this.state.products.length === 0) return this.displayError()
    
    let items = []
    // Iterate all products in current state.
    for (let i = 0; i < this.state.products.length; i++) {
      let { ratings, id, name, description, price } = this.state.products[i];
      let link = `/products/${name}`

      // Create item elements.
      let item =
      <ShoppingCartContext.Consumer>
      {({ setProductId }) => (
        <div className="item" key={name}>
          <Link to={{
              pathname: link,
              state: {
                  ratings: ratings,
                  id: id,
                  name: name,
                  description: description,
                  price: price
              }
          }}>
            <img src="https://fpoimg.com/300x300?text=Advertisement" alt="Product"/>
          </Link>
          <h2>{name}</h2>
          <p>{description}</p>
          <form className="itemAddForm">
                    <input type="number" onChange={this.handleChange} name="quantity" min="1" max="30" step="1" />
                    <button type="button"
                        onClick={() => { this.state.value > 0 && this.state.value <= 30 ? setProductId(this.state.products[i].name, this.state.products[i].id, this.state.value, this.state.products[i].price): alert('You must add at least one product to cart.')}}>Buy</button>
          </form>
          <h2>{price} €<span>{ratings ? ratings : 'No ratings'}</span></h2>
        </div>
      )}
        </ShoppingCartContext.Consumer>
        items.push(item)
    }
    // Return array containing elements.
    return items
  }

  // Handles the event when incrementing product quantity within item container.
  handleChange = (event) => {
      try {
        this.setState({
            value: Number(event.target.value)
        })
      } catch {
        this.setState({
            value: 0
        })
      }

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