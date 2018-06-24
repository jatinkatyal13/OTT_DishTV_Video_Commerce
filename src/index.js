import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
import Home from './containers/HomeContainer';
import TV from './containers/TVContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/tv/:id" component={TV}/>
    </App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
