import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
       username: ''
      , password: ''
      , disabled: true
      , errorMessage: ''
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
    e.preventDefault();
    const { username, password } = this.state;
    if(username && password) {
      this.props.toggleUser(this.state, this.checkTheError);
    }
  }
  checkTheError = (response) => {
    if(response.message === 'Request failed with status code 404') {
      this.setState({errorMessage: "Invalid username"});
    } else if (response.message === 'Request failed with status code 403') {
      this.setState({errorMessage: "Wrong password"});
    } else {
      this.props.setRedirect();
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
        <p>{this.state.errorMessage}</p>
      </form>
    );
  }
}

export default LoginForm;