import { vehicleReducer } from "./vehicle/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
})

export default rootReducer;