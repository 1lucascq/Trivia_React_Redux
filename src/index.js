import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import ContextProvider from './context/Provider';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
