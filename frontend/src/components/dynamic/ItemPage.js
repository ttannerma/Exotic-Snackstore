import React, { Component } from 'react'
import { ShoppingCartContext } from '../../shoppingcart-context'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state = props.location.state
    }

    componentDidMount() {
        this.setState({hasRated: false})
    }

    handleChange = (event) => {
        this.setState({
            value: Number(event.target.value)
        })
    }

    handleRatingChange(event) {
        event.preventDefault()
        let rating = Number(event.target.value)
        this.setState({ newRating: rating})
    }

    handleRatingSubmit() {
        if (typeof this.state.newRating === "number") {
            this.sendRating(this.state.newRating, (response) => {
                
            })
        }
    }

    sendRating(rating, callback) {
        this.setState({hasRated: true})
        axios.post(`http://localhost:8080/products/${this.state.id}/rating/${rating}`)
        .then(response => {
            callback(response)
        });
    }

    createRatingForm() {
        if(!this.state.hasRated && sessionStorage.getItem("activeUserType")) {
            let ratingForm =
            <div className="rating-form">
                <label>Have you tried this product? Rate it!</label> <br></br>
                    <select required onChange={this.handleRatingChange.bind(this)}>
                        <option value="0"></option>
                        <option value="5">Very Good</option>
                        <option value="4">Good</option>
                        <option value="3">Average</option>
                        <option value="2">Bad</option>
                        <option value="1">Very Bad</option>
                    </select>
                    <button type="submit" onClick={this.handleRatingSubmit.bind(this)}>Submit Rating</button>
            </div>
            return ratingForm
        } else if(!sessionStorage.getItem("activeUserType")) {
            let loginToRate = 
                <div>
                    <h5><Link to={'/login'}>Login</Link> to add rating to this product!</h5>
                </div>
            return loginToRate
        } else {
            return (
                <div>
                    <h5>Thank you for rating!</h5>
                </div>
            )
        }
    }

    createItemPage() {
        let defaultImageLink = "https://lh3.googleusercontent.com/hmYFfk7e8FOdiMg4j6qSckZ4ThQQUKIzQGdY1jQw5a8I9kV48wmktV0QhdQUPGFKha7dp9JkZ2Y=s220"
        let ratingsArray = []

        for(let k = 0; k < this.state.ratings; k++) {
            let star = <i key={'star - '+ k} className="fas fa-star"></i>
            ratingsArray.push(star)
        }
        let item = 
            <ShoppingCartContext.Consumer key={'consumer - ' + this.state.name}>
            {({ setProductId, checkCartItemQuantity }) => (
                <React.Fragment>
                    <img className="item-image" src={this.state.imagepath ? this.state.imagepath : defaultImageLink} alt={this.state.name}></img>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.weight} </p>
                    <p className="desc">{this.state.description}</p>
                    {this.state.allergies && <p>This product contains:  + {this.state.allergies}</p>}
                    <h2>{this.state.price} €</h2>
                    <h3>{this.state.ratings ? ratingsArray : 'No ratings yet.'}</h3>
                    <div className="item-forms" key={'item-form - ' + this.state.name}>
                    {this.createRatingForm()}
                    <form className="itemAddForm">
                        <input type="number" onChange={this.handleChange} name="quantity" min={this.state.stock ? 1 : 0} max={this.state.stock} step="1" />
                        <button type="button"
                        onClick={() => {
                            if(checkCartItemQuantity(this.state.id) + this.state.value <= this.state.stock) {
                                if(this.state.value >= this.state.stock) {
                                    this.setState({value: this.state.value - 1}) 
                                }
                                if(this.state.value > 0 && this.state.value <= 30) {
                                    setProductId(this.state.name, this.state.id, this.state.value, this.state.price)
                                }
                            } else {
                                alert('We dont have that many items in stock')
                            }
                            }}>Add to cart</button>
                    </form>
                    </div>
                    <h3> {this.state.stock ? 'In stock: ' + this.state.stock : 'Out of stock.'}</h3>
                    </React.Fragment>
            )}
            </ShoppingCartContext.Consumer>
        return item
    }

    render() {
        return (
            <div className="itemPageContainer">
                {this.createItemPage()}
            </div>
        )
    }
}

export default ItemPage