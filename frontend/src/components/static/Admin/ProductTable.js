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
    console.log(result);
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
    console.log(products);
    const productsTable = products.map((product) =>
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.weight}</td>
        <td>{product.stock}</td>
        <td>{product.category}</td>
        <td>{product.country}</td>
        <td>{this.somethingOrNull(product.allergies)}</td>
        <td>{this.somethingOrNull(product.ratings)}</td>
        <td><button onClick={() => {
          this.props.deleteProduct(product.id, this.productDeleted)
        }}>Delete</button></td>
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
          <th>Weight</th>
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
