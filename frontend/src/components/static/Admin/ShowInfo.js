import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../dynamic/NotFound';


export default class ShowInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {order: '', id: this.props.id, fetchSuccess: false}
  }
  componentDidMount() {
    this.getOrder();
  }
  getOrder = () => {
    this.props.getOrderByID(this.state.id, order => {
      if(order) {
        this.setState({fetchSuccess: true, order: order.data[0]});
        console.log(order.data[0]);
      }
    });
  }
  renderTable= () => {
    const {id, firstname, lastname, address, city, postalcode, phonenumber
      , email, comment, paymentmethod, deliverymethod, delivered, 
      products, totalprice} = this.state.order;
    return(
      <div>
        <h2>Customer Info</h2>
        <div className="generic-container-no-top">
          <h3>ID: {id}</h3>
          <h3>Firstname: {firstname}</h3>
          <h3>Lastname: {lastname}</h3>
          <h3>Address: {address}</h3>
          <h3>City: {city}</h3>
          <h3>Postal Code: {postalcode}</h3>
          <h3>Phone: {phonenumber}</h3>
          <h3>Email: {email}</h3>
        </div>
        <div>
          <h2>Products</h2>
          <div className="generic-container-no-top">
            <h3>Delivered: {delivered.data[0]}</h3>
            <h3>Payment Method: {paymentmethod}</h3>
            <h3>Delivery Method: {deliverymethod}</h3>
            <h3>Comment: {comment}</h3>
          </div>
        </div>
      </div>
    );
  }
  render() {
    if(this.state.fetchSuccess === true) {
      return <this.renderTable />
    } else {
      return <NotFound/>
    }
  }
}