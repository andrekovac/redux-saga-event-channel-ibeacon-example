/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import store from "./src/store";
import App from "./src/components/App";
import { name as appName } from "./app.json";

// import reducer from "./reducers";
// const store = createStore(reducer);

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
