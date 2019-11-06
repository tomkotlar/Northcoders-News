import React, { Component } from "react"
import * as api from "../Utils/api"
import { Link } from "@reach/router"
import Comments from "./Comments"
import Vote from "./Vote"
import employee from "../Img/employee.png"
import random from "../Img/random.jpg"

import { Container, Header, Image, Grid, Button, Icon} from "semantic-ui-react"

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
      <React.Fragment>
        <Container text textAlign="justified">
          <Image
            src={random}
            size="big"
            centered
            alt="https://www.freepik.com/free-photos-vectors/infographic"
          />
          <Header as="h1" textAlign="left">
            {singleArticle.title}
          </Header>
          <Header as="h5">
            <Image
              circular
              avatar
              src={employee}
              alt="avatar for women from flaticon"
              as={Link}
              to="/users/jessjelly"
            />
            {singleArticle.author}

            <Link to="/articles">
            <Icon size='large' name='arrow alternate circle left outline'  /> Back
     </Link>
     <br />

     <Icon size='tiny' name='arrow alternate circle left outline' />
          </Header>
          <p> {singleArticle.body}</p>

          <Grid centered columns={3}>
            <Grid.Row>
              <Grid.Column>
               
                <Header size='tiny' icon='newspaper' content={singleArticle.topic} as={Link} to={`/articles/topic/${singleArticle.topic}`}/>
              </Grid.Column>
              <Grid.Column>

              <Header size='tiny' icon='comments' content={singleArticle.comment_count}/>
               
              </Grid.Column>

              <Grid.Column>
              <Header size='tiny' icon='calendar outline' content= {new Date(singleArticle.created_at).toLocaleDateString()}/>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

       
        <Vote
          type="articles"
          votes={singleArticle.votes}
          id={this.props.article_id}
        />

        <pre />
        <Link to="/articles">
       
          <button> Back</button>
        </Link>
        <br />

        <button onClick={() => this.handleClick()}> {button}</button>

        {viewComments && <Comments article_id={this.props.article_id} />}
      </React.Fragment>
    )
  }
}
