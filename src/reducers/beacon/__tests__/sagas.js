import { createMockTask } from "@redux-saga/testing-utils";
import { call, put } from "redux-saga/effects";
import Kontakt from "react-native-kontaktio";

import { logSth, beaconDiscoverySaga } from "../sagas";
import { beaconDiscoveryStart } from "./../actions";
import { setupBeaconChannel } from "../utils";

describe("logSth", () => {
  const generator = logSth();

  it("waits for call action", () => {
    const expectedYield = call(console.log, "This logs sth!");
    expect(generator.next().value).toEqual(expectedYield);
  });
});

describe("beaconDiscovery", () => {
  const generator = beaconDiscoverySaga();

  it("initializes Kontaktio", () => {
    const expectedYield = call(Kontakt.init);
    expect(generator.next().value).toEqual(expectedYield);
  });

  it("start beacon discovery", () => {
    const expectedYield = call(Kontakt.startDiscovery);
    expect(generator.next().value).toEqual(expectedYield);
  });

  it("notifies the store that beacon discovery has begun", () => {
    const expectedYield = put(beaconDiscoveryStart());
    expect(generator.next().value).toEqual(expectedYield);
  });

  it("sets up a beacon channel", () => {
    const expectedYield = call(setupBeaconChannel);
    const mockedChannel = { close: () => {}, flush: () => {}, take: () => {} };
    expect(generator.next(mockedChannel).value).toEqual(expectedYield);
  });

  // it("forks the service", () => {
  //   // The expected yield is a plain JS object
  //   const expectedYield = fork(bgSync);
  //   // The mocked action is pushed to the generator and can be yielded next
  //   const mockedAction = { type: "START_BACKGROUND_SYNC" };
  //   // QUESTION to test: Is it necessary here to pass `mockedAction`?
  //   expect(generator.next(mockedAction).value).to.deep.equal(expectedYield);
  // });
});
