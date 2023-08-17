import type * as CONSTANTS from "./constants";
import { VehicleInterface } from "@/utils/interfaces";

/****************************** GET VEHICLE LIST **********************************/
export type GetVehicleList = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST;
};

export type GetVehicleListSuccess = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST_SUCCESS;
    payload: VehicleInterface[];
};

export type GetVehicleListFailure = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST_FAILURE;
    payload: string;
};

export type VehicleActions =
    | GetVehicleList
    | GetVehicleListSuccess
    | GetVehicleListFailure;

