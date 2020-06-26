import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index.js";
// import burgerMenu from "./redux/reducers/burgerMenu.js";

const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
