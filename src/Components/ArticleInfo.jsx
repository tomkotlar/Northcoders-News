import React, { Component } from "react";
import * as api from "../Utils/api";
import {Link} from "@reach/router"
import Comments from "./Comments";


export default class ArticleInfo extends Component {
  state = {
    singleArticle: {},
    viewComments: false, 
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

  handleClick = () => {
    this.setState(currentState => {
      return { viewComments: !currentState.viewComments}
    })
  }


  render() {
    const { singleArticle, viewComments } = this.state;
    const button = viewComments ? "Hide Comments" : 'Show Comments'
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
       <br/>
       
       <button  onClick={() => this.handleClick()}> {button}</button>
      

      {viewComments &&
        <Comments  article_id={this.props.article_id}/>
      }

      </main>
    );
  }
}
