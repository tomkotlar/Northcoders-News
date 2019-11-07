import React, { Component } from "react";
import * as api from "../Utils/api";
import PostCommentForm from "./PostCommentForm";
import Vote from "./Vote";
import female from "../Img/female.png";
import {
  Comment,
  Header,
  Icon,
  Segment,
  Label
} from "semantic-ui-react";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
    username: "jessjelly"
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(items => this.setState({ comments: items, isLoading: false }));
  };

  componentDidMount() {
    this.fetchComments();
  }

  addForm = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  //   addLike = comment_id => {
  //       this.setState(currentState => {
  //           return { comments: currentState.comments}
  //       })
  //   }

  handleDelete = commnet_id => {
    console.log(commnet_id, "another leason");
    api.deleteComment(commnet_id);

    const updated = this.state.comments.filter(
      element =>
        // console.log(element.comment_id, "->" ,commnet_id)
        element.comment_id !== commnet_id
    );

    this.setState({ comments: updated });
  };

  render() {
    const { comments, username } = this.state;
    if (!comments.length) return "isLoading...";
    // if (username === 'jessjelly')
    return (
      <main>
        <PostCommentForm
          article_id={this.props.article_id}
          addForm={this.addForm}
        />

        <pre />
        <pre />
        <pre />
        <pre />
        <Header as="h3" dividing>
          Comments
        </Header>

        {comments.map(comment => (
          <Comment.Group
            key={comment.comment_id}
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
                    {comment.body}
                  </Comment.Text>

                  {comment.author === username && (
                    <Label
                      as="a"
                      basic
                      color="purple"
                      size="tiny"
                      onClick={() => this.handleDelete(comment.comment_id)}
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

            {/* conditional logic to show delete button just for log in user match the comment author with the state user */}

            {/* <Vote
              type="comments"
              id={comment.comment_id}
              votes={comment.votes}
            /> */}
            {/* check function expression  vs function declarations */}
          </Comment.Group>
        ))}
      </main>
    );
  }
}
