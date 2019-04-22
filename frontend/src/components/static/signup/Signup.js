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
            const { addNewUser } = value;
            return(
              <SignupForm addNewUser={addNewUser}/>
            )
          }}
        </Consumer>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Signup;
/*<div>
            <SignupForm addUser={addUser}/>
            <Link to="/login">Login</Link>
          </div> */