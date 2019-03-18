import React, { Component } from 'react';
import NavButton from './NavButton';

class Nav extends Component{
    render(){
        return(
            <nav>
                <NavButton name="Home"/>
                <NavButton name="Countries"/>
                <NavButton name="Categories"/>
            </nav>
        )
    }
}

export default Nav;