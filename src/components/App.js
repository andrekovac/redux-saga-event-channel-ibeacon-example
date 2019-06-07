/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  TouchableOpacity
} from "react-native";
import Kontakt, { KontaktModule } from "react-native-kontaktio";

const { init, startDiscovery } = Kontakt;

const kontaktEmitter = new NativeEventEmitter(KontaktModule);

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  componentDidMount() {
    // this.startBeaconRenderingPromiseChain();
    init()
      .then(() => startDiscovery())
      .catch(error => alert("error", error));

    // Add beacon listener
    kontaktEmitter.addListener("didDiscoverDevices", ({ beacons }) => {
      console.log("didDiscoverDevices", beacons);
    });
  }

  startBeaconRenderingPromiseChain() {
    return new Promise(resolve => {
      init()
        .then(() => startDiscovery())
        .then(() => resolve())
        .catch(error => alert("error", error));
    });
  }

  async startBeaconRenderingAsync() {
    try {
      await init();
      await startDiscovery();
    } catch (error) {
      alert("ERROR", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={() => alert("hello")}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
