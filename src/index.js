import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import {createStore, applyMiddleware } from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import messageReducer from './reducers/messageReducer'
import thunk from 'redux-thunk';


const store = createStore(messageReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
