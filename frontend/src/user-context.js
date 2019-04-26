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