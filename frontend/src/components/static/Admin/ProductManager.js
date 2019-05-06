import React, { Component } from 'react'
import { Consumer } from '../../../product-context';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';

export default class ProductManager extends Component {
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
        <div className="generic-container-no-top">
          <h2>Products</h2>
          <Consumer>
            {value => {
              const { getProducts, deleteProduct } = value;
              return <ProductTable getProducts={getProducts} deleteProduct={deleteProduct}/>
            }}
          </Consumer>
          <Link to="/admin/products/add-new" className="admin-link">Add new product</Link>
          <Link to="/admin" className="admin-link">Back</Link>
        </div>
      </div>
    )
  }
}
