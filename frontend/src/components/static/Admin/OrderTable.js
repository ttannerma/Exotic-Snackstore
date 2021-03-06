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
        <td className="capitalize">{order.lastname}</td>
        <td>{this.isDelivered(order.delivered.data[0])}</td>
        <td className="fitwidth">
          <Link to={"/admin/orders/"+order.id} className="link-as-button"><i className="fas fa-info-circle"></i></Link>
        </td>
        <td><button onClick={() => {
          this.props.deliverOrder(order.id, this.orderDelivered)
        }} className="admin-button"><i className="fas fa-truck"></i></button></td>
      </tr>
    );
    this.setState({orderTable});
  }
  renderTable = () => {
    return(
      <div className="table-overflow">
        <table className="admin-table wh-bg">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Lastname</th>
              <th>Delivered</th>
              <th className="fitwidth">Show Info</th>
              <th className="fitwidth">Set to Delivered</th>         
            </tr>
            {this.state.orderTable}
          </tbody>
        </table>
      </div>
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
