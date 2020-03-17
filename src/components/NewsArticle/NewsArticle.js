import React, { Component } from 'react';
import './NewsArticle.css';

class NewsArticle extends Component {
  render() {

    const {id,headline,description,img,url} = this.props.article;

    return(
      <React.Fragment>
        <img src = { img } />
        <h2> { headline } </h2>
        <p> { description } </p>
        <a href = { url }>Link To Article </a>
      </React.Fragment>
    )

  }
}

export default NewsArticle;
