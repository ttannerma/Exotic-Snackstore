import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import { Link } from 'react-router-dom'
class ShoppingCartPage extends Component {

    createCartItems() {
        let shoppingCartItems =
            <ShoppingCartContext.Consumer>
            {({ products, removeItem, incrementProductCount, decreaseProductCount, checkCartItemQuantity }) => {
                let allProducts = []
                let cartTotalPrice = 0
                if (products <= 0) {
                    return (
                    <React.Fragment>
                        <h1>Shopping Cart</h1>
                        <h3>No items in shopping cart!</h3>
                    </React.Fragment>
                    )
                }

                for (let i = 0; i < products.length; i++) {
                    const itemTotalPrice = (products[i].price * products[i].quantity).toFixed(2)
                    let item = 
                        <div className="item-shoppingcart" key={products[i].name}>
                            <h3 className="item-name">{products[i].name}</h3>
                            <h3>In cart: {products[i].quantity}</h3>
                            <div className="cart-actions">
                                <div onClick={() => {
                                    // checkCartItemQuantity(products[i].id)
                                    incrementProductCount(products[i].id)
                                }} className="item-add">
                                    <i className="fas fa-plus-square"></i>
                                </div>
                                <div onClick={() => {decreaseProductCount(products[i].id)}} className="item-decrease">
                                    <i className="fas fa-minus-square"></i>
                                </div>
                                <div onClick={() => {removeItem(products[i].id)}} className="item-remove">
                                <i className="fas fa-trash-alt">
                                    </i>
                                </div>
                            </div>
                            <h4>Price: {products[i].price} €</h4>
                            <h4 className="total">Total: {itemTotalPrice} €</h4>
                        </div>
                        allProducts.push(item)
                        cartTotalPrice = parseFloat(cartTotalPrice) + parseFloat(itemTotalPrice)
                        cartTotalPrice = cartTotalPrice.toFixed(2)
                }

                return (
                    <React.Fragment>
                        <h1 className="headline-generic">Shopping Cart</h1>
                        {allProducts}
                        <div className="cart-bottom">
                        <h2 className="cart-total">Cart total: {cartTotalPrice} €</h2>
                            <Link to={'/cart/payment-and-delivery'}><button className="continue-purchase">Payment and Delivery</button></Link>
                        </div>
                    </React.Fragment>
                )
            }}
            </ShoppingCartContext.Consumer>
        return shoppingCartItems
    }
    createCart() {
        let container = 
            <div className="generic-container">
                {this.createCartItems()}
            </div>
            return container
    }

    render() {
        return (
            this.createCart()
        )
    }
}
export default ShoppingCartPage