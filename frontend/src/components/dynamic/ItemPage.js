import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import axios from 'axios'

class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state = props.location.state
    }

    // Contains item data which are passed to shopping cart.
    saveItem = (productId) => {
        console.log('product id: ' + productId,'amount to add or decrease: '+  this.state.value)
    }
    // Handles the event when incrementing product quantity within item container.
    handleChange = (event) => {
        this.setState({
            value: Number(event.target.value)
        })
    }

    createItemPage() {
        let defaultImageLink = "https://lh3.googleusercontent.com/hmYFfk7e8FOdiMg4j6qSckZ4ThQQUKIzQGdY1jQw5a8I9kV48wmktV0QhdQUPGFKha7dp9JkZ2Y=s220"
        let item = 
        <ShoppingCartContext.Consumer>
        {({ setProductId }) => (
            <div className="item">
                <img className="item-image" src={this.state.imagepath ? this.state.imagepath : defaultImageLink} alt="Candy"></img>
                <h3>Ratings: {this.state.ratings ? this.state.ratings : 'No ratings yet.'}</h3>
                <form className="itemAddForm">
                    <input type="number" onChange={this.handleChange} name="quantity" min="1" max="30" step="1" />
                    <button type="button"
                        onClick={() => {this.state.value > 0 ? setProductId(this.state.name, this.state.id, this.state.value, this.state.price) : alert('You must add at least one product to cart')}}>Buy</button>
                </form>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
                <h1>{this.state.price}</h1>
            </div>
        )}
        </ShoppingCartContext.Consumer>
        return item
    }

    render() {
        return (
            <div className="itemPageContainer">
                {this.createItemPage()}
            </div>
        )
    }
}

export default ItemPage