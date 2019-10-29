import React, { Component } from "react";

export default class SortArticlse extends Component {
  state = {
    sort_by: "",
    order_by: ""
  };


  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { sort_by, order_by } = this.state;
    return (
      <div>
        <h1>i am sorting articles</h1>

        <form action="sort_by">
          <label htmlFor="sort_by"> Filter </label>
          <select
            name="sort_by"
            id="sort"
            value={sort_by}
            onChange={this.handleChange}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>

          <label htmlFor="order_by">
            desc
            <input
              type="radio"
              name="order_by"
              checked={order_by === 'desc'}
              value='desc'
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="order_by">
            asc
            <input
              type="radio"
              name="order_by"
              value= 'asc'
              checked={order_by === 'asc'}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
