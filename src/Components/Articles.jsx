import React, { Component } from "react";
import * as api from '../Utils/api'
import Nav from "./Nav";
import Article from "./Article";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: false
  }

  fetchArticles = () => {
    api.getArticles().then(itmes => (
      this.setState({articles: itmes, isLoading: true})
    ))
  }

  componentDidMount() {
    this.fetchArticles()
  }
  render() {
    
     const {articles} = this.state
    console.log(this.state.articles)
    return (
      <main>
        <Nav/>
          <h1>Articels</h1>

       
         <Article articles={articles}/>
         
            <hr/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          distinctio, minima molestiae, reiciendis atque, ex id maxime ea
          explicabo voluptatum unde expedita possimus inventore modi temporibus
          repellendus autem cupiditate quisquam?
          article_id: 28
author: "happyamy2016"
body: "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking."
comment_count: "12"
created_at: "2018-05-27T03:32:28.514Z"
title: "High Altitude Cooking"
topic: "cooking"
votes: 0

this.state.student.blockHistory[this.state.student.blockHistory.length - 1 ].name

        </p>
      </main>
    );
  }
}
