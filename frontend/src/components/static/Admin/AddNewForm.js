import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AddNewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allergies: ''
      , category: 'salty'
      , country: 'japan'
      , description: ''
      , name: ''
      , price: 0
      , weight: '0g/ml'
      , stock: 0
      , image: ''
      , ratings_count: 0
      , ratings_totalsum: 0
      , ratings: 0
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = (e) => {
    e.preventDefault();
    const product = this.state;
    this.props.addNewProduct(product, response => {
      console.log(response);
      this.props.renderRedirect();
    })
  }
  render() {
    return (
      <div className="generic-container">
        <h1>Admin</h1>
        <form className="new-product-form" onSubmit={this.onSubmit}>
        <h2>Add new Product</h2>

        <div className="form-group">
          <label className="control-label">Name</label>
          <input onChange={this.onChange} value={this.state.name} 
          type="text" pattern="/^[a-z ,.'-]+$/i" name="name" className="form-control"
          required minLength="4"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Price</label>
          <input onChange={this.onChange} value={this.state.price} 
          type="number" name="price" className="form-control"
          required min="0.01" step="0.01"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Quantity</label>
          <input onChange={this.onChange} value={this.state.weight} 
          type="text" name="weight" className="form-control"
          required min="0"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Stock</label>
          <input onChange={this.onChange} value={this.state.stock} 
          type="number" name="stock" className="form-control"
          required min="0" max="9999"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Category</label>
          <select value={this.state.category} onChange={this.onChange}
            name="category" className="form-control" required>
            <option value="salty">Salty</option>
            <option value="sweet">Sweet</option>
            <option value="drinks">Drinks</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="control-label">Country</label>
          <select value={this.state.country} onChange={this.onChange}
            name="country" className="form-control" required>
            <option value="japan">Japan</option>
            <option value="china">China</option>
            <option value="usa">USA</option>
            <option value="russia">Russia</option>
          </select>
        </div>

        <div className="form-group">
          <label className="control-label">Description</label>
          <input onChange={this.onChange} value={this.state.description} 
          type="text" name="description" className="form-control"
          required/>
        </div>

        <div className="form-group">
          <label className="control-label">Allergies</label>
          <input onChange={this.onChange} value={this.state.allergies} 
          type="text" name="allergies" className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Image-Link</label>
          <input onChange={this.onChange} value={this.state.image} 
          type="url" name="image" className="form-control"
          required/>
        </div>

        <div className="form-group">
        <input type="submit" value="Add" className="submit-button"/>
        </div>
      </form>
      <Link to="/admin/products" className="admin-link">Back</Link>
      </div>
    )
  }
}
