import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './App.css';

const App = (props) => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <hr/>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
