import { connect } from 'react-redux';

import BeaconScreen from '../components/BeaconScreen';
import {
  beaconDiscoveryInit,
  beaconRangingInit,
} from '../reducers/beacon/actions';

const mapStateToProps = state => {
  const { discoveredBeacons, rangedBeacons, error, isSearching } = state.beacon;

  return {
    discoveredBeacons,
    rangedBeacons,
    isSearching,
    error,
  };
};

const mapDispatchToProps = {
  beaconDiscoveryInit,
  beaconRangingInit,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeaconScreen);
