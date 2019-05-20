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
      this.props.getProductsWithCat(category, (products) => {
        this.setState({products})
      });
    }

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
    this.setState({products: results});
  }

  displayError = () => {
    // If there are no items return message.
        return <div className="generic-container"><h1> No products found! </h1></div>
  }

  // Creates item elements.
  createItem = () => {
    // If products are not found, display error message.
    if (this.state.products.length === 0) return this.displayError()
    let defaultImageLink = "https://lh3.googleusercontent.com/hmYFfk7e8FOdiMg4j6qSckZ4ThQQUKIzQGdY1jQw5a8I9kV48wmktV0QhdQUPGFKha7dp9JkZ2Y=s220"
    let items = []

    // Iterate all products in current state.
    for (let i = 0; i < this.state.products.length; i++) {
      let { ratings, id, name, description, price, imagepath, allergies, stock, weight } = this.state.products[i];
      let link = `/products/${name}`
      let ratingsArray = []
      for(let k = 0; k < ratings; k++) {
        let star = <i key={name + k} className="fas fa-star"></i>
        ratingsArray.push(star)
      }

      // Create item elements.
      let item =
      <ShoppingCartContext.Consumer key={'consumer - ' + i}>
      {({ setProductId, checkCartItemQuantity }) => (
        <div className="item" key={'item - '+ i}>
          <Link to={{
              pathname: link,
              state: {
                  ratings: ratings,
                  id: id,
                  name: name,
                  description: description,
                  price: price,
                  imagepath: imagepath,
                  allergies: allergies,
                  stock: stock,
                  weight: weight
              }
          }}>
            <img src={imagepath ? imagepath : defaultImageLink} alt={name} key={'img - '+ i}/>
          </Link>
          <h2 className="product-name">{name}</h2>
          <p>{description}</p>
          <form className="itemAddForm" key={'form - ' + i}>
                    <input type="number" onChange={this.handleChange} name="quantity" min={stock ? 1 : 0} max={stock ? stock : 0} step="1" />
                    <button  type="button"
                        onClick={() => {
                            if(checkCartItemQuantity(id) + this.state.value <= stock) {
                                if(this.state.value >= stock) {
                                    this.setState({value: this.state.value - 1}) 
                                }
                                if(this.state.value > 0 && this.state.value <= 30) {
                                    setProductId(this.state.products[i].name, this.state.products[i].id, this.state.value, this.state.products[i].price, this.state.products[i].stock)
                                }
                            } else {
                                alert('We dont have that many items in stock')
                            }
                            }}>Add</button>
          </form>
          <h2>{price} €</h2>
          <h2>{ratings ? ratingsArray : 'No ratings'}</h2>
          <h5>{stock ? 'Stock: ' + stock : 'Out of stock'}</h5>
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

  render() {
    return (
      this.createItem()
    )
  }
}

export default Items;