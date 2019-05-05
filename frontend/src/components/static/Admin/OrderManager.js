import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../../product-context';
import OrderTable from './OrderTable';

export default class OrderManager extends Component {
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
          <div className="generic-container-no-top">
            <h2>Orders</h2>
            <Consumer>
              {value => {
                const { getOrders, deliverOrder, getOrderByID } = value;
                return <OrderTable getOrders={getOrders} deliverOrder={deliverOrder}
                getOrderByID={getOrderByID}/>
              }}
            </Consumer>
            <Link to="/admin" className="admin-link">Back</Link>
          </div>
      </div>
    )
  }
}
