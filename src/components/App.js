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
import BeaconsContainer from "./BeaconsContainer";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <BeaconsContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
