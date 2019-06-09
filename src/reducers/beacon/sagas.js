// @flow
import type { Saga } from "redux-saga";
import {
  take,
  takeEvery,
  select,
  fork,
  race,
  cancel,
  cancelled,
  call,
  put
} from "redux-saga/effects";

import { BEACON_DISCOVERY_INIT } from "./constants";
import {
  beaconDiscoveryStart,
  beaconDiscoveryStop,
  beaconDiscoverySuccess,
  beaconDiscoveryError
} from "./actions";
import { setupBeaconChannel } from "./utils";
import Kontakt from "react-native-kontaktio";

export const logSth = function* logSth(): Saga<void> {
  yield call(console.log, "This logs sth!");
};

export const beaconDiscoverySaga = function* beaconDiscoverySaga(): Saga<void> {
  yield call(Kontakt.init);
  yield call(Kontakt.startDiscovery);
  yield put(beaconDiscoveryStart());

  const beaconChannel = yield call(setupBeaconChannel);

  try {
    while (true) {
      console.log("start discovery");
      const discoveredBeacons = yield take(beaconChannel);
      console.log("end discovery");

      if (discoveredBeacons) {
        yield put(beaconDiscoverySuccess(discoveredBeacons));
      }
    }
  } catch (error) {
    yield put(beaconDiscoveryError(error));
  } finally {
    if (yield cancelled()) {
      yield call(beaconChannel.close);
      yield put(beaconDiscoveryStop());
    }
  }
};

const discoverBeaconsWatcher = function* discoverBeaconsWatcher(): Saga<void> {
  try {
    yield takeEvery(BEACON_DISCOVERY_INIT, beaconDiscoverySaga);
  } catch (error) {
    console.error(error);
  }
};

export default [discoverBeaconsWatcher];
