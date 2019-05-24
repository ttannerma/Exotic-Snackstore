import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import axios from 'axios'

class OrderReviewPage extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.location.state
    }

    componentDidMount() {
        if(this.state.deliveryMethod === "Home delivery") this.setDeliveryFee(10)
        else if(this.state.deliveryMethod === "Nearest post office") this.setDeliveryFee(5)
    }

    setDeliveryFee = (amount) => {
        let orderPrice = (parseFloat(this.state.price, 10) + parseFloat(amount, 10)).toFixed(2)
        this.setState({deliveryFee: amount, total: orderPrice })
    }

    createPageContent() {

        if(!this.state.firstname && !this.state.lastname) {
            this.props.history.push({
                pathname: '/notfound'
            })
        }

        let orderContainer =
            <div className="generic-container">
                {this.createOrderTable()}
                <div className="button-container">
                    {this.createConfirmationButton()}
                    {this.createReturnButton()}
                </div>
            </div>
            return orderContainer
    }

    createOrderTable() {
        let orderDetails =
            <div className="order-details">
                <h1 className="headline-generic">Order review: </h1>
                <p>Please check that all your information is correct.</p>
                <h5>First name: <br/>{this.state.firstname}</h5>
                <h5>Last name: <br/>{this.state.lastname}</h5>
                <h5>Address: <br/>{this.state.address}</h5>
                <h5>Postal code: <br/>{this.state.postalcode}</h5>
                <h5>City: <br/>{this.state.city}</h5>
                <h5>Email: <br/>{this.state.email}</h5>
                <h5>Phone number: <br/>{this.state.phonenumber}</h5>
                <h5>Delivery : <br/>{this.state.deliveryMethod}</h5>
                <h5>Payment: <br/>{this.state.paymentMethod}</h5>
                <h3>Delivery fee: <br/>{this.state.deliveryFee} €</h3>
                <h3>Products cost: <br/>{this.state.price} €</h3>
                <h3>Total: <br/>{this.state.total} €</h3>
            </div>
        return orderDetails
    }

    addNewOrder = () => {
        let orderData = this.state
        let productArray = []
        for (let i = 0; i < orderData.products.length; i++) {
            let productName = orderData.products[i].name
            let quantity = orderData.products[i].quantity
            let price = orderData.products[i].price
            let obj = { name: productName, quantity: quantity, price: price}
            productArray.push(obj)
        }
        let products = JSON.stringify(productArray)
        orderData.products = products
        axios.post('http://localhost:8080/orders/', orderData)
        .then(response => {
            
        })
        this.props.history.push('/order-success')
    }

    createConfirmationButton() {
        let confirmationButton =
            <ShoppingCartContext.Consumer>
                {({ resetCart }) => (
                    <button type="button" onClick={() => {
                        resetCart()
                        this.addNewOrder()
                    }}>
                        Purchase and return to front page
                    </button>
                )}
            </ShoppingCartContext.Consumer>
            return confirmationButton
    }
    createReturnButton() {
        let returnButton = 
            <button onClick={() => this.props.history.push('/cart/payment-and-delivery')}>
                Edit contact info
            </button>

            return returnButton
    }

    render() {
        return (
            this.createPageContent()
        )
    }
}

export default OrderReviewPage