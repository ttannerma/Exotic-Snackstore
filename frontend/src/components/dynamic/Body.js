import React, { Component } from 'react';
import Item from './Item'
import { Provider, Consumer } from '../../context';

const Body = () => {
    return (
        <Consumer>
            {context => {
                console.log('Context in Body', context.searchValue)
                return (
                    <p>{context.searchValue}</p>
                )
            }}
        </Consumer>
    )
}
export default Body;