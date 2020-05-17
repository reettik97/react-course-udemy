import React from "react";
import ReactDOM from "react-dom";


import reducer from "./reducers/index";
import App from "./component/App";

ReactDOM.render(
  <Provider store = {createStore(reducer)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
