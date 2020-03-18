import React, { Component } from "react";
import local from "../../data/local";
import health from "../../data/health";
import entertainment from "../../data/entertainment";
import science from "../../data/science";
import technology from "../../data/technology";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer.js";
import Menu from "../Menu/Menu.js";
import SearchForm from "../SearchForm/SearchForm.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      health,
      entertainment,
      science,
      technology,
      active: "local"
    };
  }
  filterNews = filterKey => {
    this.setState({ active: filterKey });
  };

  render() {
    return (
      <>
        <nav class = "nav-wrapper">
          <Menu filterNews={this.filterNews} />
        </nav>
        <SearchForm/>
        <section className="app">
          <NewsContainer articles={this.state[this.state.active]} />{" "}
        </section>
      </>
    );
  }
}

export default App;
