import React from 'react'
import { Consumer } from '../../../product-context';
import  AddNewForm from './AddNewForm';

export default function AddNewConsumer() {
  return (
    <Consumer>
      {value => {
        const { addNewProduct} = value;
          return <AddNewForm addNewProduct={addNewProduct}/>
        }
      }
    </Consumer>
  )
}
