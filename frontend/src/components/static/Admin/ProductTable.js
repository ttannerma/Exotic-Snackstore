import React, { Component } from 'react'
import NotFound from '../../dynamic/NotFound';

export default class ProductTable extends Component {
  constructor() {
    super();
    this.state = {fetchSuccesful: false, products: []};
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    this.props.getProducts((products) => {
      if(products) {
        this.setState({fetchSuccesful: true});
        this.createProductTable(products);
      } 
    });
  }
  productDeleted = (result) => {
    this.getProducts();
  }
  ratingsOrNull = (ratings) => {
    if(ratings) {
      return ratings;
    } else {
      return 'No ratings yet!';
    }
  }
  somethingOrNull(something) {
    return something ? something : 'None';  
  }
  createProductTable = (products) => {
    const productsTable = products.map((product) =>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td className="capitalize">{product.name}</td>
        <td>{product.price}</td>
        <td>{product.weight}</td>
        <td>{product.stock}</td>
        <td className="capitalize">{product.category}</td>
        <td className="capitalize">{product.country}</td>
        <td className="capitalize">{this.somethingOrNull(product.allergies)}</td>
        <td className="capitalize">{this.somethingOrNull(product.ratings)}</td>
        <td><button onClick={() => {
          this.props.deleteProduct(product.id, this.productDeleted)
        }}><i className="fas fa-trash-alt"></i></button></td>
      </tr>
    );
    this.setState({products: productsTable});
  }
  renderTable = () => {
    return (
    <table className="admin-table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Country</th>
          <th>Allergies</th>
          <th>Ratings</th>
          <th>Action</th>            
        </tr>
        {this.state.products}
      </tbody>
    </table>
    )
  }
  render() {
    if(this.state.fetchSuccesful) {
      return <this.renderTable />
    } else {
      return <NotFound />
    }
  }
}
