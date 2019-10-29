import React, { Component } from "react";
import * as api from "../Utils/api";
import Nav from "./Nav";
import ArticleCard from "./ArticleCard";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchArticles = () => {
    const {topic} = this.props
    api
      .getArticles(topic)
      .then(itmes => this.setState({ articles: itmes, isLoading: false }));
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProprs, prevState) {
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
            <ArticleCard articles={articles} />
          </div>
        )}
      </main>
    );
  }
}
