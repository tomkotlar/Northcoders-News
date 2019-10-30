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

  addForm = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };


  handleDelete = (commnet_id) => {
      console.log(commnet_id, "another leason")
    api.deleteComment(commnet_id)
        
     const updated = this.state.comments.filter(element => 
        // console.log(element.comment_id, "->" ,commnet_id)
         element.comment_id !== commnet_id)

        
        this.setState({comments: updated})
  }

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

            <button onClick={() => this.handleDelete(comment.comment_id)}>Delete</button>
             {/* check function expression  vs function declarations */}
          </p>
        ))}
      </main>
    );
  }
}
