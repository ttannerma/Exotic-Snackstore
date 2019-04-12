import React, { Component } from 'react'

class ItemPage extends Component {
    constructor(props) {
        super(props)
        this.state = props.location.state
        console.log(this.state)
    }

    createItemPage() {
        let item = 
        <div className="item">
            <img className="item-image" src="../../assets/download.jpg" alt="Candy"></img>
            <h3>Ratings: {this.state.ratings ? this.state.ratings : 'No ratings yet.'}</h3>
            <h2>{this.state.name}</h2>
            <p>{this.state.description}</p>
            <h1>{this.state.price}</h1>
        </div>


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