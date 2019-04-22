import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'user'
      , username: ''
      , email: ''
      , password: ''
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.addNewUser(this.state));
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input onChange={this.onChange} value={this.state.username} 
          type="text" name="username" className="form-control"
          required
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
          required
          />
        </div>

        <div className="form-group">
          <button className="signup-button button" >Sign up</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;