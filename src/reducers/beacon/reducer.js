// @flow
import { clone } from 'ramda';

import type { Beacon, RangingBeacon } from '../../types';

import {
  BEACON_DISCOVERY_SUCCESS,
  BEACON_DISCOVERY_ERROR,
  BEACON_RANGING_SUCCESS,
  BEACON_RANGING_ERROR,
} from '../beacon/constants';

type BeaconState = {
  discoveredBeacons: $ReadOnlyArray<Beacon>,
  rangedBeacons: $ReadOnlyArray<RangingBeacon>,
  isSearching: ?boolean,
  error: ?Error,
};

const initialState: BeaconState = {
  discoveredBeacons: [],
  rangedBeacons: [],
  isSearching: null,
  error: null,
};

export default (
  state: BeaconState = initialState,
  action: {
    type: string,
    error?: string,
    beacons?: Array<Beacon | RangingBeacon>,
  }
) => {
  switch (action.type) {
    case BEACON_DISCOVERY_SUCCESS:
      return {
        ...state,
        discoveredBeacons: action.beacons,
      };
    case BEACON_RANGING_SUCCESS:
      return {
        ...state,
        rangedBeacons: action.beacons,
      };
    case BEACON_DISCOVERY_ERROR:
    case BEACON_RANGING_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
