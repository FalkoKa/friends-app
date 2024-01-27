import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import App from './App.tsx';
import './index.css';
import 'tachyons';
import { searchRobots } from './reducers.ts';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
