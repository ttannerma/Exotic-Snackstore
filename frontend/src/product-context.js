import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  getProducts = (callback) => {
    console.log('callback: '+callback);
    axios.get('http://localhost:8080/products')
    .then(response => {
      console.log(response.data);
      callback(response.data)
    });
  }
  getProductsWithCat = (category, callback) => {
    axios.get(`http://localhost:8080/search/${category}`)
    .then(response => {
      console.log(response.data);
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
  /*
  toggleUser = (newUser) => {
    axios.post('http://localhost:8080/users/login', newUser)
    .then(response => {
      console.log(response);
      this.setState({activeUser: response.data});
      console.log(this.state.activeUser);
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  }
  */
  render() {
    return (
      <ProductContext.Provider value={{
        getProducts: this.getProducts
        , getProductsWithCat: this.getProductsWithCat
        , addNewProduct: this.addNewProduct
        , deleteProduct: this.deleteProduct}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

export const Consumer = ProductContext.Consumer;