import React, { Component } from 'react'


class OrderSuccess extends Component {

    constructor(props) {
        super(props)
        this.state = this.props.location.state
    }

    componentDidMount() {

    }
    render() {
        return (
            <React.Fragment>
            <div className="generic-container">
                <h1>We have received your order!</h1>
                <p>Thank you for shopping! Your order will be processed and sent on the next business day.</p>
            </div>
            </React.Fragment>
        )
    }
}

export default OrderSuccess