import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'

class DeliveryPaymentPage extends Component {

    constructor() {
        super()
        this.state = {
            deliveryMethod: ""
            , paymentMethod: ""
        }
    }

    setSum = (sum) => {
        this.setState({paymentSum: sum})
    }
    createProductList() {
        let itemContainer = 
        <ShoppingCartContext.Consumer>
            {({ products }) => {
                let allProducts = []
                let cartTotalPrice = 0

                for(let i = 0; i < products.length; i++) {
                    const itemTotalPrice = (products[i].price * products[i].quantity).toFixed(2)
                    let item = 
                        <div className="item-shoppingcart">
                            <h3>{products[i].name}</h3>
                            <h3>Quantity: {products[i].quantity}</h3>
                            <h3>price: {products[i].price}€ x {products[i].quantity} = {itemTotalPrice}€</h3>
                        </div>
                        allProducts.push(item)
                        cartTotalPrice = parseFloat(cartTotalPrice) + parseFloat(itemTotalPrice)
                        cartTotalPrice = cartTotalPrice.toFixed(2)
                }
            return (
                <React.Fragment>
                    <h1>DeliveryPaymentPage: </h1>
                    {allProducts}
                    <h1>Total price: {cartTotalPrice}€</h1>
                </React.Fragment>
            )
        }}
        </ShoppingCartContext.Consumer>
        return itemContainer
    }


    setDeliveryMethods(event) {
        if(event.target.value === "post" || event.target.value === "home") {
            this.setState({ deliveryMethod: event})
        }
    }

    createDeliveryMethods() {
        let deliveryMethodList =
            <tbody>
                <tr>
                    <input type="radio"
                        name="deliveryMethod" 
                        value="post"
                        onClick={this.setDeliveryMethods.bind(this)}/>Nearest post office
                </tr>
                <tr>
                        <input type="radio"
                        name="deliveryMethod"
                        value="home"
                        onClick={this.setDeliveryMethods.bind(this)}/>Home delivery
                </tr>
            </tbody>
        return deliveryMethodList
    }

    createPageContent() {
        return (
            <div>
                {this.createProductList()}
                {this.createDeliveryMethods()}
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
            {this.createProductList()}
            {this.createDeliveryMethods()}
            </React.Fragment>
        )
    }
}

export default DeliveryPaymentPage