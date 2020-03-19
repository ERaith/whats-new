import React, { Component } from "react";
import "./NewsArticle.css";

class NewsArticle extends Component {
  render() {
    const { id, headline, description, img, url } = this.props.article;

    return (
      <article>
      <div class = 'img-container'>
        <img src={img} />
        </div>
        <h2> {headline} </h2>
        <p> {description} </p>
        <div class = 'link-container'>
        <a href={url}>Link To Article </a>
        </div>
      </article>
    );
  }
}

export default NewsArticle;
