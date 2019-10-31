import React from 'react'

export default function SingleArticleView(props) {
    return (
        <div>
            <h1>i am single article</h1>
           <p>{props.article.title}</p>
        </div>
    )
}
