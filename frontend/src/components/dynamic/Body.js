import React from 'react';
import Item from './Item'

const Body = (props) => {
    return (
        <div id="main" className="generic-container mb3">
        <Item category={props.category}/>
        </div>
    )
}
export default Body;