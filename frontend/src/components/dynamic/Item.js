import React, { Component } from 'react';
import { Consumer } from '../../product-context';
import Items from './Items';

// Creates item elements into array and returns it
const Item = (props) => {
    return (
        <Consumer>
            {value => {
                const { getProducts, getProductsWithCat } = value;
                return <Items
                category={props.category} 
                getProducts={getProducts} 
                getProductsWithCat={getProductsWithCat}/>
            }}
        </Consumer>
    )
}

export default Item;