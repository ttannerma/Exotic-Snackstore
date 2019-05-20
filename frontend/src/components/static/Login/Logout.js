import React from 'react'

const Logout = (props) => {
  sessionStorage.clear();
  props.history.push("/");
  window.location.reload(true);
  return (<h1>Logout</h1>);
}

export default Logout;
