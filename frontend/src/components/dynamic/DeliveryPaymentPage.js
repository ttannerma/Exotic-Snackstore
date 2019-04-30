import React, { Component } from 'react'

class DeliveryPaymentPage extends Component {

    constructor(props) {
        super(props)
        console.log('deliverypayment props: ', props)
    }

    createPageContent() {
        console.log(this.props)
        return <h1>DeliveryPaymentPage:</h1>
    }

    render() {
        return (
            this.createPageContent()
        )
    }
}

export default DeliveryPaymentPage