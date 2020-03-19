import React, { Component } from "react";
import "./SearchForm.css";
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  updateState = event => {
    const updatedState = event.target.value;
    this.setState({ search: updatedState });
  };

  searchSubmit = () => {
    this.props.search(this.state.search)
  }

  render() {
    return (
      <div className = "search-form">
        <label htmlFor="search"></label>
        <input id="search" onChange={event => this.updateState(event)} />
        <button onClick = {event => this.searchSubmit(event)}>Search</button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.func
}

export default SearchForm;
