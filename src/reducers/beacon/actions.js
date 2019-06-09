// @flow
import {
  BEACON_DISCOVERY_INIT,
  BEACON_DISCOVERY_SUCCESS,
  BEACON_DISCOVERY_START,
  BEACON_DISCOVERY_STOP,
  BEACON_DISCOVERY_ERROR
} from "./constants";

//  Action creators

export const beaconDiscoveryInit = (beacons: Array<DiscoveryBeacon>) => ({
  type: BEACON_DISCOVERY_INIT,
  beacons
});

export const beaconDiscoverySuccess = (beacons: Array<DiscoveryBeacon>) => ({
  type: BEACON_DISCOVERY_SUCCESS,
  beacons
});

export const beaconDiscoveryStart = () => ({
  type: BEACON_DISCOVERY_START
});

export const beaconDiscoveryStop = () => ({
  type: BEACON_DISCOVERY_STOP
});

export const beaconDiscoveryError = (error: Error) => ({
  type: BEACON_DISCOVERY_ERROR,
  error
});
