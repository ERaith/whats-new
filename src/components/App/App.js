import React, { Component } from "react";
import "./App.css";
import NewsContainer from "../NewsContainer/NewsContainer.js";
import Menu from "../Menu/Menu.js";
import SearchForm from "../SearchForm/SearchForm.js";
const NEWS_URL = "https://whats-new-api.herokuapp.com/api/v1/news";


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "local",
      articles: [],
      data: null
    };
  }

  updateState = (data) => {
    this.setState({ data: data, articles: data[this.state.category] });
  }

  filterNews = filterKey => {
    this.setState({
      category: filterKey,
      articles: this.state.data[filterKey]
    });
  };

  search = sort => {
    let updatedArticles = this.state.data[this.state.category];
    updatedArticles = updatedArticles.filter(article => {
      return article.headline.includes(sort);
    });
    this.setState({ articles: updatedArticles });
  };

  async componentDidMount() {
    let response = await fetch(NEWS_URL);
    let data = await response.json();
    this.updateState(data);
  }

  render() {
    return (
      <>
        <menu className="menu-wrapper">
          <nav>
            <Menu filterNews={this.filterNews} search={this.search} />
          </nav>
          <SearchForm search={this.search} />
        </menu>
        <section className="app">
          <NewsContainer articles={this.state.articles} />
        </section>
      </>
    );
  }
}

export default App;
