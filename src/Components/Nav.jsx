import React, { Component } from "react";
import * as api from "../Utils/api";
import { Link } from "@reach/router";

export default class Nav extends Component {
  state = {
    topics: []
  };

  fetchTopics = () => {
    api.getTopics().then(items => {
      this.setState({ topics: items});
    });
  };

  componentDidMount() {
    this.fetchTopics();
  }
  render() {
    const { topics } = this.state;
    return (
      <nav>
        {topics.map(element => (
          <Link to={`/articles/topic/${element.slug}`} key={element.slug}>
            {element.slug[0].toUpperCase() + element.slug.slice(1)}
          </Link>
        ))}
        <Link to="/articles/topic/more">More</Link>
        {/* render list of topics */}
      </nav>
    );
  }
}
