import { all, call, put, takeLatest } from "redux-saga/effects";
import * as CONSTANTS from './constants';
import * as actions from './actions';
import * as services from "./service";

import { VehicleInterface } from "@/utils/interfaces";

function* getVehicleListSaga({payload}: any) {
    try {
        // Getting vehicle list
        const response: { data: VehicleInterface[] } =
            yield services.getVehicleList(payload);
        // set data
        yield put(actions.getVehicleListSuccess(response.data));

    } catch (error) {
        // set error
        yield put(actions.getVehicleListFailure("Error in vehicle saga"));
    }
}

function* getVehicleByIdSaga({ payload }: any) {
    try {
        // Getting vehicle by id
        const response: { data: VehicleInterface } =
            yield services.getVehicleById(payload);
        // set data
        yield put(actions.getVehicleByIdSuccess(response.data));

    } catch (error) {
        // set error
        yield put(actions.getVehicleListFailure("Error in vehicle saga"));
    }
}

function* getVehicleByBrandSaga({ payload }: any) {
    try {
        // Getting vehicle by brand
        const response: { data: VehicleInterface } =
            yield services.getVehicleByBrand(payload);
        // set data
        yield put(actions.getVehicleByBrandSuccess(response.data));

    } catch (error) {
        // set error
        yield put(actions.getVehicleByBrandFailure("Error in vehicle saga"));
    }
}

function* vehicleSaga() {
    yield all([
        takeLatest(CONSTANTS.GET_VEHICLE_LIST, getVehicleListSaga),
        takeLatest(CONSTANTS.GET_VEHICLE_BY_ID, getVehicleByIdSaga),
        takeLatest(CONSTANTS.GET_VEHICLES_BY_BRAND, getVehicleByBrandSaga),
    ]);
}

export default vehicleSaga;
