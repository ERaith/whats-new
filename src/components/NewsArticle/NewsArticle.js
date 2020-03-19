import React, { Component } from "react";
import "./NewsArticle.css";
import PropTypes from "prop-types";

class NewsArticle extends Component {
  render() {
    const { id, headline, description, img, url } = this.props.article;

    return (
      <article>
        <div className="img-container">
          <img src={img} />
        </div>
        <h2> {headline} </h2>
        <p> {description} </p>
        <div className="link-container">
          <a href={url}>Link To Article </a>
        </div>
      </article>
    );
  }
}

NewsArticle.propTypes = {
  article: PropTypes.shape({
    description: PropTypes.string,
    headline: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    url: PropTypes.string
  }),
  articleDescription: PropTypes.string,
  articleHeadline: PropTypes.string,
  articleImg: PropTypes.string,
  articleUrl: PropTypes.string
};

export default NewsArticle;
