import React from "react";
import { Item, Label } from "semantic-ui-react";
import { Link } from "@reach/router";
import imageCanvas from "../Img/imageCanvas.png";

export default function SingleArticleView(props) {
  return (
    <div
      style={{
        maxWidth: "500px",
        display: "block",
        margin: " 5%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "10px"
      }}
    >
      {/* <a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by pikisuperstar - www.freepik.com</a> */}
      {/* <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by slidesgo - www.freepik.com</a> */}
      {/* <a href="https://www.freepik.com/free-photos-vectors/infographic">Infographic vector created by fullvector - www.freepik.com</a> */}
      <Item.Group divided>
        <Item>
          <Item.Image
            as={Link}
            to={`/articles/${props.article.article_id}`}
            src={imageCanvas}
          />

          <Item.Content style={{ display: "block" }}>
            <Item.Header as={Link} to={`/articles/${props.article.article_id}`}>
              {props.article.title}
            </Item.Header>
            <Item.Meta>
              <span>{props.article.author}</span>
            </Item.Meta>
            <Item.Description>
              {" "}
              {props.article.body.slice(0, 70) + "..."}
            </Item.Description>
            <Item.Extra>
              <Label
                icon="calendar outline"
                content={new Date(props.article.created_at).toDateString()}
              />
              <Label icon="newspaper" content={props.article.topic} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>

      <pre />
      <br />
    </div>
  );
}
