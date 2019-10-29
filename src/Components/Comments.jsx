import React, { Component } from 'react'
import * as api from '../Utils/api'

export default class Comments extends Component {

    state = {
        comments: [],
        isLoading: true,
    }

    fetchComments = () => {
      const { article_id} = this.props
        api.getComments(article_id).then(items => (
           this.setState({comments: items, isLoading: false})
        ))
    }


    componentDidMount() {
        this.fetchComments()
    }

    render() {
        const {comments} = this.state
        if (!comments.length) return 'isLoading...'
        return ( 
         <main>
             {comments.map(comment => (
                <p key={comment.comment_id}>
                {comment.comment_id} 
               <b>{comment.author}  </b> 
                {comment.article_id} 
                {comment.votes} 
               <b>  {new Date(comment.created_at).toDateString()} </b>
                {comment.body} 
                
            
                </p> 
             ))}
         </main>
        )
    }
}
