import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { appendChatlog, userLogIn, gameState } from './reducers';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import './index.css';
import 'tachyons';

const rootReducer = combineReducers({ appendChatlog, userLogIn, gameState })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
