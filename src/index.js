import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>
      </Provider>
    </HashRouter>
);

reportWebVitals();
