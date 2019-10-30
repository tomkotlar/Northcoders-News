import React, { Component } from "react";
import * as api from "../Utils/api";

export default class PostCommentForm extends Component {
  state = {
    username: "jessjelly",
    body: ""
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    // [name] - is the name of input field you updating
    // value  -  is the value whis is updated from the state
    // in react docs they naming the input field as value which is updated
  };

  handleFormSubmit = event => {
    const { article_id } = this.props;
    const { username, body } = this.state;
    api.postComment(article_id, username, body).then(response => {
      this.props.addForm(response)
    });
    event.preventDefault();
    // console.log(response))

    this.setState({ body: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h1>comment form</h1>
        <form action="cubmit comment" onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              vlaue={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Comment:
            <textarea
              required
              name="body"
              value={this.state.body}
              placeholder={"Write a response ..."}
              onChange={this.handleChange}
            />
          </label>

          <button>Publish</button>
        </form>
      </React.Fragment>
    );
  }
}
