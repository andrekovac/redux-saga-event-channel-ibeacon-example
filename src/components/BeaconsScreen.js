// @flow
import React, { Component } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  TouchableOpacity,
  Button
} from "react-native";
import Kontakt, { KontaktModule } from "react-native-kontaktio";

import { getTransformedValue } from "../utils";
import { Beacon } from "../types";

const { height: windowHeight } = Dimensions.get("window");

const kontaktEmitter = new NativeEventEmitter(KontaktModule);

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {
  beaconDiscoveryInit: () => void,
  beacons: Array<Beacon>,
  error: Error
};

export default class BeaconsScreen extends Component<Props> {
  /**
   * Works!
   */
  startBeaconRenderingPromiseChain() {
    return new Promise(resolve => {
      init()
        .then(() => startDiscovery())
        .then(() => resolve())
        .catch(error => alert("error", error));
    });
  }

  /**
   * Works!
   */
  async startBeaconRenderingAsync() {
    try {
      await init();
      await startDiscovery();
    } catch (error) {
      alert("ERROR", error);
    }
  }

  assignColorToBeacon = uniqueId => {
    switch (uniqueId) {
      case "tZVH":
        return "#55DBAA";
      case "QDkt":
        return "#D88552";
      case "ChAd":
        return "#6367D8";
      default:
        return "#DD56D7";
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonBar}>
          <Button
            onPress={() => {
              this.props.beaconDiscoveryInit();
            }}
            title="Discovery"
            color="#841584"
          />
        </View>
        <View style={styles.phone} />
        <View style={styles.beaconField}>
          {this.props.beacons.map(beacon => {
            const backgroundColor = this.assignColorToBeacon(beacon.uniqueId);
            const height = getTransformedValue(
              beacon.rssi,
              [-100, -1],
              [0, windowHeight - 100]
            );
            return (
              <View style={styles.beaconLine}>
                <View style={[styles.beaconSpace, { height }]} />
                <View style={[styles.beacon, { backgroundColor }]} />
              </View>
            );
          })}
          {/* <View style={styles.beaconLine}>
            <View style={[styles.beaconSpace, { height: 70 }]} />
            <View style={[styles.beacon, { backgroundColor: "green" }]} />
          </View> */}
        </View>
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
  buttonBar: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 40,
    height: 80,
    backgroundColor: "lightgrey"
  },
  beaconField: {
    flex: 1,
    flexDirection: "row"
  },
  beaconLine: {
    flexDirection: "column",
    marginHorizontal: 5
  },
  beaconSpace: {
    height: 0,
    backgroundColor: "yellow"
  },
  phone: {
    width: 30,
    height: 50,
    backgroundColor: "black"
  },
  beacon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "blue"
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
