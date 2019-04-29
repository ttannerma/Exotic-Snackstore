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
  componentDidMount() {
    
  }
  getUsers = (callback) => {
    axios.get('http://localhost:8080/users')
    .then(response => {
      let existingUsers= [];
      response.data.forEach(user => {
        existingUsers.push(user.name);
      });
      callback(existingUsers);
    });
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
      <UserContext.Provider value={{...this.state
        , toggleUser: this.toggleUser
        , addNewUser: this.addNewUser
        , getUsers: this.getUsers}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const Consumer = UserContext.Consumer;