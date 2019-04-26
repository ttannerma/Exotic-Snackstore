import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
       username: ''
      , password: ''
      , disabled: true
      , loginError: ''
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    if(this.state.username !== '' &&
       this.state.password !== '') {
         this.setState({disabled: false});
       }
  }
  onSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();
    if(username && password) {
      const loginError = this.props.toggleUser(this.state);
      console.log(loginError)
      if(loginError) {
        this.setState({loginError});
      }
    }
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
          <button className="login-button button" disabled={this.state.disabled}>Log In</button>
        </div>
        <p value={this.state.loginError}></p>
      </form>
    );
  }
}

export default LoginForm;