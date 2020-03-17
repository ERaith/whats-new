import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <section className="app">
      <NewsContainer articles = {this.state.local}/>
      </section>
    );
  }
}

export default App;
