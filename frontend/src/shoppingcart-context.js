import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    state = {
        products: [],
        count: 0
    }

    removeItem = (id) => {
        console.log('remove item state: ', this.state.products)
        let stateCopy = this.state.products
        // Iterate shopping cart products
        for(let i = 0; i < stateCopy.length; i++) {
            // Check if new product exists already in cart.
            if(stateCopy[i].id === id) {
                    let removeIndex = stateCopy.map((item) => { return item.id}).indexOf(id)
                    stateCopy.splice(removeIndex, 1)
            }
        }
        this.updateItemCount()
        this.setState({products: stateCopy, count: this.updateItemCount()})
    }

    updateItemCount = () => {
        let updatedItemCount = 0
        if(this.state.products.length > 0) {
            for(let i = 0; i < this.state.products.length; i++) {
                updatedItemCount += this.state.products[i].quantity 
            }
            return updatedItemCount
        }
        return updatedItemCount
    }

    checkDuplicateItems(newProduct) {
        let stateCopy = this.state.products
        let counter = 0;
        // Iterate shopping cart products
        for(let i = 0; i < stateCopy.length; i++) {
            // Check if new product exists already in cart.
            if(stateCopy[i].id === newProduct.id) {
                counter++
                // If there is more than two of the same product then remove the old one, replace old item
                // quantity to new product and add it to the list.
                if(counter >= 2) {
                    let removeIndex = stateCopy.map((item) => { return item.id}).indexOf(newProduct.id)
                    newProduct.quantity += stateCopy[removeIndex].quantity
                    stateCopy.splice(removeIndex, 1)
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
                , removeItem: this.removeItem
            }}>
                {this.props.children}
            </ShoppingCartContext.Provider>
        )
    }
}
