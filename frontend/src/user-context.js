import React, { Component } from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
        id: 0
        , userType: 'Admin'
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
          userType: ''
        , name: ''
        , email: ''
        , password: ''
      }
    }
  }

  toggleUser = () => {
    console.log('Logged In');
    let newUser = this.state.users[0]
    this.setState(() => ({
      activeUser: newUser
    }));
    console.log(this.state.activeUser)
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