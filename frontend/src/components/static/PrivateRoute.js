import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        sessionStorage.getItem("activeUserType") === "admin" ?  (
          <Component {...props} />
        ) : (
          sessionStorage.getItem("activeUserType") ? (
            <Redirect
            to={{
              pathname: "/notfound",
            }}
          />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
           
          )
        )
      }
    />
  );
}