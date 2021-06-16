import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';

// Polyfills
import smoothscroll from 'smoothscroll-polyfill';

import Home from 'pages/Home';
import About from 'pages/About';
import Projects from 'pages/Projects';
import Blog from 'pages/Blog';
import Contact from 'pages/Contact';

import NotFound from 'pages/errors/NotFound';

import ScrollToTop from 'helpers/ScrollToTop'

// Initialization
smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);