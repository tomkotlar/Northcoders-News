import React from 'react'

export default function SingleArticleView(props) {
    return (
        <div>
            <h1>i am single article</h1>
           <p>{props.article.title}</p>
           <p>{props.article.author}</p>
           <p>{new Date(props.article.created_at).toDateString()}</p>
          <hr/>
        </div>
    )
}
