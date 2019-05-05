import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import { Link } from 'react-router-dom'

class DeliveryPaymentPage extends Component {

    constructor() {
        super()
        this.state = {
            deliveryMethod: ""
            , paymentMethod: ""
            , price: 0
            , products: []
            , firstname: ""
            , lastname: ""
            , phonenumber: undefined
            , email: ""
            , address: ""
            , city: ""
            , postalcode: undefined
        }
        this.products = []
        this.sum = 0
    }

    componentDidMount() {
        this.setState({ products: this.products, price: this.sum})
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
                this.products = products
                this.sum = cartTotalPrice
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
        this.setState({ deliveryMethod: event.target.value})
    }

    createDeliveryMethods() {
        let deliveryMethodList =
        <div className="delivery-method container">
                <h3> Select delivery option: </h3>
                <p>Your order will be shipped in the next business day.</p>
                <tbody>
                    <tr>
                        <input type="radio"
                            name="deliveryMethod" 
                            value="Nearest post office"
                            required
                            onClick={this.setDeliveryMethods.bind(this)}/>Nearest post office: 5 €
                    </tr>
                    <tr>
                            <input type="radio"
                            name="deliveryMethod"
                            value="Home delivery"
                            required
                            onClick={this.setDeliveryMethods.bind(this)}/>Home delivery: 10 €
                    </tr>
                </tbody>
            </div>
        return deliveryMethodList
    }

    createPaymentMethods() {
        let paymentMethodList =
            <div className="payment-method container">
                <h3> Select payment option: </h3>
                <select required onChange={this.setPaymentMethod.bind(this)}>
                    <option value="PayPal">PayPal</option>
                    <option value="OP">OP</option>
                    <option value="Danske Bank">Danske Bank</option>
                    <option value="Nordea">Nordea</option>
                    <option value="Säästöpankki">Säästöpankki</option>
                    <option value="POP Pankki">POP Pankki</option>
                </select>
            </div>
        return paymentMethodList
    }

    setPaymentMethod(event) {
        this.setState({paymentMethod: event.target.value})
    }

    setContactDetails(event) {
        switch(event.target.name) {
            case "firstname":
                this.setState({firstname: event.target.value})
            case "lastname":
                this.setState({lastname: event.target.value})
            case "phonenumber":
                this.setState({phonenumber: event.target.value})
            case "email":
                this.setState({email: event.target.value})
            case "address": 
                this.setState({address: event.target.value})
            case "city":
                this.setState({city: event.target.value})
            case "postalcode":
                this.setState({postalcode: event.target.value})
        }
    }

    createCustomerInfoForm() {
        let customerInfo = 
            <div className="contact-details container">
                <h3>Fill out your contact details: </h3>
                    <form onChange={this.setContactDetails.bind(this)}>
                        <label> First name: </label>
                        <input required type="text" name="firstname" />

                        <label> Last name: </label>
                        <input required type="text" name="lastname" />

                        <label> Phone number: </label>
                        <input required type="text" name="phonenumber" />

                        <label> Email: </label>
                        <input required type="text" name="email" />

                        <label> Address: </label>
                        <input required type="text" name="address" />

                        <label> City: </label>
                        <input required type="text" name="city" />

                        <label> Postal code: </label>
                        <input required type="text" name="postalcode" />
                    </form>
             </div>
        return customerInfo
    }

    createPageContent() {
        return (
            <div className="generic-container">
                {this.createProductList()}
                {this.createDeliveryMethods()}
                {this.createPaymentMethods()}
                {this.createCustomerInfoForm()}
                {this.createConfirmButton()}
            </div>
        )
    }

    createConfirmButton() {
        let confirmButton =
            <Link to={{
                pathname: '/cart/order-review',
                state: this.state
            }}>
                <button>
                    Click to review your order
                </button>
            </Link>
        return confirmButton
    }

    render() {
        return (
            this.createPageContent()
        )
    }
}

export default DeliveryPaymentPage