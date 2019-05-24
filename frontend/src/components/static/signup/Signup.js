import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

import { Consumer} from '../../../user-context';

class Signup extends Component {
  render() {
    return (
      <div className="generic-container">
        <Consumer>
          {value => {
            const { addNewUser, getUsers } = value;
            return(
              <SignupForm addNewUser={addNewUser} getUsers={getUsers}/>
            )
          }}
        </Consumer>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    );
  }
}

export default Signup;
