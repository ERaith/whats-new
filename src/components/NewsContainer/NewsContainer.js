import React, { Component } from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

class NewsContainer extends Component {
  render() {
    return (
      <article>
        {this.props.articles.map(article => (
          <NewsArticle key = {article.id} article = {article} articleHeadline =  {article.headline} articleDescription =  {article.description} articleImg =  {article.img} articleUrl =  {article.url}/>
        )) }
      </article>
    )
  }
}

export default NewsContainer;
