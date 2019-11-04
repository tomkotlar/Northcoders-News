import React, { Component } from "react"
import * as api from "../Utils/api"
import { Link } from "@reach/router"
import Comments from "./Comments"
import Vote from "./Vote"

import { Container, Header } from "semantic-ui-react"

export default class ArticleInfo extends Component {
  state = {
    singleArticle: {},
    viewComments: false
  }

  componentDidMount() {
    this.fetchArticleById()
  }

  fetchArticleById = () => {
    //   props need be same as in router
    api
      .getArticlesById(this.props.article_id)
      .then(items => this.setState({ singleArticle: items }))
  }

  handleClick = () => {
    this.setState(currentState => {
      return { viewComments: !currentState.viewComments }
    })
  }

  render() {
    const { singleArticle, viewComments } = this.state
    const button = viewComments ? "Hide Comments" : "Show Comments"
    return (
      <main>
        <Container text textAlign="justified">
          <h1>Single Article</h1>
          <Header as='h1'>{singleArticle.title}</Header>
         

          <p> {singleArticle.author} </p>
          <p> {singleArticle.body}</p>
          <p> {singleArticle.comment_count}</p>
          <p> {new Date(singleArticle.created_at).toDateString()}</p>
          <p> {singleArticle.topic} </p>

          {/* <p>{singleArticle.votes}</p> */}
          <Vote
            type="articles"
            votes={singleArticle.votes}
            id={this.props.article_id}
          />

          <pre />
          <Link to="/articles">
            {" "}
            <button> Back</button>
          </Link>
          <br />

          <button onClick={() => this.handleClick()}> {button}</button>

          {viewComments && <Comments article_id={this.props.article_id} />}
        </Container>
      </main>
    )
  }
}
