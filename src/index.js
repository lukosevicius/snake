import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import moveReducer from "./store/reducers/move";
// import sizesReducer from "./store/reducers/sizes";

const rootReducer = combineReducers({
    move: moveReducer
    // sizes: sizesReducer
})

const logger = store => {
    return next => {
      return action => {
        console.log("[Middleware] Dispatching", action);
        const result = next(action);
        console.log("[Middleware] next state:", store.getState().move);
        return result;
      };
    };
  };

const store = createStore(rootReducer, applyMiddleware(logger));
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
