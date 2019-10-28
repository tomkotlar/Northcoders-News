import React from 'react'

export default function Article(props) {
    return (
        <div>
            <h1> Article Card</h1>


 
            {props.articles.map((element,i) => (
            <p key={element.title}>    
            
            {/* {element.author} */}
              { element.title} {i} 
              {/* { element.body}
              { element.author}
            {element.comment_count} */}
            {/* { new Date(element.created_at).toDateString()}
          { element.title} */}
             {/* {element.topic} */}
            {/* { element.votes} */}
             </p>
            ))}
            <hr/>


           
        </div>
    )
}
