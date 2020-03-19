import React, { Component } from "react";
import local from "../../data/local";
import health from "../../data/health";
import entertainment from "../../data/entertainment";
import science from "../../data/science";
import technology from "../../data/technology";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer.js";
import Menu from "../Menu/Menu.js";
import SearchForm from "../SearchForm/SearchForm.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      health,
      entertainment,
      science,
      technology,
      active: "local",
      data: local
    };
  }
  filterNews = filterKey => {
    this.setState({ active: filterKey, data:this.state[filterKey] });
  };

  search = (sort) => {
    console.log(sort)
    let updatedArticles = this.state[this.state.active];
    updatedArticles = updatedArticles.filter(article => {
      return article.headline.includes(sort)
    })
    this.setState({data:updatedArticles})

  }

  render() {
    return (
      <>
        <nav class = "nav-wrapper">
          <SearchForm search = {this.search}/>
          <Menu filterNews={this.filterNews} search = {this.search}/>
        </nav>
        <section className="app">
          <NewsContainer articles={this.state.data} />{" "}
        </section>
      </>
    );
  }
}

export default App;
