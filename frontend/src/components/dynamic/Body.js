import React, { Component } from 'react';
import Item from './Item'

const Body = (props) => {
    console.log('body props: ', props)
    return (
        <div id="main">
        <Item category={props.category}/>
        </div>
    )
}
export default Body;