import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
       username: ''
      , password: ''
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.toggleUser(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Log In</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input onChange={this.onChange} value={this.state.username} 
          type="text" name="username" className="form-control"
          required
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input onChange={this.onChange} value={this.state.password} 
          type="password" name="password" className="form-control"
          required
          />
        </div>

        <div className="form-group">
          <button className="login-button button" >Log In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;