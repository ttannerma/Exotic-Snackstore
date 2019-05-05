import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer} from '../../../user-context'; 
import LoginForm from './LoginForm';

class Login extends Component {
  setRedirect = () => {
    this.props.history.push('/home');
    window.location.reload(true);
  }
  render() {
    return (
      <div className="generic-container">
        <Consumer>
          {value => {
            const { toggleUser } = value;
            return(
              <LoginForm toggleUser={toggleUser} setRedirect={this.setRedirect}/>
            )
          }}
        </Consumer>
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}

export default Login;
