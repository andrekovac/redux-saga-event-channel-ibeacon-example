// @flow
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  NativeEventEmitter,
  Button,
} from 'react-native';
import Kontakt, { KontaktModule } from 'react-native-kontaktio';

import { getTransformedValue, getRandomColor } from '../utils';
import type { Beacon, RangingBeacon } from '../types';
import config from '../config';

const { height: windowHeight } = Dimensions.get('window');

const kontaktEmitter = new NativeEventEmitter(KontaktModule);

type Props = {
  beaconDiscoveryInit: () => void,
  beaconRangingInit: () => void,
  discoveredBeacons: Array<Beacon>,
  rangedBeacons: Array<RangingBeacon>,
  error: Error,
};

// Default beacon ids
const beaconUniqueIds: $ReadOnlyArray<string> = config.uniqueIds;

export default class BeaconScreen extends Component<Props> {
  // Default colors
  beaconColors: ['#55DBAA', '#D88552', '#6367D8'];

  constructor(props) {
    super(props);
    this.beaconColors = beaconUniqueIds.map(() => getRandomColor());
  }

  assignColorToDiscoveredBeacon = (discoveredId: string) => {
    const index = beaconUniqueIds.findIndex(id => discoveredId === id);

    if (index >= 0) {
      return this.beaconColors[index];
    } else {
      return '#DD56D7';
    }
  };

  renderButtonbar() {
    return (
      <View style={styles.buttonBar}>
        <View style={styles.button}>
          <Button
            onPress={() => {
              this.props.beaconDiscoveryInit();
            }}
            title="Discovery"
            color="#841584"
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => {
              // this.props.beaconRangingInit();
              alert('Not implemented yet');
            }}
            title="Ranging"
            color="#841584"
          />
        </View>
      </View>
    );
  }

  renderBeaconFieldRanged() {
    const { rangedBeacons } = this.props;
    if (rangedBeacons.length === 0) {
      return null;
    }
    return (
      <View style={styles.beaconField}>
        {rangedBeacons.map(beacon => {
          const backgroundColor = 'red';

          const height = beacon.accuracy * 50;
          return (
            <View style={styles.beaconLine}>
              <View style={[styles.beaconSpace, { height }]} />
              <View style={[styles.beacon, { backgroundColor }]} />
            </View>
          );
        })}
      </View>
    );
  }

  renderBeaconField() {
    const { discoveredBeacons } = this.props;
    // if (discoveredBeacons.length === 0) {
    //   return null;
    // }
    return (
      <View style={styles.beaconField}>
        {discoveredBeacons.map(beacon => {
          const backgroundColor = this.assignColorToDiscoveredBeacon(
            beacon.uniqueId
          );
          const height = getTransformedValue(
            beacon.rssi,
            [-100, -1],
            [0, windowHeight - 100]
          );
          console.log({ height });
          return (
            <View style={styles.beaconLine}>
              <View
                style={[styles.beaconSpace, { height: -1 * height + 300 }]}
              />
              <View style={[styles.beacon, { backgroundColor }]} />
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderButtonbar()}
        <View style={styles.phone} />
        {this.renderBeaconField()}
        {/* {this.renderBeaconFieldRanged()} */}
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
  buttonBar: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 40,
    height: 80,
    backgroundColor: 'lightgrey',
  },
  button: {
    flex: 1,
  },
  beaconField: {
    flex: 1,
    flexDirection: 'row',
  },
  beaconLine: {
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  beaconSpace: {
    height: 0,
    backgroundColor: 'yellow',
  },
  phone: {
    width: 30,
    height: 50,
    backgroundColor: 'black',
  },
  beacon: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
