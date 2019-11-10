import React from "react";
import { Link } from "@reach/router";
import Vote from "./Vote";
import man from "../Img/man.png";
import laptop from "../Img/laptop.png";
import Comments from "./Comments";
import {
  Container,
  Header,
  Image,
  Grid,
  Icon,
  Button
} from "semantic-ui-react";

export default function ArticleInfoView(props) {
  const { viewComments } = props;
  const button = viewComments ? "Hide Comments" : "Show Comments";
  return (
    <div>
      <Container text textAlign="justified">
        <Header as="h1" textAlign="left" content={props.singleArticle.title} />

        <Header size="tiny" as={Link} to="/users/jessjelly" floated="left">
          <Image circular src={man} />
          <Header.Content>
            {props.singleArticle.author}
            <Header.Subheader>3 min read</Header.Subheader>
          </Header.Content>
        </Header>

        <Image
          src={laptop}
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
          <p> {props.singleArticle.body}</p>
        </Container>

        <Grid centered columns={3} style={{ paddingTop: "30px" }}>
          <Grid.Row>
            <Grid.Column>
              <Header
                size="tiny"
                icon="newspaper"
                content={props.singleArticle.topic}
                as={Link}
                to={`/articles/topic/${props.singleArticle.topic}`}
                color="pink"
              />
            </Grid.Column>
            <Grid.Column>
              <Header
                size="tiny"
                icon="comments"
                onClick={() => props.handleClick()}
                content={props.singleArticle.comment_count}
                color="pink"
                style={{ cursor: "pointer" }}
              />
            </Grid.Column>

            <Grid.Column>
              <Header
                size="tiny"
                icon="calendar outline"
                content={new Date(
                  props.singleArticle.created_at
                ).toLocaleDateString()}
                color="pink"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Container style={{ paddingTop: "30px", paddingLeft: "10px" }}>
          <Header
            size="tiny"
            as={Link}
            to={`/users/${props.singleArticle.author}`}
          >
            <Image circular src={man} />
            <Header.Content>
              {props.singleArticle.author}
              <Header.Subheader>
                get excited about {props.singleArticle.topic}
              </Header.Subheader>
            </Header.Content>
          </Header>
          <div
            style={{
              display: "flex",
              float: "right",
              paddingTop: "5px",
              paddingRight: "10px"
            }}
          >
            <Vote
              type="articles"
              votes={props.singleArticle.votes}
              id={props.article_id}
            />
          </div>
        </Container>
      </Container>

      <Grid
        centered
        style={{
          maxWidth: "500px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "20px"
        }}
      >
        <Grid.Column stretched>
          <Button
            basic
            color="violet"
            compact
            content={button}
            size="medium"
            onClick={() => props.handleClick()}
          />
        </Grid.Column>
      </Grid>

      {viewComments && <Comments article_id={props.article_id} />}
    </div>
  );
}
