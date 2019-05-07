import React from 'react'

const Logout = (props) => {
  sessionStorage.removeItem("activeUserType");
  sessionStorage.removeItem("activeUser");
  props.history.push("/");
  window.location.reload(true);
  return (<h1>Logout</h1>);
}

export default Logout;
