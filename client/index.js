import React from 'react';
import { render } from 'react-dom';
import styles from './style.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './react/components/App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
