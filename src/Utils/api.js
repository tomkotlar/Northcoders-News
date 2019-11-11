import axios from "axios"

const request = axios.create({
  baseURL: "https://northcoder-news2019.herokuapp.com/api"
})

export const getTopics = () => {
  return request.get(`/topics`).then(response => response.data.topics)
}

export const getArticles = (topic, sort_by, order_by, username) => {
  return request
    .get(`/articles`, { params: { topic, sort_by, order_by, author: username } })
    .then(response => response.data.articles)
}


export const getArticlesById = id => {
  return request.get(`/articles/${id}`).then(response => response.data.article)
}

export const getComments = id => {
  return request
    .get(`/articles/${id}/comments`)
    .then(response => response.data.comments)
}

export const postComment = (id, username, body) => {
  return request
    .post(`/articles/${id}/comments`, { username, body })
    .then(response => response.data.comment)
}

export const deleteComment = (id) => {
  return request
    .delete(`/comments/${id}`)
   
}

export const patchVote = (id, inc_votes, type) => {
  return request
    .patch(`/${type}/${id}`, { inc_votes })
    .then(response => response.data.comment)
}

