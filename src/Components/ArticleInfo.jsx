import React, { Component } from "react";
import * as api from "../Utils/api";
import { Link } from "@reach/router";
import Comments from "./Comments";
import Vote from "./Vote";
import employee from "../Img/employee.png";
import random from "../Img/random.jpg";

import { Container, Header, Image, Grid, Icon } from "semantic-ui-react";

export default class ArticleInfo extends Component {
  state = {
    singleArticle: {},
    viewComments: false
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    //   props need be same as in router
    api
      .getArticlesById(this.props.article_id)
      .then(items => this.setState({ singleArticle: items }));
  };

  handleClick = () => {
    this.setState(currentState => {
      return { viewComments: !currentState.viewComments };
    });
  };

  render() {
    const { singleArticle, viewComments } = this.state;
    const button = viewComments ? "Hide Comments" : "Show Comments";
    return (
      <React.Fragment>
        <Container text textAlign="justified">
          <Header as="h1" textAlign="left" content={singleArticle.title} />

         
          <Header size="tiny" as={Link} to="/users/jessjelly" floated="left">
              <Image circular src={employee} />
              <Header.Content>
                {singleArticle.author}
                <Header.Subheader>
                  3 min read
                </Header.Subheader>
              </Header.Content>
            </Header>
  

          <Image
            src={random}
            fluid
          
            centered
            alt="https://www.freepik.com/free-photos-vectors/infographic"
            style={{ paddingTop: "20px" }}
          />

          <div style={{ paddingTop: "20px" }}>
            <Link to="/articles">
              <Icon
                size="large"
                name="arrow alternate circle left outline"
                color="violet"
                content="back"
              />
            </Link>
          </div>
        

          <Container fluid textAlign="left" style={{ paddingTop: "10px" }}>
            <p> {singleArticle.body}</p>
          </Container>

          <Grid centered columns={3} style={{ paddingTop: "30px" }}>
            <Grid.Row>
              <Grid.Column>
                <Header
                  size="tiny"
                  icon="newspaper"
                  content={singleArticle.topic}
                  as={Link}
                  to={`/articles/topic/${singleArticle.topic}`}
                  color="pink"
                />
              </Grid.Column>
              <Grid.Column>
                <Header
                  size="tiny"
                  icon="comments"
                  onClick={() => this.handleClick()}
                  content={singleArticle.comment_count}
                  color="pink"
                />
              </Grid.Column>

              <Grid.Column>
                <Header
                  size="tiny"
                  icon="calendar outline"
                  content={new Date(singleArticle.created_at).toLocaleDateString()}
                  color="pink"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Container style={{ paddingTop: "30px" }} >
            <Header size="tiny" as={Link} to="/users/jessjelly">
              <Image circular src={employee} />
              <Header.Content>
                {singleArticle.author}
                <Header.Subheader>
                  get excited about {singleArticle.topic}
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Container>
    
        </Container>


        <Vote
          type="articles"
          votes={singleArticle.votes}
          id={this.props.article_id}
        />

        <pre />

        <button onClick={() => this.handleClick()}> {button}</button>

        {viewComments && <Comments article_id={this.props.article_id} />}
      </React.Fragment>
    );
  }
}
