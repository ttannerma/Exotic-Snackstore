import React, { Component } from 'react'
import { Consumer } from '../../../product-context';
import { Link } from 'react-router-dom';
import ProductTable from './ProductTable';

export default class ProductManager extends Component {
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
        <h2>Products</h2>
        <Consumer>
          {value => {
            const { getProducts, deleteProduct } = value;
            return <ProductTable getProducts={getProducts} deleteProduct={deleteProduct}/>
          }}
        </Consumer>
        <Link to="/admin">Back</Link>
      </div>

    )
  }
}
