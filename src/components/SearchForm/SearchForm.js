import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
      this.state = {
        search:''
      }
  }
  updateState = (event) => {
    console.log(event.target.value)
    const updatedState = event.target.value;
    this.setState({search:updatedState})
  }
  render() {
    return (
      <React.Fragment>
      <label for = "search">Search</label>
      <input id = "search" onChange = {event => this.updateState(event)}/>
      </React.Fragment>
    )
  }
}

export default SearchForm;
