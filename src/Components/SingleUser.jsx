import React from "react"
import { Link } from "@reach/router"
import ArticleCard from "./ArticleCard"

export default function SingleUser(props) {
  return (
    <div>
      <h1>Author: {(props.username).toUpperCase()} </h1>
      <ArticleCard username={props.username} />

      <Link to="/articles">
        <button> Back</button>
      </Link>
    </div>
  )
}
