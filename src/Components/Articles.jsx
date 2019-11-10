import React from "react"
import Nav from "./Nav"
import ArticleCard from "./ArticleCard"


export default function Articles(props) {
  return (
    <main>
      <Nav />
      <ArticleCard topic={props.topic} />
    </main>
  )
}
