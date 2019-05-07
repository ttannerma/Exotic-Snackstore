import React, { Component } from 'react'

export const ShoppingCartContext = React.createContext()

export class ShoppingCartProvider extends Component {

    // State contains product array which will contain product objects.
    // count contains product count.

    state = {
        products: [],
        count: 0
    }

    resetCart = () => {
        this.setState({products: [], count: 0})
    }

    componentDidMount() {
        let retrievedCartContent = localStorage.getItem("cartContent")
        if(retrievedCartContent) {
            this.createCart(retrievedCartContent);
        }
    }
    createCart = (content) => {
        let parsedContent = JSON.parse(content)
        if (parsedContent.products.length > 0) {
            let count = 0;
            for(let i = 0; i < parsedContent.products.length; i++) {
                count += parsedContent.products[i].quantity
            }
            this.setState({products: parsedContent.products, count: count})
        }
    }
    componentDidUpdate() {
        let shoppingCartContent = this.state
        localStorage.setItem("cartContent", JSON.stringify(shoppingCartContent))
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

    incrementProductCount = (id) => {
        let stateCopy = this.state.products
        let productIndex = stateCopy.map((item) => { return item.id}).indexOf(id)
        console.log(stateCopy[productIndex].stock)
        if(stateCopy[productIndex].quantity + 1 <= stateCopy[productIndex].stock){
            stateCopy[productIndex].quantity += 1
            this.setState({products: stateCopy, count: this.updateItemCount()})
        } else alert('We dont have that many products in stock')
    }

    decreaseProductCount = (id) => {
        let stateCopy = this.state.products
        let productIndex = stateCopy.map((item) => { return item.id}).indexOf(id)
        if (stateCopy[productIndex].quantity >= 1) {
            stateCopy[productIndex].quantity -= 1
            this.setState({products: stateCopy, count: this.updateItemCount()})
        }
        if (stateCopy[productIndex].quantity === 0 || stateCopy[productIndex].quantity <= 0){
            this.removeItem(id)
        }
    }

    checkCartItemQuantity = (id) => {
        let stateCopy = this.state.products
        if (stateCopy.length > 0) {
            let productIndex = stateCopy.map((item) => { return item.id}).indexOf(id)
            if(stateCopy[productIndex] === undefined) return 0
            return stateCopy[productIndex].quantity
        } else return 0
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
    setProductId = (name, id, amount, price, stock) => {
        // Create state copy of products
        let allProducts = this.state.products
        let newProduct = {name: name, id: id, quantity: amount, price: price, stock: stock}
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
                , incrementProductCount: this.incrementProductCount
                , decreaseProductCount: this.decreaseProductCount
                , resetCart: this.resetCart
                , checkCartItemQuantity: this.checkCartItemQuantity
            }}>
                {this.props.children}
            </ShoppingCartContext.Provider>
        )
    }
}
