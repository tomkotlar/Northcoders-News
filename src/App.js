import React from 'react';
import './App.css';

import {Router} from '@reach/router'
import Heading from './Components/Heading';
//  import Nav from './Components/Nav';
import Articles from './Components/Articles';
import Home from './Components/Home';
import ArticleInfo from './Components/ArticleInfo';
import  SingleUser from './Components/SingleUser'
import Err404Page from './Components/Err404Page';

function App() {
  return (
    <div className="App">
     <Heading/>
     {/* <Nav/> */}
    <Router>
      <Err404Page default />
     <Home path='/'/>
     <Articles  path='articles' />
     <Articles  path='articles/topic/:topic' />

     <ArticleInfo  path='articles/:article_id'/>

     <SingleUser path='users/:username'/>
    </Router>
    </div>
  );
}

export default App;
