import React, { Component } from "react";
import "./SearchForm.css";

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
      <React.Fragment>
        <label for="search">Search</label>
        <input id="search" onChange={event => this.updateState(event)} />
        <button onClick = {event => this.searchSubmit(event)}>Search</button>
      </React.Fragment>
    );
  }
}

export default SearchForm;
