// @flow
import { clone } from "ramda";

import {
  BEACON_DISCOVERY_SUCCESS,
  BEACON_DISCOVERY_ERROR,
  BEACON_RANGING_SUCCESS,
  BEACON_RANGING_ERROR
} from "../beacon/constants";

const initialState = {
  discoveredBeacons: [],
  rangedBeacons: [],
  isSearching: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEACON_DISCOVERY_SUCCESS:
      return {
        ...state,
        discoveredBeacons: action.beacons
      };
    case BEACON_RANGING_SUCCESS:
      return {
        ...state,
        rangedBeacons: action.beacons
      };
    case BEACON_DISCOVERY_ERROR:
    case BEACON_RANGING_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
