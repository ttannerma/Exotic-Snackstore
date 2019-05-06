import React, { Component } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      activeUser: {}
    }
  }
  getUsers = (callback) => {
    axios.get('http://localhost:8080/users')
    .then(response => {
      let existingUsers= [];
      response.data.forEach(user => {
        existingUsers.push({id: user.id, name: user.name});
      });
      callback(existingUsers);
    });
  }
  deleteUser = (id, callback) => {
    axios.delete('http://localhost:8080/users/'+id)
    .then(response => {
      callback(response);
    })
  }
  toggleUser = (newUser, callback) => {
    axios.post('http://localhost:8080/users/login', newUser)
    .then(response => {
      sessionStorage.setItem("activeUser", response.data.username);
      sessionStorage.setItem("activeUserType", response.data.userType);
      console.log(response.data.userType);
      callback('success');
    })
    .catch((error) => {
      callback(error);
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
      <UserContext.Provider value={{...this.state
        , toggleUser: this.toggleUser
        , addNewUser: this.addNewUser
        , getUsers: this.getUsers
        , deleteUser: this.deleteUser}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const Consumer = UserContext.Consumer;