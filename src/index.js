import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Provider } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import { components } from './expenses';
import { components as navBarComponents} from './navbar';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

store.subscribe(() => {
  console.log('New state', store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={components.ExpensesContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
