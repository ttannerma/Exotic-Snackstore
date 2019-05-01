import React, { Component } from 'react'

export default class UserTable extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    this.props.getUsers(users => {
      this.createUserTable(users);
    });
  }
  userDeleted = (code) => {
    this.getUsers();
  }
  createUserTable = (users) => {
    const usersWithoutAdmin = users.filter(user => user.name !== 'admin'); 
    const userTable = usersWithoutAdmin.map((user) =>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td><button onClick={() => {
          this.props.deleteUser(user.id, this.userDeleted)
        }}>Delete</button></td>
      </tr>
    );
    this.setState({users: userTable});
  }
  render() {
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
          {this.state.users}
        </tbody>
        </table>
      </div>
    )
  }
}
