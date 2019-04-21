import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer} from '../../../user-context'; 
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="generic-container">
        <Consumer>
          {value => {
            const { toggleUser } = value;
            return(
              <LoginForm toggleUser={toggleUser}/>
            )
          }}
        </Consumer>
        <Link to="/signup">Signup</Link>
        </div>
    );
  }
}

export default Login;
