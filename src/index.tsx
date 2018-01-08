import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { tacoApp, initialState } from './reducers';
import { AppState } from './types';

import { Provider } from 'react-redux';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(tacoApp, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
