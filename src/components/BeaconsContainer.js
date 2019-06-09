import { connect } from "react-redux";

import BeaconScreen from "./BeaconsScreen";
import { beaconDiscoveryInit } from "../reducers/beacon/actions";

const mapStateToProps = state => {
  const { beacons, error, isSearching } = state.beacon;

  return {
    beacons,
    isSearching,
    error
  };
};

const mapDispatchToProps = {
  beaconDiscoveryInit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeaconScreen);
