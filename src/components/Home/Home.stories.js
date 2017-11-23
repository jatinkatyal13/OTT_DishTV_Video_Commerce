import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Home from './Home';

storiesOf('Home', module)
  .add('with counter', () => (
    <Home counter={10} increment={action('incremented')}/>
  ));
