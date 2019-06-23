import { createMockTask } from '@redux-saga/testing-utils';
import { call, put, take } from 'redux-saga/effects';
import Kontakt from 'react-native-kontaktio';

import { logSth, beaconDiscoverySaga } from '../sagas';
import { beaconDiscoveryStart } from './../actions';
import { setupBeaconDiscoveryChannel } from '../utils';

describe('beaconDiscovery', () => {
  const generator = beaconDiscoverySaga();

  it('initializes Kontaktio', () => {
    const expectedYield = call(Kontakt.init);
    expect(generator.next().value).toEqual(expectedYield);
  });

  it('configures beacon library', () => {
    const expectedYield = call(Kontakt.configure, { invalidationAge: 2000 });
    expect(generator.next().value).toEqual(expectedYield);
  });

  it('start beacon discovery', () => {
    const expectedYield = call(Kontakt.startDiscovery);
    expect(generator.next().value).toEqual(expectedYield);
  });

  it('notifies the store that beacon discovery has begun', () => {
    const expectedYield = put(beaconDiscoveryStart());
    expect(generator.next().value).toEqual(expectedYield);
  });

  const mockedChannel = { close: jest.fn(), flush: jest.fn(), take: jest.fn() };

  it('setup beacon channel', () => {
    const expectedYield = call(setupBeaconDiscoveryChannel);
    expect(generator.next().value).toEqual(expectedYield);
  });

  // TODO: Continue with saga test

  // it('takes discovered beacons', () => {
  //   const expectedYield = take(mockedChannel);
  //   expect(generator.next().value).toEqual(expectedYield);
  // });

  // it("forks the service", () => {
  //   // The expected yield is a plain JS object
  //   const expectedYield = fork(bgSync);
  //   // The mocked action is pushed to the generator and can be yielded next
  //   const mockedAction = { type: "START_BACKGROUND_SYNC" };
  //   expect(generator.next(mockedAction).value).to.deep.equal(expectedYield);
  // });
});
