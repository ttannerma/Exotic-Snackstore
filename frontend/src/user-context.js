import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userType: ''
      , name: ''
      , email: ''
      , password: ''
      }
    }
  }

  toggleUser = (newUser) => {
    this.setState(() => ({
      user: newUser
    }));
  }

  render() {
    return (
      <UserContext.Provider value={{...this.state, toggleUser: this.toggleUser}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export const Consumer = UserContext.Consumer;