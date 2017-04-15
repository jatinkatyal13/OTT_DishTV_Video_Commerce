import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const contributors = [{
    username: 'gvaldambrini',
    url: 'https://github.com/gvaldambrini',
    avatar: 'https://avatars3.githubusercontent.com/u/2461921?v=3',
    contributions: 10
  }];
  ReactDOM.render(
    <About
      contributors={contributors}
      loaded={true}
      fetchContributors={() => null} />,
  div);
});
