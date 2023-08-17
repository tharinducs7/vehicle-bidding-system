import { fetchStatus } from "../types";

export interface VehicleInterface {
    id: number;
    name: string;
    year: number;
    details: {
        currency: string;
        price: Number;
        color: string;
        brand: string;
        manufactureYear: Number;
        image: string;
        description: string
    }
}

export interface VehicleStateInterface {
    vehicleList: VehicleInterface[];
    fetchStatus: fetchStatus;
    error: string;
}