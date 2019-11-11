import React, { Component } from "react";
import * as api from "../Utils/api";
import PostCommentForm from "./PostCommentForm";
import { Header } from "semantic-ui-react";
import CommentsInfo from "./CommentsInfo";

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

  handleDelete = commnet_id => {
    api.deleteComment(commnet_id);

    const updated = this.state.comments.filter(
      element => element.comment_id !== commnet_id
    );

    this.setState({ comments: updated });
  };

  render() {
    const { comments, username } = this.state;
    if (!comments.length) return "isLoading...";
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

        <Header
          as="h3"
          dividing
          style={{
            maxWidth: "700px",
            margin: "20px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          content="  Comments"
        />

        {comments.map(comment => (
          <CommentsInfo
            key={comment.comment_id}
            comment={comment}
            username={username}
            handleDelete={this.handleDelete}
          />
        ))}
      </main>
    );
  }
}
