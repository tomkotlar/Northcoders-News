import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Utils/api";
import SortArticles from "./SortArticles";
import SingleArticleView from "./SingleArticleView";
import Err404Page from "./Err404Page";

import { Item, Label, Icon } from "semantic-ui-react";

export default class ArticleCard extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order_by: "",
    err: null
  };

  fetchArticles = () => {
    const { username, topic } = this.props;
    const { sort_by, order_by } = this.state;

    api
      .getArticles(topic, sort_by, order_by, username)
      .then(items => {
        this.setState({ articles: items, isLoading: false });
      })
      
        .catch(err =>    this.setState({err}))
      
  };

  componentDidMount() {
    this.fetchArticles();
  }

  handleChange = (event) => {
    console.dir(event)
     const { name, value } = event.target
     this.setState({ [name]: value })
  }


  // handleChange = sort_by => {
  //   const { order_by } = this.state;
  //   this.setState({ sort_by, order_by });
  // };

  componentDidUpdate(prevProprs, prevState) {
    // console.log(prevState)
    const chooseTopic = prevProprs.topic !== this.props.topic;
    const chooseOrder = prevState.order_by !== this.state.order_by;
    const chooseSort = prevState.sort_by !== this.state.sort_by;
    if (chooseTopic || chooseOrder || chooseSort) this.fetchArticles();
  }

  render() {
    const { articles, order_by, sort_by, err } = this.state;
    if (!articles.length) return "isloadning....";
    if (err) return <Err404Page err={err} />;
    return (
      <div>
        <SingleArticleView article={articles[0]} />

        <SortArticles
          order_by={order_by}
          sort_by={sort_by}
          handleChange={this.handleChange}
        />

       

        {this.state.articles.map((element, i) => (

//<Segment raised style={{ maxWidth: "700px", margin: '20px', marginLeft: 'auto', marginRight: 'auto'}} > 
          <Item.Group  key={element.article_id}    style={{ maxWidth: "700px", margin: '40px', marginLeft: 'auto', marginRight: 'auto'}} >
            <Item>
              <Item.Image
                as={Link}
                to={`/articles/${element.article_id}`}
                size="tiny"
                src="https://image.freepik.com/free-vector/images-concept-illustration_114360-218.jpg"
              />

              <Item.Content style={{paddingLeft: '20px'}}>
                <Item.Header as={Link} to={`/articles/${element.article_id}`} >
                  {element.title}
                </Item.Header>
                <Item.Meta>
                  <Label as={Link} to={`/users/${element.author}`} basic image>
                    <img src="https://react.semantic-ui.com/images/avatar/small/stevie.jpg" alt='avatar' />
                    {element.author}
                  </Label>
                </Item.Meta>

                <Item.Extra>
                  <Icon
                    disabled
                    color="grey"
                    name="calendar alternate outline"
                  />
                  {new Date(element.created_at).toLocaleDateString()}
                  <Icon
                    style={{ paddingLeft: "7px" }}
                    disabled
                    color="grey"
                    name="comments"
                  />{" "}
                  {element.comment_count}
                  <Icon
                    style={{ paddingLeft: "7px" }}
                    disabled
                    color="grey"
                    name="newspaper outline"
                  />{" "}
                  <i>{element.topic} </i>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
         // </Segment>
        ))}
      </div>
    );
  }
}
