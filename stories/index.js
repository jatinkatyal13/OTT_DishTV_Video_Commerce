import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Home from '../src/components/Home';

storiesOf('Home', module)
  .add('with counter', () => (
    <Home counter={10} increment={action('incremented')}/>
  ));
