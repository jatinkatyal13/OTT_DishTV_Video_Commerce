import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import About from './About';

storiesOf('About', module)
  .add('to be loaded', () => (
    <About
      contributors={[]}
      fetchContributors={action('fetch contributors')}
      loaded={false}/>
  ))
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
