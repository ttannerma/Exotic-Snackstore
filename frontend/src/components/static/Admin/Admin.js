import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
        <div className="admin-tools">
          <div className="tool">
            <i className="fas fa-users block"></i>
            <Link to="/admin/users" className="adminLink">Users</Link>
          </div>
          <div className="tool">
            <i className="fas fa-store block"></i>
            <Link to="/admin/products" className="adminLink">Products</Link>
          </div>
        </div>
      </div>
    )
  }
}
