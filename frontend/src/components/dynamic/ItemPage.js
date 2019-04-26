import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'

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
        let item = 
        <ShoppingCartContext.Consumer>
        {({ setProductId }) => (
            <div className="item">
                <img className="item-image" src="../../assets/download.jpg" alt="Candy"></img>
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