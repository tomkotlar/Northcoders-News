import React, { Component } from "react";
import * as api from "../Utils/api";
import { Link } from "@reach/router";
import Err404Page from "./Err404Page";
import { Menu } from "semantic-ui-react";

export default class Nav extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };

  fetchTopics = () => {
    api.getTopics().then(items => {
      this.setState({ topics: items , isLoading: false});
    })
    .catch(err => this.setState({ err }));
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    const { topics, err } = this.state;
    if (!topics.length) return "loading...";
    if (err) return <Err404Page err={err} />;
  
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
