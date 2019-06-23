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
    this.startBeaconRenderingAsync();

    // Add beacon listener
    kontaktEmitter.addListener('didDiscoverDevices', ({ beacons }) => {
      console.log('didDiscoverDevices', beacons);
    });
  }

  async startBeaconRenderingAsync() {
    try {
      await init();
      await startDiscovery();
    } catch (error) {
      alert('ERROR', error);
    }
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
