import React from 'react';
import PropTypes from 'prop-types';

import { action } from '@kadira/storybook';
import { MemoryRouter, Route, matchPath } from 'react-router-dom';


const StoryRouter = ({story, links}) => (
  <MemoryRouter>
    <Route render={({history}) => {
      const replaceLinks = (name, links) => {
        return path => {
          for (const link in links) {
            const m = matchPath(path, {path: link, exact: true});
            if (m) {
              links[link]();
              return;
            }
          }
          action(name)(path);
        };
      };

      history.push = replaceLinks('history.push', links);
      history.replace = replaceLinks('history.replace', links);

      history.go = action('history.go');
      history.goBack = action('history.goBack');
      history.goForward = action('history.goForward');

      return (
        <div>
          {story()}
        </div>
      );
    }} />
  </MemoryRouter>
);

StoryRouter.propTypes = {
  story: PropTypes.func.isRequired,
  links: PropTypes.object
};

const storyRouterDecorator = links => {
  const s = story => <StoryRouter story={story} links={links} />;
  s.displayName = 'StoryRouter';
  return s;
};

export default storyRouterDecorator;