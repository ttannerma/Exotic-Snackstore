import React, { Component } from 'react';
import NavButton from './NavButton';
import SearchBar from './SearchBar';

class Navigation extends Component{
    render(){
        return(
            <nav>
                <NavButton name="Home"/>
                <NavButton name="Countries"/>
                <NavButton name="Categories"/>
                <div className="search">
                    <SearchBar/>
                    <NavButton name="Search"/>
                </div>
            </nav>
        )
    }
}

export default Navigation;