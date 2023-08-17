import * as CONSTANTS from "./constants";
import type * as types from "./types";
import { VehicleInterface } from "@/utils/interfaces";

export const getVehicleList = (payload: number): types.GetVehicleList => ({
    type: CONSTANTS.GET_VEHICLE_LIST,
    payload
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

export const setCurrentPage = (
    payload: number
): types.SetCurrentPage => ({
    type: CONSTANTS.SET_CURRENT_PAGE,
    payload,
});

export const setTotalPages = (
    payload: number
): types.SetTotalPages => ({
    type: CONSTANTS.SET_TOTAL_PAGES,
    payload,
});

// Get vehicle by Id
export const getVehicleById = (payload: string): types.GetVehicleById => ({
    type: CONSTANTS.GET_VEHICLE_BY_ID,
    payload
});

export const getVehicleByIdSuccess = (
    payload: VehicleInterface
): types.GetVehicleByIdSuccess => ({
    type: CONSTANTS.GET_VEHICLE_BY_ID_SUCCESS,
    payload,
});

export const getVehicleByIdFailure = (
    payload: string
): types.GetVehicleByIdFailure => ({
    type: CONSTANTS.GET_VEHICLE_BY_ID_FAILURE,
    payload,
});
