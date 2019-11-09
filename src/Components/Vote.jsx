import React, { Component } from "react";
import * as api from "../Utils/api";
import { Label, Icon } from "semantic-ui-react";

export default class Vote extends Component {
  state = {
    likes: 0
  };

  handleLike = likes => {
    const { id, type } = this.props;
    api.patchVote(id, likes, type);
    this.setState(currentState => {
      return { likes: currentState.likes + 1 };
    });
  };

  render() {
    const { votes } = this.props;
    console.log(this.state.likes);
    return (
      <React.Fragment>
        <Label
         size="tiny"
         basic
          as="button"
          color= 'purple'
          disabled={this.state.likes === 0 ? false : true}
          onClick={() => this.handleLike(1)}
          style={{cursor: 'pointer'}}
        >
          <Icon name="heart" color={this.state.likes === 0 ? 'purple' : 'pink'} />
          {votes + this.state.likes}
          <Label.Detail>Like</Label.Detail>
        </Label>
      </React.Fragment>
    );
  }
}
