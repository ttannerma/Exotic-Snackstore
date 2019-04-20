import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer} from '../../../user-context'; 


class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Consumer>
          {value => {
            const { toggleUser } = value;
            return(
              <button onClick={toggleUser}>Log In</button>
            )
          }}
        </Consumer>
        <Link to="/signup">Signup</Link>
        </React.Fragment>
    );
  }
}

export default Login;
