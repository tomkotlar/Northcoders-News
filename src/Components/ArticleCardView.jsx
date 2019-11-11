import React from "react";
import { Link } from "@reach/router";
import { Item, Label, Icon } from "semantic-ui-react";
import ImageCanvas1 from '../Img/ImageCanvas1.png'


export default function ArticleCardView(props) {
  return (
    <div>
   
     <Item.Group
 
        style={{
          maxWidth: "700px",
          margin: "40px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingBottom: '40px'
        }}
      >
        <Item>
          <Item.Image
            as={Link}
            to={`/articles/${props.article.article_id}`}
            size="tiny"
            src={ImageCanvas1}
          />

          <Item.Content style={{ paddingLeft: "20px" }}>
            <Item.Header as={Link} to={`/articles/${props.article.article_id}`}>
              {props.article.title}
            </Item.Header>
            <Item.Meta>
              <Label as={Link} to={`/users/${props.article.author}`} basic image>
                <img
                  src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
                  alt="avatar"
                />
                {props.article.author}
              </Label>
            </Item.Meta>

            <Item.Extra>
              <Icon disabled color="grey" name="calendar alternate outline" />
              {new Date(props.article.created_at).toLocaleDateString()}
              <Icon
                style={{ paddingLeft: "7px" }}
                disabled
                color="grey"
                name="comments"
              />
              {props.article.comment_count}
              <Icon
                style={{ paddingLeft: "7px" }}
                disabled
                color="grey"
                name="newspaper outline"
              />
              <i>{props.article.topic} </i>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group> 
    </div>
  )
}
