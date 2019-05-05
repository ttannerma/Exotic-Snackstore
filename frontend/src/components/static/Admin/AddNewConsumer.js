import React, { Component } from 'react';
import { Consumer } from '../../../product-context';
import  AddNewForm from './AddNewForm';

export default class AddNewConsumer extends Component {
  renderRedirect = () => {
    this.props.history.push('/admin/products');
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { addNewProduct} = value;
            return <AddNewForm addNewProduct={addNewProduct} renderRedirect={this.renderRedirect}/>
          }
        }
      </Consumer>
    )
  }
}
