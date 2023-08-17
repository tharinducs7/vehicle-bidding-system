import type * as CONSTANTS from "./constants";
import { VehicleInterface } from "@/utils/interfaces";

/****************************** GET VEHICLE LIST **********************************/
export type GetVehicleList = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST;
    payload: number
};

export type GetVehicleListSuccess = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST_SUCCESS;
    payload: VehicleInterface[];
};

export type GetVehicleListFailure = {
    type: typeof CONSTANTS.GET_VEHICLE_LIST_FAILURE;
    payload: string;
};

/****************************** GET PAGINATIONS **********************************/
export type SetCurrentPage = {
    type: typeof CONSTANTS.SET_CURRENT_PAGE;
    payload: number;
};

export type SetTotalPages = {
    type: typeof CONSTANTS.SET_TOTAL_PAGES;
    payload: number;
};

/****************************** GET VEHICLE BY ID **********************************/
export type GetVehicleById = {
    type: typeof CONSTANTS.GET_VEHICLE_BY_ID;
    payload: string
};

export type GetVehicleByIdSuccess = {
    type: typeof CONSTANTS.GET_VEHICLE_BY_ID_SUCCESS;
    payload: VehicleInterface;
};

export type GetVehicleByIdFailure = {
    type: typeof CONSTANTS.GET_VEHICLE_BY_ID_FAILURE;
    payload: string;
};

/****************************** GET VEHICLE BY BRAND **********************************/
export type GetVehicleByBrand = {
    type: typeof CONSTANTS.GET_VEHICLES_BY_BRAND;
    payload: string
};

export type GetVehicleByBrandSuccess = {
    type: typeof CONSTANTS.GET_VEHICLES_BY_BRAND_SUCCESS;
    payload: VehicleInterface;
};

export type GetVehicleByBrandFailure = {
    type: typeof CONSTANTS.GET_VEHICLES_BY_BRAND_FAILURE;
    payload: string;
};

export type VehicleActions =
    | GetVehicleList
    | GetVehicleListSuccess
    | GetVehicleListFailure
    | SetCurrentPage
    | SetTotalPages
    | GetVehicleById
    | GetVehicleByIdSuccess
    | GetVehicleByIdFailure
    | GetVehicleByBrand
    | GetVehicleByBrandSuccess
    | GetVehicleByBrandFailure;

