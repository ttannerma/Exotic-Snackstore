import React, { Component } from 'react'
import NotFound from '../../dynamic/NotFound';

export default class UserTable extends Component {
  constructor() {
    super();
    this.state = {fetchSuccess: false, users: []};
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = () => {
    this.props.getUsers(users => {
      if(users) {
        this.setState({fetchSuccess: true});
        this.createUserTable(users);
      }
    });
  }
  userDeleted = (code) => {
    this.getUsers();
  }
  createUserTable = (users) => {
    const usersWithoutAdmin = users.filter(user => user.name !== 'admin2'); 
    const userTable = usersWithoutAdmin.map((user) =>
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td><button onClick={() => {
          this.props.deleteUser(user.id, this.userDeleted)
        }}><i class="fas fa-trash-alt"></i></button></td>
      </tr>
    );
    this.setState({users: userTable});
  }
  renderTable = () => {
    return(
      <table className="admin-table">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
          {this.state.users}
        </tbody>
        </table>
    )
  }
  render() {
    if(this.state.fetchSuccess === true) {
      return <this.renderTable />
    } else {
      return <NotFound />
    }
  }
}
