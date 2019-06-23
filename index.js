/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import store from "./src/store";
import App from "./src/components/App";
import BeaconContainer from "./src/container/BeaconContainer";
import { name as appName } from "./app.json";

// Don't show yellow warnings box. Messages still appear in console.
// TODO: this is deprecated from v.0.52, use YellowBox.ignoreWarnings([...])
console.disableYellowBox = true;

const Main = () => (
  <Provider store={store}>
    <BeaconContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);
