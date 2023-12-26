import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./redux/reducers/index.js"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
)
