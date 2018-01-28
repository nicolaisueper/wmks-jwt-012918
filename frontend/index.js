import React from 'react';
import thunk from "redux-thunk";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";

import App from "./app/App";
import appReducer from "./app/reducer";

const configureStore = () => {
  const store = applyMiddleware(thunk)(createStore)(appReducer);
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./app/reducer').default);
    });
  }
  return store;
};

const store = configureStore();

render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
