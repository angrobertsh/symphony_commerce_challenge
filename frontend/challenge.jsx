import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as STOREFRONTACTIONS from './actions/storefront_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  store.dispatch(STOREFRONTACTIONS.fetchItems());
  window.store = store;
  const rootDiv = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootDiv);
});
