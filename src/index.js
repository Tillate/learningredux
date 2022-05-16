import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore } from 'redux'; //Depreciated
import { Provider } from 'react-redux';
import store from './store';
// const store = createStore(todosReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);


