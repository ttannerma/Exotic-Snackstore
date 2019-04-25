import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
class ShoppingCartPage extends Component {


    getProductInfo() {

    }

    createCartItems() {
        let shoppingCartItems =
            <ShoppingCartContext.Consumer>
            {({ products }) => {
                let allProducts = []
                for (let i = 0; i < products.length; i++) {
                    console.log('shopping cart products:',products)
                    let item = 
                        <div className="item-shoppingcart">
                            <h1>name: {products[i].name}</h1>
                            <h5>quantity: {products[i].stock}</h5>
                        </div>
                        allProducts.push(item)
                }
                return (
                    <>
                    <h1>Shopping Cart</h1>
                    {allProducts}
                    </>
                )
            }}
            </ShoppingCartContext.Consumer>
            this.getProductInfo()
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