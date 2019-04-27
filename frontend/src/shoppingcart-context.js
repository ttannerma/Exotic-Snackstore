import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    // State contains product array which will contain product objects.
    // count contains product count.
    state = {
        products: [],
        count: 0
    }

    removeItem = (id) => {
        // Create state copy
        let stateCopy = this.state.products
        // Iterate shopping cart products and search the index of item that is to be removed
        for(let i = 0; i < stateCopy.length; i++) {
            if(stateCopy[i].id === id) {
                // Set the item's index by mapping it and then searching the index with indexof
                let removeIndex = stateCopy.map((item) => { return item.id}).indexOf(id)
                // Remove item object from state copy
                stateCopy.splice(removeIndex, 1)
            }
        }

        this.setState({products: stateCopy, count: this.updateItemCount()})
    }

    // Updates item count after setState
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

    // Checks duplicate item entries to shopping cart
    checkDuplicateItems(newProduct) {
        let stateCopy = this.state.products
        let counter = 0;
        // Iterate shopping cart products
        for(let i = 0; i < stateCopy.length; i++) {
            console.log(counter)
            // Check if new product exists already in cart.
            if(stateCopy[i].id === newProduct.id) {
                counter++
                // If there is more than two of the same product then remove the old one, replace old item
                // quantity to new product and add it to the list.
                if(counter >= 2) {
                    let removeIndex = stateCopy.map((item) => { return item.id}).indexOf(newProduct.id)
                    newProduct.quantity += stateCopy[removeIndex].quantity
                    stateCopy.splice(removeIndex, 1)
                    this.setState({ products: stateCopy, count: this.updateItemCount()})
                }
            }
        }
    }

    // Sets product data to shopping cart
    setProductId = (name, id, amount, price) => {
        // Create state copy of products
        let allProducts = this.state.products
        let newProduct = {name: name, id: id, quantity: amount, price: price}
        allProducts.push(newProduct)
        // If new product already exists on cart, then update quantity on existing product.
        this.checkDuplicateItems(newProduct)
        // Set new state with new product and updated item count.
        this.setState({
            products: allProducts, count: this.updateItemCount()})
        
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
