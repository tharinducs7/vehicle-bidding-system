import * as CONSTANTS from "./constants";
import type * as types from "./types";
import { VehicleInterface } from "@/utils/interfaces";

export const getVehicleList = (): types.GetVehicleList => ({
    type: CONSTANTS.GET_VEHICLE_LIST,
});

export const getVehicleListSuccess = (
    payload: VehicleInterface[]
): types.GetVehicleListSuccess => ({
    type: CONSTANTS.GET_VEHICLE_LIST_SUCCESS,
    payload,
});

export const getVehicleListFailure = (
    payload: string
): types.GetVehicleListFailure => ({
    type: CONSTANTS.GET_VEHICLE_LIST_FAILURE,
    payload,
});