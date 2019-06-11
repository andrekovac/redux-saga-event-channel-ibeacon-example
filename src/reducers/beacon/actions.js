// @flow
import {
  BEACON_DISCOVERY_INIT,
  BEACON_DISCOVERY_SUCCESS,
  BEACON_DISCOVERY_START,
  BEACON_DISCOVERY_STOP,
  BEACON_DISCOVERY_ERROR,
  BEACON_RANGING_INIT,
  BEACON_RANGING_SUCCESS,
  BEACON_RANGING_START,
  BEACON_RANGING_STOP,
  BEACON_RANGING_ERROR
} from "./constants";
import type { Beacon, RangingBeacon } from "../../types";

//-------- --------- --------
//-------- Discovery --------
//-------- --------- --------

export const beaconDiscoveryInit = (beacons: Array<Beacon>) => ({
  type: BEACON_DISCOVERY_INIT,
  beacons
});

export const beaconDiscoverySuccess = (beacons: Array<Beacon>) => ({
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

//-------- ------- --------
//-------- Ranging --------
//-------- ------- --------

export const beaconRangingInit = (beacons: Array<RangingBeacon>) => ({
  type: BEACON_RANGING_INIT,
  beacons
});

export const beaconRangingSuccess = (beacons: Array<RangingBeacon>) => ({
  type: BEACON_RANGING_SUCCESS,
  beacons
});

export const beaconRangingStart = () => ({
  type: BEACON_RANGING_START
});

export const beaconRangingStop = () => ({
  type: BEACON_RANGING_STOP
});

export const beaconRangingError = (error: Error) => ({
  type: BEACON_RANGING_ERROR,
  error
});
