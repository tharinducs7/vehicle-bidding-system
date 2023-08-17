import { all, call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from './constants';
import * as actions from './actions';
import * as services from "./service";

import { VehicleInterface } from "@/utils/interfaces";


function* getVehicleListSaga({payload}: any) {
    try {
        console.log(payload, "payload");
        
        // Getting vehicle list
        const response: { data: VehicleInterface[] } =
            yield services.getVehicleList(payload);

        yield put(actions.getVehicleListSuccess(response.data));

    } catch (error) {
        console.log(error);
        yield put(actions.getVehicleListFailure("Error in vehicle saga"));
    }
}

function* getVehicleByIdSaga({ payload }: any) {
    try {
        console.log(payload, "payload");

        // Getting vehicle by id
        const response: { data: VehicleInterface } =
            yield services.getVehicleById(payload);

        console.log(response, "responseid");

        yield put(actions.getVehicleByIdSuccess(response.data));

    } catch (error) {
        console.log(error);
        yield put(actions.getVehicleListFailure("Error in vehicle saga"));
    }
}

function* vehicleSaga() {
    yield all([
        takeLatest(CONSTANTS.GET_VEHICLE_LIST, getVehicleListSaga),
        takeLatest(CONSTANTS.GET_VEHICLE_BY_ID, getVehicleByIdSaga),
    ]);
}

export default vehicleSaga;
