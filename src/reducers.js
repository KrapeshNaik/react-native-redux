import { combineReducers } from 'redux';

// Reducers
import devicesReducer from './components/Devices/reducer';

export default combineReducers({
    devices: devicesReducer
});