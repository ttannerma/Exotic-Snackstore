import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    state = {
        products: [],
        count: 0
    }

    setProductId = (id, amount) => {
        let allProducts = this.state.products
        let newProduct = {id: id, stock: amount}
        let productCount = 0;
        allProducts.push(newProduct)
        this.setState({
            products: allProducts
        })
        console.log(allProducts)

        for(let i = 0; i < allProducts.length; i++) {
            productCount += allProducts[i].stock
        }
        this.setState({ count: productCount})
        console.log(productCount)
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
