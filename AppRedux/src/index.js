import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppUseEffect from './AppUseEffect';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppRedux from './AppRedux';
import reduser from './Reduser';

const store = createStore(reduser)

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
    <AppUseEffect />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
