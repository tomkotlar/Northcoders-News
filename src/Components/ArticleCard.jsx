import React, { Component } from "react"
import { Link } from "@reach/router"
import * as api from "../Utils/api"
import SortArticles from "./SortArticles"
 import SingleArticleView from "./SingleArticleView"
 import Err404Page from './Err404Page'

export default class ArticleCard extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order_by: "",
    err: null,
  }

  fetchArticles = () => {
    const { username, topic } = this.props
    const { sort_by, order_by} = this.state

    api
      .getArticles(topic, sort_by, order_by, username)
      .then(items => this.setState({ articles: items, isLoading: false }))
      .catch(err => {
        this.setState({err: err.response.data.msg})
      })
  }

  componentDidMount() {
    this.fetchArticles()
  }

  handleChange = event => {
    console.log('sorting' ,event.target.value)
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
    const { articles, order_by, sort_by, err } = this.state
    if (!articles.length) return "isloadning...."
    if (err) return <Err404Page err={err} />
    return (
      <div>
        <SingleArticleView article={articles[0]} />

        <SortArticles
          order_by={order_by}
          sort_by={sort_by}
          handleChange={this.handleChange}
        />

        <h1> Article Card</h1>



        {this.state.articles.map((element, i) => (
          <React.Fragment>
            <p key={element.article_id}>
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
