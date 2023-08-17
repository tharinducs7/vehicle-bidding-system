import { fetchStatus } from "../types";

export interface VehicleInterface {
    id: number;
    name: string;
    year: number;
    details: {
        currency: string;
        price: number;
        color: string;
        brand: string;
        manufactureYear: number;
        image: string;
        description: string
    }
}

export interface VehicleStateInterface {
    vehicleList: VehicleInterface[];
    vehicleById: VehicleInterface;
    fetchStatus: fetchStatus;
    error: string;
    currentPage: number,
    totalPages: number,
}