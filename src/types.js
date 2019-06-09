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
