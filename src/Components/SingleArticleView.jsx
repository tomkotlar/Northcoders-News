import React from 'react'
import {Item, Label} from 'semantic-ui-react'

export default function SingleArticleView(props) {
    return (
        <div >
 <Item.Group divided>
    <Item>
      <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content style={{display: 'block'}}>
        <Item.Header as='a'>{props.article.title}</Item.Header>
        <Item.Meta>
          <span>{props.article.author}</span>
        </Item.Meta>
        <Item.Description> {(props.article.body).slice(0,70) + '...'} </Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content={new Date(props.article.created_at).toDateString()} />
          <Label icon='globe' content=    {props.article.topic} />
      
        </Item.Extra>
      </Item.Content>
    </Item>

    </Item.Group >


    
           
         <pre/>
         <br/>
        </div>
    )
}
