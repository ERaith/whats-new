import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super()
      this.state = {
        title:''
      }
  }
  updateState = (event) => {

  }
  render() {
    return (
      <React.Fragment>
      <label for = "search">Search</label>
      <input id = "search"/>
      </React.Fragment>
    )
  }
}

export default SearchForm;
