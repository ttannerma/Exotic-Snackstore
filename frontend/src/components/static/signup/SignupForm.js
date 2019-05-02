import React, { Component } from 'react';
import { withRouter } from "react-router";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userType: 'user'
      , username: ''
      , email: ''
      , password: ''
      , existingUsers: []
    }
  }
  componentDidMount() {
    this.props.getUsers(existingUsers => {
      this.setState({existingUsers});
    });
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(e.target.name === 'username') {
      if(!this.checkInputValue(e.target.value)) {
        console.log('Username is already taken.');
      }
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const user = {username, email, password};
    this.sendUser(user);
  }
  sendUser = (user) => {
    this.props.addNewUser(user, response => {
      console.log(response);
      this.props.history.push('/login');
    })
  }
  checkInputValue = (input) => {
    let isValid = true;
    this.state.existingUsers.forEach(name => {
      if(input === name) {
        isValid = false;
      }
    });
    return isValid;
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input onChange={this.onChange} value={this.state.username} 
          type="text" name="username" className="form-control"
          required minLength="4"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input onChange={this.onChange} value={this.state.email} 
          type="email" name="email" className="form-control"
          required
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input onChange={this.onChange} value={this.state.password} 
          type="password" name="password" className="form-control"
          required minLength="4"
          />
        </div>

        <div className="form-group">
          <button className="signup-button button" >Sign up</button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);