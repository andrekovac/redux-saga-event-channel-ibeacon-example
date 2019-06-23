/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, NativeEventEmitter } from 'react-native';
import Kontakt, { KontaktModule } from 'react-native-kontaktio';

const { init, startDiscovery } = Kontakt;
const kontaktEmitter = new NativeEventEmitter(KontaktModule);

type Props = {};

export default class App extends Component<Props> {
  componentDidMount() {
    this.startBeaconRenderingPromiseChain();

    // Add beacon listener
    kontaktEmitter.addListener('didDiscoverDevices', ({ beacons }) => {
      console.log('didDiscoverDevices', beacons);
    });
  }

  startBeaconRenderingPromiseChain() {
    return new Promise(resolve => {
      init()
        .then(() => startDiscovery())
        .then(() => resolve())
        .catch(error => alert('error', error));
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>iBeacon Demo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
