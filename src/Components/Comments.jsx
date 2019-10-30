import React, { Component } from "react";
import * as api from "../Utils/api";
import PostCommentForm from "./PostCommentForm";

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
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

  addForm = commnet => {
    this.setState(currentState => {
      return { comments: [commnet, ...currentState.comments] };
    });
  };

  render() {
    const { comments } = this.state;
    if (!comments.length) return "isLoading..."
    
    return (
      <main>
        <button> Post comment</button>
        <PostCommentForm
          article_id={this.props.article_id}
          addForm={this.addForm}
        />
        {comments.map(comment => (
          <p key={comment.comment_id}>
            {comment.comment_id}
            <b>{comment.author} </b>
            {comment.article_id}
            {comment.votes}
            <b> {new Date(comment.created_at).toDateString()} </b>
            {comment.body}

            <button>Delete</button>
          </p>
        ))}
      </main>
    );
  }
}
