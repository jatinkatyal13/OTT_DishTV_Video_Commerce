import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../containers/HomeContainer';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

export default App;
