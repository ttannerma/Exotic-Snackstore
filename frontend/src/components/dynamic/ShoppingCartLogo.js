import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShoppingCartLogo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productData: [],
            count: 0
        }
    }

    handleClick = () => {
        console.log('Clicked shopping cart.')
    }

    render() {
        return (
            <div className="shoppingCart">
                <Link to={`/cart`}><i className="fas fa-shopping-cart" onClick={this.handleClick()}></i></Link>
                <div className="productCount"><p>{this.state.count}</p></div>
            </div>
        )
    }
}

export default ShoppingCartLogo;