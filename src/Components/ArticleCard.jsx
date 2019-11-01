import React, { Component } from "react"
import { Link } from "@reach/router"
import * as api from "../Utils/api"
import SortArticles from "./SortArticles"
// import SingleArticleView from "./SingleArticleView"

export default class ArticleCard extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order_by: ""
  }

  fetchArticles = () => {
    const { username, topic } = this.props
    const { sort_by, order_by } = this.state

    api
      .getArticles(topic, sort_by, order_by, username)
      .then(items => this.setState({ articles: items, isLoading: false }))
  }

  componentDidMount() {
    this.fetchArticles()
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  componentDidUpdate(prevProprs, prevState) {
    // console.log(prevState)
    const chooseTopic = prevProprs.topic !== this.props.topic
    const chooseOrder = prevState.order_by !== this.state.order_by
    const chooseSort = prevState.sort_by !== this.state.sort_by
    if (chooseTopic || chooseOrder || chooseSort) this.fetchArticles()
  }

  render() {
    const { articles, isLoading, order_by, sort_by } = this.state
    if (!articles.length) return "isloadning...."
    return (
      <div>
        {/* <SingleArticleView article={articles[0]} /> */}

        <SortArticles
          order_by={order_by}
          sort_by={sort_by}
          handleChange={this.handleChange}
        />

        <h1> Article Card</h1>
        {this.state.articles.map((element, i) => (
          <React.Fragment>
            <p key={element.author}>
              <Link to={`/articles/${element.article_id}`}>
                <b> id: {element.article_id} </b>
                <i>title: {element.title} </i>

                <b> comments:{element.comment_count} </b>
              </Link>
            </p>

            <Link to={`/users/${element.author}`}>
              <p key={element.article_id}>
                <i>author: {element.author} </i>
              </p>
            </Link>
          </React.Fragment>
        ))}
      </div>
    )
  }
}
