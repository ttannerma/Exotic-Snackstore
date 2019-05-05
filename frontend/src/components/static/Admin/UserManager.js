import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../../user-context';
import UserTable from './UserTable';

export default class UserManager extends Component {
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
        <h2>Users</h2>
        <Consumer>
          {value => {
            const { getUsers, deleteUser } = value;
            return <UserTable getUsers={getUsers} deleteUser={deleteUser}/>
          }}
        </Consumer>
        <Link to="/admin">Back</Link>
      </div>
    )
  }
}
