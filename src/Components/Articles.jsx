import React from "react"
import Nav from "./Nav"
import ArticleCard from "./ArticleCard"
//  import SingleArticleView from "./SingleArticleView";

export default function Articles(props) {
  return (
    <main>
      <Nav />
      {/* <SingleArticleView articles={articles[0]} /> */}

      <h1> Title: All Articles</h1>
      <ArticleCard topic={props.topic} />
    </main>
  )
}
