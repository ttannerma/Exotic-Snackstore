import React, { Component } from 'react'
import Body from './Body'
//import { Provider } from '../../context';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchValue: this.props.match.params.searchVal
    }
    // props.location.pathname gets url path.
    // props.match.params.someId gets params from url.
  }

  componentDidUpdate() {
      if(this.props.match.params.searchVal !== this.state.searchValue) {
          this.setState({
              searchValue: this.props.match.params.searchVal
          })
      }
  }

  getSearchValue = () => {
      return this.state.searchValue
  }

  render() {
    return (
      <div>
        <h1 className="result-msg">Results with {this.state.searchValue} </h1>
            <Body category={this.getSearchValue()}/>
      </div>
    )
  }
}
