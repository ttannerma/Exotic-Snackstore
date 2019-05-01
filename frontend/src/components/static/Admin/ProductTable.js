import React, { Component } from 'react'

export default class ProductTable extends Component {
  constructor() {
    super();
    this.state = {products: []};
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = () => {
    this.props.getProducts(products => {
      this.createProductTable(products.data);
    });
  }
  ProductDeleted = (code) => {
    this.getProducts();
  }
  ratingsOrNull = (ratings) => {
    if(ratings) {
      return ratings;
    } else {
      return 'No ratings yet!';
    }
  }
  allergiesOrNull(allergies) {
    if(allergies) {
      return allergies;
    } else {
      return 'No allergies';
    }
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
        <td>{this.allergiesOrNull(product.allergies)}</td>
        <td>{this.ratingsOrNull(product.ratings)}</td>
        <td><button onClick={() => {
          this.props.deleteProduct(product.id, this.productDeleted)
        }}>Delete</button></td>
      </tr>
    );
    this.setState({products: productsTable});
  }
  render() {
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Country</th>
            <th>Ratings</th>
            <th>Action</th>            
          </tr>
          {this.state.products}
        </tbody>
        </table>
      </div>
    )
  }
}
