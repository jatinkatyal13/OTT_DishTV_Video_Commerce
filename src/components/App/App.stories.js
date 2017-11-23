import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import StoryRouter from 'storybook-router';
import About from '../About';
import App from './App';
import Home from '../Home';

storiesOf('App', module)
  .addDecorator(StoryRouter({'/about': linkTo('App', 'about')}))
  .add('home', () => (
    <App>
      <Home counter={10} increment={action('incremented')}/>
    </App>
  ));

storiesOf('App', module)
  .addDecorator(StoryRouter({'/': linkTo('App', 'home')}))
  .add('about', () => {
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
      <App>
        <About
          contributors={contributors}
          fetchContributors={action('fetch contributors')}
          loaded={true}/>
      </App>
    );
  });