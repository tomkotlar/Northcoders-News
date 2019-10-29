import React from 'react';
import './App.css';

import {Router} from '@reach/router'
import Header from './Components/Header';
// import Nav from './Components/Nav';
import Articles from './Components/Articles';
import Home from './Components/Home';
import ArticleInfo from './Components/ArticleInfo';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <Nav/> */}

    <Router>
     <Home path='/'/>
     <Articles  path='articles' />
     <Articles  path='articles/topic/:topic' />
     <ArticleInfo  path='articles/:article_id'/>
    </Router>
    </div>
  );
}

export default App;
