import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
class ShoppingCartPage extends Component {

    createCartItems() {
        let shoppingCartItems =
            <ShoppingCartContext.Consumer>
            {({ products, removeItem, incrementProductCount, decreaseProductCount }) => {
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
                        <div className="item-shoppingcart">
                            <h3 className="item-name">{products[i].name}</h3>
                            <h5>quantity: {products[i].quantity}</h5>
                            <div onClick={() => {incrementProductCount(products[i].id)}} className="item-remove">
                                <i className="fas fa-plus-square"></i>
                            </div>
                            <div onClick={() => {decreaseProductCount(products[i].id)}} className="item-remove">
                                <i className="fas fa-minus-square"></i>
                            </div>
                            <h5>price: {products[i].price} €</h5>
                            <h5>total price: {itemTotalPrice} €</h5>
                            <div onClick={() => {removeItem(products[i].id)}} className="item-remove">
                                <i className="fas fa-trash-alt">
                                </i>
                            </div>
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