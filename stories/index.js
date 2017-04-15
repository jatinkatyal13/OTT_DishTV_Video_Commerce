import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Home from '../src/components/Home';
import About from '../src/components/About';

storiesOf('Home', module)
  .add('with counter', () => (
    <Home counter={10} increment={action('incremented')}/>
  ));


storiesOf('About', module)
  .add('with 2 contributors', () => {
    const contributors = [{
      username: 'gvaldambrini',
      url: 'https://github.com/gvaldambrini',
      avatar: 'https://avatars3.githubusercontent.com/u/2461921?v=3',
      contributions: 10
    }, {
      username: 'rugginoso',
      url: 'https://github.com/rugginoso',
      avatar: 'https://avatars1.githubusercontent.com/u/425276?v=3',
      contributions: 1
    }];

    return (
      <About
        contributors={contributors}
        fetchContributors={action('fetch contributors')}
        loaded={true}/>
    );
  });
