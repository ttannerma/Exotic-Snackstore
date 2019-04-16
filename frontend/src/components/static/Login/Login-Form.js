import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
  return (
    <div>
        <h1>Login</h1>
          <form onSubmit={props.onSubmit}>
            <input type="text" name="user" placeholder="User..."/>
            <input type="text" name="password" placeholder="Password..."/>
            <input type="submit" name="submit" />
          </form>
      </div>
  );
}