import React from "react";
import Vote from "./Vote";
import female from "../Img/female.png";
import { Comment, Icon, Segment, Label } from "semantic-ui-react";

export default function CommentsInfo(props) {
  const { comment } = props;
  return (
    <div>
      <Comment.Group
        style={{ paddingTop: "15px", margin: "0 auto", maxWidth: "700px" }}
      >
        <Segment raised color="pink">
          <Comment>
            <Comment.Avatar
              as="a"
              src={female}
              alt="female icon / https://www.flaticon.com/authors/smashicons"
            />
            <Comment.Content>
              <Comment.Author>{comment.author}</Comment.Author>
              <Comment.Metadata>
                <div>{new Date(comment.created_at).toDateString()}</div>
              </Comment.Metadata>
              <Comment.Text style={{ paddingTop: "10px" }}>
                {props.comment.body}
              </Comment.Text>

              {comment.author === props.username && (
                <Label
                  as="a"
                  basic
                  color="purple"
                  size="tiny"
                  onClick={() => props.handleDelete(comment.comment_id)}
                >
                  Delete
                  <Icon name="close" />
                </Label>
              )}

              <Vote
                type="comments"
                id={comment.comment_id}
                votes={comment.votes}
              />
            </Comment.Content>
          </Comment>
        </Segment>
      </Comment.Group>
    </div>
  );
}
