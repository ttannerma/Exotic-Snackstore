import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../../product-context';
import ShowInfo from './ShowInfo';

export default class ShowInfoManager extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="generic-container">
        <h1>Admin</h1>
          <div className="generic-container-no-top">
            <h2>Order {id}</h2>
            <Consumer>
              {value => {
                const { getOrderByID } = value;
                return <ShowInfo id={id} getOrderByID={getOrderByID}/>
              }}
            </Consumer>
            <Link to="/admin" className="admin-link">Back</Link>
          </div>
      </div>
    )
  }
}
