// @flow
import { clone } from "ramda";

import {
  BEACON_DISCOVERY_INIT,
  BEACON_DISCOVERY_SUCCESS,
  BEACON_DISCOVERY_ERROR
} from "../beacon/constants";

const initialState = {
  beacons: [],
  isSearching: null,
  error: null
};

// const addBeacons = (beacons, state) => {
//   const newBeacons = clone(state.beacons);

//   beacons.map(beacon => {
//     if (state.beacons.includes(beacon.uniqueId)) {
//       newBeacons.push(beacon);
//     }
//   });
// };

export default (state = initialState, action) => {
  switch (action.type) {
    case BEACON_DISCOVERY_INIT:
      return state;
    case BEACON_DISCOVERY_SUCCESS:
      console.log({ newBeacons: action.beacons, oldBeacons: state.beacons });
      return {
        ...state,
        beacons: action.beacons
      };
    case BEACON_DISCOVERY_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
