import axios from 'axios'

const request = axios.create({
    baseURL: "https://northcoder-news2019.herokuapp.com/api"
});

export const getTopics = () => {
    return request
      .get(`/topics`)
      .then(response => response.data.topics)
     
  };

export const getArticles = (topic) => {
    return request
      .get(`/articles`, {params: {topic}})
      .then(response => response.data.articles)
      
  };
export const getArticlesById = (id) => {
    return request
      .get(`/articles/${id}`)
      .then(response => response.data.article)
  };