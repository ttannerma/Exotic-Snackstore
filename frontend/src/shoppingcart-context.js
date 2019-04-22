import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    state = {
        products: [],
        count: 0
    }

    setProductId = (id, amount) => {
        let allProducts = this.state.products
        let newProduct = {[id]: amount}
        let productCount = 0;
        allProducts.push(newProduct)
        this.setState({
            products: allProducts
        })
    }

    render() {
        return (
            <ShoppingCartContext.Provider 
                value={{
                ...this.state,
                setProductId: this.setProductId
            }}>
                {this.props.children}
            </ShoppingCartContext.Provider>
        )
    }
}
