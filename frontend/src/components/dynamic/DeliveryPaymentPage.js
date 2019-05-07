import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import { Router, Link } from 'react-router-dom'

class DeliveryPaymentPage extends Component {

    constructor() {
        super()
        this.state = {
            deliveryMethod: ""
            , paymentMethod: "PayPal"
            , price: 0
            , products: []
            , firstname: ""
            , lastname: ""
            , phonenumber: undefined
            , email: ""
            , address: ""
            , city: ""
            , postalcode: undefined
            , formErrors: ""
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
                    <h1>Order: </h1>
                    {allProducts}
                    <h3>Total price: {cartTotalPrice}€</h3>
                </React.Fragment>
            )
        }}
        </ShoppingCartContext.Consumer>
        return itemContainer
    }


    setDeliveryMethods(event) {
        this.setState({ deliveryMethod: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('submitted.')
        console.log(this.state)
        this.props.history.push({
            pathname: '/cart/order-review'
            , state: this.state
        })
    }

    createForm() {
        let contactAndDeliveryForm =
        <form onSubmit={this.handleSubmit.bind(this)}>
        <h4> Select delivery option: </h4>
            <input type="radio"
            name="deliveryMethod"
            value="Nearest post office"
            required
            onClick={this.setDeliveryMethods.bind(this)} /> Nearest post office
            <input type="radio"
            name="deliveryMethod"
            value="Home delivery"
            required
            onClick={this.setDeliveryMethods.bind(this)} /> Home delivery
            <br/>
            <h4>Select payment option: </h4>
            <select required onChange={this.setPaymentMethod.bind(this)}>
                <option value="PayPal">PayPal</option>
                <option value="OP">OP</option>
                <option value="Danske Bank">Danske Bank</option>
                <option value="Nordea">Nordea</option>
                <option value="Säästöpankki">Säästöpankki</option>
                <option value="POP Pankki">POP Pankki</option>
            </select>
            <br/>
            <h4>Fill out your contact details: </h4>
                <label> First name: </label>
                <input required type="text" name="firstname" minlength="1" maxlength="100" onChange={this.setContactDetails.bind(this)} />
                <label> Last name: </label>
                <input required type="text" name="lastname" minlength="1" maxlength="100" onChange={this.setContactDetails.bind(this)} />

                <label> Phone number: </label>
                <input required type="text" name="phonenumber" minlenght="3" maxlength="40" onChange={this.setContactDetails.bind(this)}/>

                <label> Email: </label>
                <input required type="email" name="email" minlength="5" maxength="50" onChange={this.setContactDetails.bind(this)}/>

                <label> Address: </label>
                <input required type="text" name="address" minlength="1" maxlength="100" onChange={this.setContactDetails.bind(this)}/>

                <label> City: </label>
                <input required type="text" name="city" maxlength="60" minlength="1" onChange={this.setContactDetails.bind(this)}/>

                <label> Postal code: </label>
                <input required type="text" name="postalcode" minlength="5" maxlength="10" onChange={this.setContactDetails.bind(this)}/>

                <button type="submit">Continue to order review</button>
        </form>

        return contactAndDeliveryForm
    }

    setPaymentMethod(event) {
        this.setState({paymentMethod: event.target.value})
    }

    setContactDetails(event) {
        switch(event.target.name) {
            case "firstname":
                this.setState({firstname: event.target.value})
                break;
            case "lastname":
                this.setState({lastname: event.target.value})
                break;
            case "phonenumber":
                this.setState({phonenumber: event.target.value})
                break;
            case "email":
                this.setState({email: event.target.value})
                break;
            case "address": 
                this.setState({address: event.target.value})
                break;
            case "city":
                this.setState({city: event.target.value})
                break;
            case "postalcode":
                this.setState({postalcode: event.target.value})
                break;
            default:
        }
    }

    createPageContent() {
        return (
            <div className="generic-container">
                {this.createProductList()}
                {this.createForm()}
                {this.createReturnButton()}
            </div>
        )
    }

    createConfirmButton() {
        let confirmButton =
            <Link to={{
                pathname: '/cart/order-review'
                , state: this.state
            }}>
                <button>
                    Continue to review and purchase
                </button>
            </Link>

        return confirmButton
    }

    createReturnButton() {
        let returnButton = 
            <button onClick={() => this.props.history.push('/cart')}>
                Go back to shopping cart
            </button>

            return returnButton
    }

    render() {
        return (
            this.createPageContent()
        )
    }
}

export default DeliveryPaymentPage