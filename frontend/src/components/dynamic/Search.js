import React, { Component } from 'react'
import Body from './Body'
//import { Provider } from '../../context';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue: this.props.match.params.searchVal
    }
  }

  componentDidUpdate() {
      if(this.props.match.params.searchVal !== this.state.searchValue) {
          this.setState({
              searchValue: this.props.match.params.searchVal
          })
      }
  }

  // Display search message if user is using searchbar.
  displaySearchMessage = () => {
      if(this.props.location.pathname.includes('search')) {
        return <h1 className="result-msg">Results with {this.state.searchValue} </h1>
      }
  }

  getSearchValue = () => {
      return this.state.searchValue
  }

  render() {
    return (
      <div className="searchContent">
        {this.displaySearchMessage()}
            <Body category={this.getSearchValue()}/>
      </div>
    )
  }
}
