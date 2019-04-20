import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm';

import { Consumer} from '../../../user-context';

class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <Consumer>
          {value => {
            const { addNewUser } = value;
            return(
              <SignupForm addNewUser={addNewUser}/>
            )
          }}
        </Consumer>
        <Link to="/login">Login</Link>
      </React.Fragment>
    );
  }
}

export default Signup;
/*<div>
            <SignupForm addUser={addUser}/>
            <Link to="/login">Login</Link>
          </div> */