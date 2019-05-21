import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
      <div className="generic-container wh-bg">
        <h1 className="align-text">Admin</h1>
        <div className="admin-tools generic-container-no-top">
          <Link to="/admin/users" className="adminLink">
            <div className="tool">
              <i className="fas fa-users block"></i>
              Users
            </div>
          </Link>
          <Link to="/admin/products" className="adminLink">
            <div className="tool">
              <i className="fas fa-store block"></i>
              Products
            </div>
          </Link>
          <Link to="/admin/orders" className="adminLink">
            <div className="tool">
              <i className="fas fa-boxes block"></i>
              Orders
            </div>
          </Link>
        </div>
      </div>
    )
  }
}
