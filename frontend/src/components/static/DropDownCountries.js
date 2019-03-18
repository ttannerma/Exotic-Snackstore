import React, { Component } from 'react';

class DropDownCountries extends Component{
  render(){
    return(
      <select name="countries">
        <option value="" disabled selected hidden>Countries</option>
        <option value="japan">Japan</option>
        <option value="china">China</option>
        <option value="russia">Russia</option>
        <option value="usa">USA</option>
      </select>
    )
  }
}

export default DropDownCountries;