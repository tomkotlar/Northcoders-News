import React from "react";

export default function SortArticles(props) {
  return (
    <div>
      <h1>i am sorting articles</h1>

      <form>
        <label htmlFor="sort_by"> Filter </label>
        <select
          name="sort_by"
          onChange={props.handleChange}
          value={props.sort_by}
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
            checked={props.order_by === "desc"}
            value="desc"
            onChange={props.handleChange}
          />
        </label>

        <label htmlFor="order_by">
          asc
          <input
            type="radio"
            name="order_by"
            value="asc"
            checked={props.order_by === "asc"}
            onChange={props.handleChange}
          />
        </label>
      </form>
    </div>
  );
}
