import React, { Component } from 'react'

export default class AddNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allergies: ''
      , category: ''
      , country: ''
      , decription: ''
      , name: ''
      , price: 0
      , weight: 0
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    const product = this.state
    this.sendProduct(product);
  }
  sendProduct(user) {
    this.props.addNewProduct(user, response => {
      console.log(response);
      //this.props.history.push('/login');
    })
  }
  render() {
    return (
      <div className="new-product-form">
        <h1>Form</h1>
        <form onSubmit={this.onSubmit}>
        <h1>Sign Up</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input onChange={this.onChange} value={this.state.username} 
          type="text" name="username" className="form-control"
          required minLength="4"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input onChange={this.onChange} value={this.state.email} 
          type="email" name="email" className="form-control"
          required
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input onChange={this.onChange} value={this.state.password} 
          type="password" name="password" className="form-control"
          required minLength="4"
          />
        </div>

        <div className="form-group">
          <button className="signup-button button" >Sign up</button>
        </div>
      </form>
      </div>
    )
  }
}
