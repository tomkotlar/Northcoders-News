import React from "react"
import { Link } from "@reach/router"
import ArticleCard from "./ArticleCard"

import {Card, Image, Icon} from 'semantic-ui-react'


export default function SingleUser(props) {
  return (
    <div>


<Card centered style={{marginTop: '50'}}> 
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header  >      {(props.username).toUpperCase()}    </Card.Header>
      <Card.Meta>
        <span>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
      {props.username} is a musician living in Manchester.
      </Card.Description>
    </Card.Content>
    <Card.Content>
   
            <Link to="/articles">
              <Icon
                size="large"
                name="arrow alternate circle left outline"
                color="violet"
                content="back"
              />
            </Link>
         
 
        <Icon  name='newspaper outline' />
        22 Articles
 
    </Card.Content>
  </Card>
      
      <ArticleCard username={props.username}  />

      <Link to="/articles">
        <button> Back</button>
      </Link>
    </div>
  )
}
