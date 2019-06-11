export type Beacon = {|
  name: string, // 'Kontakt' by default for Kontakt.io beacons
  uniqueId: string,
  firmwareVersion: string,
  batteryLevel: number, // percentage as int (same as 'batteryPower' for Android)
  batteryPowered: boolean,
  transmissionPower: number, // same as 'txPower' for Android
  hasConfigurationProfile: boolean,
  shuffled: boolean,
  locked: boolean,
  model: string,
  peripheral: string,
  rssi: number,
  updatedAt: number
|};

export type RangingBeacon = {|
  uuid: string,
  major: number,
  minor: number,
  rssi: number,
  proximity: string, // (either IMMEDIATE, NEAR, FAR or UNKNOWN)
  // if Kontakt.io beacon this is useful, otherwise mostly -1 or similar
  accuracy: string //(distance in meters)
|};
