import axios from "axios";
import qs from "qs";
import { VEHICLE_ENDPOINT } from "@/utils/endPoints";

const apiEndpoint = process.env.NEXT_PUBLIC_BASE_API;

export function getVehicleList(page = 1) {
    if (!apiEndpoint) {
        throw new Error("NEXT_PUBLIC_BASE_API environment variable is not defined.");
    }

    const queryParams = qs.stringify({ _page: page, _limit: 5});

    return axios.get(`${apiEndpoint}${VEHICLE_ENDPOINT}?${queryParams}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export function getVehicleById(id: string) {
    if (!apiEndpoint) {
        throw new Error("NEXT_PUBLIC_BASE_API environment variable is not defined.");
    }

    return axios.get(`${apiEndpoint}${VEHICLE_ENDPOINT}/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}