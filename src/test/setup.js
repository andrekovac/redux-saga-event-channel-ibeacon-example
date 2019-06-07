jest.mock("react-native", () => ({
  NetInfo: {
    addEventListener: jest.fn(),
    fetch: () => ({
      done: jest.fn()
    })
  },
  NativeModules: {
    SyncMigration: jest.fn()
  },
  Dimensions: {
    get: () => ({
      width: jest.fn(),
      height: jest.fn()
    })
  },
  Linking: {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn()
  },
  Platform: {
    OS: jest.fn(),
    select: jest.fn()
  },
  AsyncStorage: jest.fn(),
  StyleSheet: {
    create: jest.fn()
  },
  PixelRatio: {
    get: jest.fn()
  },
  ListView: {
    DataSource: jest.fn()
  },
  NativeEventEmitter: jest.fn()
  // Emitter: {
  //   addListener: jest.fn(),
  // },
}));
