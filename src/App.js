import React from 'react';
import './App.css';

import {Router} from '@reach/router'
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import Article from './Components/Article';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home />

    <Router>
     <Nav  path='articles'/>
     <Articles  path='articles' />
     <Article  path='articles/:article_id'/>
    </Router>
    </div>
  );
}

export default App;
