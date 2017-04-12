import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = (props) => (
  <div className="Home">
    <h2>Home</h2>
    <p>Counter: {props.counter}</p>
    <button onClick={props.increment}>Increment</button>
  </div>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};

export default Home;
