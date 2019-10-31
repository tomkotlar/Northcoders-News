import React, { Component } from "react"
import * as api from "../Utils/api"

export default class Vote extends Component {
  state = {
    likes: 0
  }

  handleLike = likes => {
    const { id, type} = this.props
    api.patchVote(id, likes, type )
    this.setState(currentState => {
      return { likes: currentState.likes + 1 }
    })
  }

  render() {
    const { votes } = this.props
    console.log(this.state.likes)
    return (
      <React.Fragment>
        {votes + this.state.likes}
        <button  disabled={this.state.likes  === 0 ? false : true } onClick={() => this.handleLike(1)}>Like</button>
      </React.Fragment>
    )
  }
}
