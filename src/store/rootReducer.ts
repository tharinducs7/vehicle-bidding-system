import { vehicleReducer } from "./vehicle/reducer";
import { bidReducer } from './bids/reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
    bids: bidReducer
})

export default rootReducer;