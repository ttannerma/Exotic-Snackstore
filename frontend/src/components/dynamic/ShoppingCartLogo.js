import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../shoppingcart-context';

class ShoppingCartLogo extends Component {

    render() {
        return (
            <ShoppingCartContext.Consumer>
                {({ count }) => (
                    <div className="shoppingCart">
                        <Link to={`/cart`}><i className="fas fa-shopping-cart"></i></Link>
                        <div className="productCount"><p>{}</p></div>
                    </div>
                )}
            </ShoppingCartContext.Consumer>
        )
    }
}

export default ShoppingCartLogo;