import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    state = {
        products: [],
        count: 0
    }

    checkDuplicateItems(newProduct) {

        let stateCopy = this.state.products
        let counter = 0;

        for(let i = 0; i < stateCopy.length; i++) {
            if(stateCopy[i].id === newProduct.id) {
                counter++
                if(counter >= 2) {
                    console.log('not spliced statecopy',stateCopy)
                    let removeIndex = stateCopy.map((item) => { return item.id}).indexOf(newProduct.id)
                    newProduct.quantity += stateCopy[removeIndex].quantity
                    stateCopy.splice(removeIndex, 1)
                    console.log('spliced statecopy',stateCopy)
                }
            }
        }
    }

    setProductId = (name, id, amount, price) => {
        let allProducts = this.state.products
        let newProduct = {name: name, id: id, quantity: amount, price: price}
        let productCount = 0;
        allProducts.push(newProduct)
        this.setState({
            products: allProducts
        })
        this.checkDuplicateItems(newProduct)
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
