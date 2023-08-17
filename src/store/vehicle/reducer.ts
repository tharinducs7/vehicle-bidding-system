import { VEHICLE_INITIAL_STATE } from "./_initial_state";
import type { VehicleActions } from "./types";
import * as CONSTANTS from "./constants";

export const vehicleReducer = (
    state = VEHICLE_INITIAL_STATE,
    action: VehicleActions
) => {
    switch (action.type) {
        case CONSTANTS.GET_VEHICLE_LIST: {
            return {
                ...state,
                fetchStatus: "success",
            };
        }
        case CONSTANTS.GET_VEHICLE_LIST_FAILURE: {
            return {
                ...state,
                fetchStatus: "fail",
                error: action.payload,
            };
        }
        case CONSTANTS.GET_VEHICLE_LIST_SUCCESS: {
            return {
                ...state,
                fetchStatus: "success",
                vehicleList: action.payload,
            };
        }
        case CONSTANTS.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload };
        }
        case CONSTANTS.SET_TOTAL_PAGES: {
            return { ...state, totalPages: action.payload };
        }
        case CONSTANTS.GET_VEHICLE_BY_ID_FAILURE: {
            return {
                ...state,
                fetchStatus: "fail",
                error: action.payload,
            };
        }
        case CONSTANTS.GET_VEHICLE_BY_ID_SUCCESS: {
            return {
                ...state,
                fetchStatus: "success",
                vehicleById: action.payload,
            };
        }
        default:
            return { ...state };
    }
};
