import React, { Component } from "react";
import * as api from "../Utils/api";
import {Link} from "@reach/router"


export default class ArticleInfo extends Component {
  state = {
    singleArticle: {}
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    //   props need be same as in router
    api
      .getArticlesById(this.props.article_id)
      .then(items => this.setState({ singleArticle: items }));
  };

  render() {
    const { singleArticle } = this.state;
    return (
      <main>
        <h1>Single Article</h1>
        <h2>{singleArticle.title}</h2>

        <p>  {singleArticle.author} </p>
        <p> {singleArticle.body}</p>
        <p> {singleArticle.comment_count}</p>
        <p> {new Date(singleArticle.created_at).toDateString()}</p>
        <p> {singleArticle.topic} </p>
        <p>{singleArticle.votes}</p>
       <Link to='/articles'> <button> Back</button></Link>
      </main>
    );
  }
}
