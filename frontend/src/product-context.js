import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export class ProductProvider extends Component {
  getProducts = (callback) => {
    axios.get('http://localhost:8080/products')
    .then(response => {
      console.log(response);
      callback(response)
    });
  }
  getProductsWithCat = (category, callback) => {
    axios.get(`http://localhost:8080/search/${category}`)
    .then(response => {
      console.log(response.data);
      callback(response.data)
    });
  }
  deleteUser = (id, callback) => {
    axios.delete('http://localhost:8080/users/'+id)
    .then(response => {
      callback(response);
    })
  }
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
  addNewUser = (newUser, callback) => {
    axios.post('http://localhost:8080/users/signup', newUser)
    .then(response => {
      callback(response);
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        getProducts: this.getProducts
        , getProductsWithCat: this.getProductsWithCat}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

export const Consumer = ProductContext.Consumer;