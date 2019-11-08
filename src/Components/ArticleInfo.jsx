import React, { Component } from "react";
import * as api from "../Utils/api";
import { Link } from "@reach/router";
import Comments from "./Comments";
import Vote from "./Vote";
import man from "../Img/man.png";
import random from "../Img/random.jpg";
import Err404Page from '../Components/Err404Page'
import { Container, Header, Image, Grid, Icon, Button, } from "semantic-ui-react";

export default class ArticleInfo extends Component {
  state = {
    singleArticle: {},
    viewComments: false,
    err: null
  };

  componentDidMount() {
    this.fetchArticleById();
  }

  fetchArticleById = () => {
    //   props need be same as in router
    api
      .getArticlesById(this.props.article_id)
      .then(items => {
        if (items.article_id){
          this.setState({ singleArticle: items })
          console.log('check')
      
      } else {
        this.setState({err: "article not found"})
      }
        
      }).catch(err =>    this.setState({err}))
  };

  handleClick = () => {
    this.setState(currentState => {
      return { viewComments: !currentState.viewComments };
    });
  };

  render() {
    const { singleArticle, viewComments, err } = this.state;
    if (err) return <Err404Page/>
    const button = viewComments ? "Hide Comments" : "Show Comments";
    return (
      <React.Fragment>
        <Container text textAlign="justified">
          <Header as="h1" textAlign="left" content={singleArticle.title} />

         
          <Header size="tiny" as={Link} to="/users/jessjelly" floated="left">
              <Image circular src={man} />
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

          <Container style={{ paddingTop: "30px", paddingLeft: '10px' }} >
            <Header size="tiny" as={Link} to={`/users/${singleArticle.author}`}>
              <Image circular src={man} />
              <Header.Content>
                {singleArticle.author}
                <Header.Subheader>
                  get excited about {singleArticle.topic}
                </Header.Subheader>

              </Header.Content>
            </Header>
    <div style={{display: 'flex', float: 'right', paddingTop: "5px", paddingRight: '10px'}}>

                <Vote 
          type="articles"
          votes={singleArticle.votes}
          id={this.props.article_id}
        />
    </div>
          </Container>
        </Container>



       
       
        <Grid centered style={{ maxWidth: '800px',  margin: "auto" }}>
       
        <Grid.Column stretched >
          <Button  basic 
          color='violet' 
          compact 
          content={button} 
          size='medium' 
          onClick={() => this.handleClick()} 
          />
        </Grid.Column>
      </Grid>
       

        {viewComments && <Comments article_id={this.props.article_id} />}
      </React.Fragment>
    );
  }
}
