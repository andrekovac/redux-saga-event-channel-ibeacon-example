// @flow
import type { Saga } from "redux-saga";
import { fork, all } from "redux-saga/effects";

import beaconSagas from "./reducers/beacon/sagas";

const sagas = [...beaconSagas];

// Single entry point to start all sagas at once
const root = function* rootSaga(): Saga<void> {
  yield all(sagas.map(saga => fork(saga)));
};

export default root;
