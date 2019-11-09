import React from "react";

import { Form, Divider } from "semantic-ui-react";

export default function SortArticles(props) {
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px"
      }}
    >
      <Form>
        <Form.Group inline>
          <Form.Field
            label="Filter"
            control="select"
            name="sort_by"
            onChange={props.handleChange}
            value={props.sort_by}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </Form.Field>

          <Form.Field
            label="asc"
            control="input"
            type="radio"
            name="order_by"
            value="asc"
            checked={props.order_by === "asc"}
            onChange={props.handleChange}
          />
          <Form.Field
            control="input"
            label="desc"
            type="radio"
            name="order_by"
            checked={props.order_by === "desc"}
            value="desc"
            onChange={props.handleChange}
          />
        </Form.Group>
      </Form>
      <Divider />
    </div>
  );
}
