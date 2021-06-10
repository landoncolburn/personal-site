import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';

import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';

import ScrollToTop from 'helpers/ScrollToTop'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);