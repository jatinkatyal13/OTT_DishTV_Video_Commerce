import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './About.css';


class About extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      this.props.fetchContributors();
    }
  }

  render() {
    if (!this.props.loaded) {
      return null;
    }

    const contributors = this.props.contributors.map(el => (
      <div key={el.username} className="contributor">
        <img src={el.avatar} alt=""/>
        <a href={el.url}>{el.username}</a>
        <span>
          {el.contributions > 1 ? `${el.contributions} commits` : `${el.contributions} commit`}
        </span>
      </div>));

    return (
      <div className="About">
        <h2>Contributors:</h2>
        <div>{contributors}</div>
      </div>
    );
  }
}

About.propTypes = {
  fetchContributors: PropTypes.func.isRequired,
  contributors: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
};

export default About;