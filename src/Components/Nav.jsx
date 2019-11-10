import React, { Component } from "react";
import * as api from "../Utils/api";
import { Link } from "@reach/router";
import { Menu } from "semantic-ui-react";

export default class Nav extends Component {
  state = {
    topics: []
    // add error page
  };

  fetchTopics = () => {
    api.getTopics().then(items => {
      this.setState({ topics: items });
    });
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics } = this.state;
    return (
      <Menu
        text
        style={{
          maxWidth: "1400px",
          margin: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px"
        }}
      >
        {topics.map(element => (
          <Menu.Item
            key={element.slug}
            name={element.slug[0].toUpperCase() + element.slug.slice(1)}
            as={Link}
            to={`/articles/topic/${element.slug}`}
          />
        ))}
      </Menu>
    );
  }
}
