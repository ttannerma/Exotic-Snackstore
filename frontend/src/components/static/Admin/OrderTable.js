import React, { Component } from 'react';
import NotFound from '../../dynamic/NotFound';
import { Link } from 'react-router-dom';

export default class OrderTable extends Component {
  constructor() {
    super();
    this.state = {fetchSuccess: false, orders: [], orderTable: []};
  }
  componentDidMount() {
    this.getOrders();
  }
  getOrders = () => {
    this.props.getOrders(orders => {
      if(orders) {
        this.setState({fetchSuccess: true, orders});
        console.log(orders);
        this.createOrderTable(orders);
      }
    });
  }
  isDelivered = (item) => {
    return item === 0 ?  'Undelivered' :  'Delivered';
  }
  orderDelivered = () => {
    this.getOrders();
  }
  createOrderTable = (orders) => {
    const orderTable = orders.map((order) =>
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.lastname}</td>
        <td>{this.isDelivered(order.delivered.data[0])}</td>
        <td className="fitwidth">
          <Link to={"/admin/orders/"+order.id} className="link-as-button">Show Info</Link>
        </td>
        <td><button onClick={() => {
          this.props.deliverOrder(order.id, this.orderDelivered)
        }}>Deliver</button></td>
      </tr>
    );
    this.setState({orderTable});
  }
  renderTable = () => {
    return(
      <table className="admin-table">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Lastname</th>
            <th>Delivered</th>
            <th>Show Info</th>
            <th>Set to Delivered</th>         
          </tr>
          {this.state.orderTable}
        </tbody>
      </table>
    )
  }
  render() {
    if(this.state.fetchSuccess === true) {
      return <this.renderTable />
    } else {
      return <NotFound/>
    }
  }
}
