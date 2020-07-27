import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './App';

import * as serviceWorker from './serviceWorker';

import store from './redux/store';
import './styles/theme.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
