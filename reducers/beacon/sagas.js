// @flow
import type { Saga } from "redux-saga";
import {
  take,
  takeEvery,
  select,
  fork,
  race,
  cancel,
  call,
  put
} from "redux-saga/effects";

const logSth = function* logSth(): Saga<void> {
  yield call(console.log, "This logs sth!");
};

const connectBeaconWatcher = function* connectBeaconWatcher(): Saga<void> {
  yield takeEvery("HELLO", logSth);
};

export default [connectBeaconWatcher];
