import { all, call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from './constants';
import * as actions from './actions';
import * as services from "./service";

import { VehicleInterface } from "@/utils/interfaces";


function* getVehicleListSaga() {
    try {
        // Getting vehicle list
        const response: { data: VehicleInterface[] } =
            yield services.getVehicleList();

        yield put(actions.getVehicleListSuccess(response.data));

    } catch (error) {
        console.log(error);
        yield put(actions.getVehicleListFailure("Error in pokemon saga"));
    }
}

function* vehicleSaga() {
    yield all([
        takeLatest(CONSTANTS.GET_VEHICLE_LIST, getVehicleListSaga),
    ]);
}

export default vehicleSaga;
