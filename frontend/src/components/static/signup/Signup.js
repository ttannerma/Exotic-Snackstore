import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';
import Login from '../login/Login';

class Signup extends Component {
  render() {
    return (
      <div>
        <SignupForm/>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Signup;