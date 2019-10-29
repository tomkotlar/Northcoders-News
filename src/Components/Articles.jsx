import React, { Component } from "react";
import * as api from "../Utils/api";
import Nav from "./Nav";
import ArticleCard from "./ArticleCard";
import SortArticlse from "./SortArticlse";


export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: 'created_at',
    order_by: '',
  };
  
  fetchArticles = () => {
    const {topic} = this.props
    const {sort_by, order_by} = this.state
    console.log(this.props.topic)
    api
      .getArticles(topic, sort_by, order_by)
      .then(itmes => this.setState({ articles: itmes, isLoading: false }));
  };
  componentDidMount() {
    this.fetchArticles();
  }

      handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    
      }

  
  componentDidUpdate(prevProprs, prevState) {
    console.log(prevProprs)
    const chooseTopic = (prevProprs.topic !== this.props.topic)
    const chooseOrder = (prevState.order_by !== this.state.order_by)
    const chooseSort = (prevState.sort_by !== this.state.sort_by)
    if (chooseTopic || chooseOrder || chooseSort) 
    this.fetchArticles()
  }

  
  render() {
    const { articles, isLoading, order_by, sort_by } = this.state;
    console.log(this.state.articles);
    return (
      <main>
        {isLoading ? ("loading...") : (
          <div>
            <Nav />

            <h1>Articels</h1>
            <SortArticlse   order_by={order_by} sort_by={sort_by} handleChange={this.handleChange}/>
            <ArticleCard articles={articles} />
          </div>
        )}
      </main>
    );
  }
}
