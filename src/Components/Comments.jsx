import React, { Component } from "react"
import * as api from "../Utils/api"
import PostCommentForm from "./PostCommentForm"
import Vote from "./Vote"

export default class Comments extends Component {
  state = {
    comments: [],
    isLoading: true, 
    username: "jessjelly", 
  }

  fetchComments = () => {
    const { article_id } = this.props
    api
      .getComments(article_id)
      .then(items => this.setState({ comments: items, isLoading: false }))
  }

  componentDidMount() {
    this.fetchComments()
  }

  addForm = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] }
    })
  }

//   addLike = comment_id => {
//       this.setState(currentState => {
//           return { comments: currentState.comments}
//       })
//   }

  handleDelete = commnet_id => {
    console.log(commnet_id, "another leason")
    api.deleteComment(commnet_id)

    const updated = this.state.comments.filter(
      element =>
        // console.log(element.comment_id, "->" ,commnet_id)
        element.comment_id !== commnet_id
    )

    this.setState({ comments: updated })
  }



  render() {
    const { comments, username } = this.state
    if (!comments.length) return "isLoading..."
    // if (username === 'jessjelly') 
    return (
      <main>
       
        <PostCommentForm
          article_id={this.props.article_id}
          addForm={this.addForm}
        />
        {comments.map(comment => (
          <p key={comment.comment_id}>
            {comment.comment_id}
            <b>{comment.author} </b>
            {comment.article_id}
         
            <b> {new Date(comment.created_at).toDateString()} </b>
            {comment.body}

            {/* <b> {comment.votes} </b>    */}

{/* conditional logic to show delete button just for log in user match the comment author with the state user */}
            { comment.author === username &&  
            <button onClick={() => this.handleDelete(comment.comment_id)}>
              Delete
            </button>
            }
            <Vote  type="comments" id={comment.comment_id} votes={comment.votes}/>
            {/* check function expression  vs function declarations */}
          </p>
        ))}
      </main>
    )
  }
}
