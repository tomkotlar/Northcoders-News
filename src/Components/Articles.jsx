import React, { Component } from "react";
import * as api from "../Utils/api";
import Nav from "./Nav";
import ArticleCard from "./ArticleCard";
import SortArticlse from "./SortArticlse";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchArticles = () => {
    const {topic, sort_by, order_by} = this.props
    console.log(this.props.topic)
    api
      .getArticles(topic, sort_by, order_by)
      .then(itmes => this.setState({ articles: itmes, isLoading: false }));
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProprs, prevState) {
    console.log(prevProprs)
    const chooseTopic = (prevProprs.topic !== this.props.topic)
    if (chooseTopic) 
    this.fetchArticles()
  }
  render() {
    const { articles, isLoading } = this.state;
    console.log(this.state.articles);
    return (
      <main>
        {isLoading ? ("loading...") : (
          <div>
            <Nav />

            <h1>Articels</h1>
            <SortArticlse updateArticles={this.componentDidUpdate}/>
            <ArticleCard articles={articles} />
          </div>
        )}
      </main>
    );
  }
}
