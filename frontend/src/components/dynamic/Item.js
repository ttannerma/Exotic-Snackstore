import React, { Component } from 'react';
import Items from './Items';

// Creates item elements into array and returns it
const Item = (props) => {
    console.log('Item props: ', props.category)
    return (
        <Items category={props.category} />
    )
}

export default Item;