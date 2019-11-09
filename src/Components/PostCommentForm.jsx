import React, { Component } from "react"
import * as api from "../Utils/api"
import { Form, TextArea,Label} from "semantic-ui-react";


export default class PostCommentForm extends Component {
  state = {
    username: "jessjelly",
    body: ""
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
    // [name] - is the name of input field you updating
    // value  -  is the value whis is updated from the state
    // in react docs they naming the input field as value which is updated
  }

  handleFormSubmit = event => {
    const { article_id } = this.props
    const { username, body } = this.state
    api.postComment(article_id, username, body).then(response => {
      this.props.addForm(response)
    })
    event.preventDefault()
    // console.log(response))

    this.setState({ body: "" })
  }

  render() {
    return (
    
    
        <Form action="submit comment" 
        onSubmit={this.handleFormSubmit} 
        style={{ maxWidth: '500px',  display: "block",
        margin:' 5%',
        marginLeft: 'auto',
        marginRight: "auto",
        paddingTop: '10px'
     }} >
          
          <Form.Field>
          <Label as='a' image >
      <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' 
     alt='avatar'
      
      />
      {this.state.username}
    </Label>
            <TextArea
              required
              name="body"
              value={this.state.body}
              placeholder={"Write a response ..."}
              style={{marginTop: "10px"}}
              onChange={this.handleChange}

              
            />
         
         <Form.Button  
          floated='right' 
          basic color='violet'
          size='tiny'  
          content='Submit'
          compact
          style={{margin: '10px'}} />
        
        
       
          </Form.Field>
       
          
        </Form>
     
    )
  }
}
