/**
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeEventEmitter,
  TouchableOpacity,
} from 'react-native';
import BeaconContainer from '../container/BeaconContainer';

const App = () => <BeaconContainer />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
