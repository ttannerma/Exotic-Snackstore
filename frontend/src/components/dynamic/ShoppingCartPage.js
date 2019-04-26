import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
class ShoppingCartPage extends Component {

    createCartItems() {
        let shoppingCartItems =
            <ShoppingCartContext.Consumer>
            {({ products }) => {
                let allProducts = []
                let myarray = []
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
                        <div className="item-shoppingcart">
                            <h3 className="item-name">{products[i].name}</h3>
                            <h5>quantity: {products[i].quantity}</h5>
                            <h5>price: {products[i].price} €</h5>
                            <h5>total price: {itemTotalPrice} €</h5>
                        </div>
                        allProducts.push(item)
                        cartTotalPrice = parseFloat(cartTotalPrice) + parseFloat(itemTotalPrice)
                        cartTotalPrice = cartTotalPrice.toFixed(2)
                }
                return (
                    <React.Fragment>
                        <h1>Shopping Cart</h1>
                        {allProducts}
                        <h3>Cart total price: {cartTotalPrice} €</h3>
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