/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import store from "./src/store";
import App from "./src/components/App";
import BeaconsContainer from "./src/components/BeaconsContainer";
import { name as appName } from "./app.json";

// import reducer from "./reducers";
// const store = createStore(reducer);

// Don't show yellow warnings box. Messages still appear in console.
// TODO: this is deprecated from v.0.52, use YellowBox.ignoreWarnings([...])
console.disableYellowBox = true;

const Main = () => (
  <Provider store={store}>
    <BeaconsContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
