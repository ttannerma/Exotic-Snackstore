import React from 'react';
import Item from './Item'

const Body = (props) => {
    return (
        <div id="main">
        <Item category={props.category}/>
        </div>
    )
}
export default Body;