// @flow
import { Platform, NativeEventEmitter } from "react-native";
import Kontakt, { KontaktModule } from "react-native-kontaktio";
import { eventChannel } from "redux-saga";
import type { Beacon } from "../../types";

const kontaktEmitter = new NativeEventEmitter(KontaktModule);

const processBeacons = (beacons: Array<Beacon>) => {
  // Filter / Get interesting values out of beacon
  console.log("didDiscoverDevices", beacons);

  return beacons;
};

export const setupBeaconChannel = () =>
  eventChannel<Array<Beacon>>(emitter => {
    let listener;

    // Add beacon listener
    listener =
      kontaktEmitter &&
      kontaktEmitter.addListener("didDiscoverDevices", ({ beacons }) => {
        emitter(processBeacons(beacons));
      });

    // Unsubscribe function
    return () => {
      if (listener) listener.remove();
    };
  });
