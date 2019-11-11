import React, { Component } from "react";
import * as api from "../Utils/api";

import Err404Page from "../Components/Err404Page";
import Nav from "./Nav";

import ArticleInfoView from "./ArticleInfoView";



export default class ArticleInfo extends Component {
  state = {
    singleArticle: {},
    viewComments: false,
    err: null
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    api
      .getArticlesById(this.props.article_id)
      .then(items => {
        if (items.article_id) {
          this.setState({ singleArticle: items });
        } else {
          this.setState({ err: "article not found" });
        }
      })
      .catch(err => this.setState({ err }));
  };

  handleClick = () => {
    this.setState(currentState => {
      return { viewComments: !currentState.viewComments };
    });
  };

  render() {
    const { singleArticle, viewComments, err} = this.state;
    if (err) return <Err404Page />;
  
    return (
      <React.Fragment>
        <Nav />
        <ArticleInfoView
          singleArticle={singleArticle}
          viewComments={viewComments}
          handleClick={this.handleClick}
          err={err}
        />


      </React.Fragment>
    );
  }
}
