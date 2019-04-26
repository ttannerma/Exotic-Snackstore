import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    state = {
        products: [],
        count: 0
    }

    setProductId = (name, id, amount, price) => {
        let allProducts = this.state.products
        let newProduct = {name: name, id: id, quantity: amount, price: price}
        let productCount = 0;
        allProducts.push(newProduct)
        this.setState({
            products: allProducts
        })
        console.log(allProducts)

        for(let i = 0; i < allProducts.length; i++) {
            productCount += allProducts[i].quantity
        }
        this.setState({ count: productCount})
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
