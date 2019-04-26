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
  toggleUser = (newUser) => {
    axios.post('http://localhost:8080/users', newUser)
    .then(function (response) {
      this.setUser(response);
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  }
  setUser = (newUser) => { 
    this.setState({activeUser: newUser});
  }
  checkAttribute = (newUser, attribute) => {
    // FIx the attribute-variable!!
    this.state.users.forEach(user => {
      if(user.attribute === newUser.attribute) {
        return user;
      } else {
        throw new Error ('User not found.');
      }
    });
  }
  addNewUser = (newUser) => {
    this.state.users.push(newUser);
    return this.state.users;
  }

  render() {
    return (
      <UserContext.Provider value={{...this.state, toggleUser: this.toggleUser, addNewUser: this.addNewUser}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const Consumer = UserContext.Consumer;