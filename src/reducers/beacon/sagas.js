// @flow
import type { Saga } from 'redux-saga';
import {
  take,
  takeLatest,
  fork,
  cancel,
  cancelled,
  call,
  put,
} from 'redux-saga/effects';

import { BEACON_DISCOVERY_INIT, BEACON_RANGING_INIT } from './constants';
import {
  beaconDiscoveryStart,
  beaconDiscoveryStop,
  beaconDiscoverySuccess,
  beaconDiscoveryError,
  beaconRangingStart,
  beaconRangingStop,
  beaconRangingSuccess,
  beaconRangingError,
} from './actions';
import {
  setupBeaconDiscoveryChannel,
  setupBeaconRangingChannel,
} from './utils';
import Kontakt from 'react-native-kontaktio';

export const beaconRangingSaga = function* beaconRangingSaga(): Saga<void> {
  yield call(Kontakt.init);
  // yield call(Kontakt.configure, {
  //   invalidationAge: 2000
  // });
  yield call(Kontakt.startRangingBeaconsInRegion, {
    uuid: 'AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA',
  });
  yield put(beaconRangingStart());

  const beaconChannel = yield call(setupBeaconRangingChannel);

  try {
    while (true) {
      const rangedBeacons = yield take(beaconChannel);

      if (rangedBeacons) {
        yield put(beaconRangingSuccess(rangedBeacons));
      }
    }
  } catch (error) {
    yield put(beaconRangingError(error));
  } finally {
    if (yield cancelled()) {
      yield call(beaconChannel.close);
      yield put(beaconRangingStop());
    }
  }
};

export const beaconDiscoverySaga = function* beaconDiscoverySaga(): Saga<void> {
  yield call(Kontakt.init);
  yield call(Kontakt.configure, {
    invalidationAge: 2000,
  });
  yield call(Kontakt.startDiscovery);
  yield put(beaconDiscoveryStart());

  const beaconChannel = yield call(setupBeaconDiscoveryChannel);

  try {
    while (true) {
      const discoveredBeacons = yield take(beaconChannel);

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
  yield takeLatest(BEACON_DISCOVERY_INIT, beaconDiscoverySaga);
};

/**
 * TakeLatest implementation - as reference
 */
const discoverBeaconsWatcherWithTake = () =>
  fork(function*() {
    let lastTask;
    while (true) {
      yield take(BEACON_DISCOVERY_INIT);
      if (lastTask) {
        yield cancel(lastTask);
      }
      lastTask = yield fork(beaconDiscoverySaga);
    }
  });

const rangeBeaconsWatcher = function* rangeBeaconsWatcher(): Saga<void> {
  yield takeLatest(BEACON_RANGING_INIT, beaconRangingSaga);
};

export default [discoverBeaconsWatcher, rangeBeaconsWatcher];
