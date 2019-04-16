import React, { Component } from 'react';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom'
import  LoginForm  from './Login-Form';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      mode: 'login'
      , user: ''
      , password: ''
    }
  }
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
  }
  render() {
    const { mode } = this.state;
    const { user, password } = this.state;
    const values = {user, password};

    return  <LoginForm values={values} 
    handleChange={this.handleChange}
    onSubmit={this.onSubmit} />
  }
}

export default Login;