import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  getProducts = (callback) => {
    axios.get('http://localhost:8080/products')
    .then(response => {
      callback(response.data)
    });
  }
  getProductsWithCat = (category, callback) => {
    axios.get(`http://localhost:8080/search/${category}`)
    .then(response => {
      callback(response.data)
    });
  }
  addNewProduct = (product, callback) => {
    axios.post('http://localhost:8080/products/', product)
    .then(response => {
      callback(response);
    });
  }
  deleteProduct = (id, callback) => {
    axios.delete('http://localhost:8080/products/'+id)
    .then(response => {
      callback(response);
    })
  }
  getOrders = (callback) => {
    axios.get('http://localhost:8080/orders')
    .then(response => {
      callback(response.data)
    });
  }
  getOrderByID = (id, callback) => {
    axios.get('http://localhost:8080/orders/'+id)
    .then(response => {
      callback(response);
    });
  }
  deliverOrder = (id, callback) => {
    axios.post('http://localhost:8080/orders/'+id)
    .then(response => {
      callback(response);
    })
  }
  render() {
    return (
      <ProductContext.Provider value={{
        getProducts: this.getProducts
        , getProductsWithCat: this.getProductsWithCat
        , addNewProduct: this.addNewProduct
        , deleteProduct: this.deleteProduct
        , getOrders: this.getOrders
        , deliverOrder: this.deliverOrder
        , getOrderByID: this.getOrderByID}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

export const Consumer = ProductContext.Consumer;