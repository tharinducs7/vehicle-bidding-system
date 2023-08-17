import axios from "axios";

export function getVehicleList() {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

    if (!apiEndpoint) {
        throw new Error("NEXT_PUBLIC_API_ENDPOINT environment variable is not defined.");
    }

    return axios.get(apiEndpoint, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}