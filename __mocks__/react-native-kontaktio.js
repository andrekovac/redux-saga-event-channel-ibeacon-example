/**
 * Mock of react-native-kontaktio functions exposed to [iOS]
 *
 * To test the functions of the [Android] version, replace the mock using `mockImplementation()` or `mockImplementationOnce()`
 * Details: https://jestjs.io/docs/en/es6-class-mocks#replacing-the-mock-using-mockimplementation-docs-en-mock-function-api-mockfnmockimplementationfn-or-mockimplementationonce-docs-en-mock-function-api-mockfnmockimplementationoncefn
 */

const Kontakt = {
  init: jest.fn(),
  configure: jest.fn(),
  // authorization
  getAuthorizationStatus: jest.fn(),
  requestWhenInUseAuthorization: jest.fn(),
  requestAlwaysAuthorization: jest.fn(),
  // discovery
  startDiscovery: jest.fn(),
  stopDiscovery: jest.fn(),
  restartDiscovery: jest.fn(),
  isDiscovering: jest.fn(),
  // ranging
  startRangingBeaconsInRegion: jest.fn(),
  stopRangingBeaconsInRegion: jest.fn(),
  stopRangingBeaconsInAllRegions: jest.fn(),
  getRangedRegions: jest.fn(),
  // monitoring
  startMonitoringForRegion: jest.fn(),
  stopMonitoringForRegion: jest.fn(),
  stopMonitoringForAllRegions: jest.fn(),
  getMonitoredRegions: jest.fn(),
  requestStateForRegion: jest.fn(),
};

module.exports = {
  KontaktModule: {},
  ...Kontakt,
};
