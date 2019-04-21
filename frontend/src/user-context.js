import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
        id: 0
        , userType: 'admin'
        , name: 'Admin'
        , email: 'admin@ess.com'
        , password: 'admin'
        }
        ,{
          id: 1
          , userType: 'user'
          , name: 'User'
          , email: 'user@ess.com'
          , password: 'user'
        }
      ]
      , activeUser: {
        id: undefined
        , userType: ''
        , name: ''
        , email: ''
        , password: ''
      }
    }
  }

  toggleUser = (newUser) => {
    try {
      
    }
    catch(error) {
      return error;
    }
    /*this.setState(() => ({
      activeUser: this.state.users[0]
    }));
    console.log(this.state.activeUser)
    */
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