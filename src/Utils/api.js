import axios from 'axios'

const request = axios.create({
    baseURL: "https://northcoder-news2019.herokuapp.com/api"
});

export const getTopics = () => {
    return request
      .get(`/topics`)
      .then(response => response.data.topics)
      .catch(err => console.dir(err));
  };

export const getArticles = () => {
    return request
      .get(`/articles`)
      .then(response => response.data.articles)
      .catch(err => console.dir(err));
  };