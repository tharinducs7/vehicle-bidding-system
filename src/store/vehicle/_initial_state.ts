import { VehicleStateInterface } from "@/utils/interfaces";

export const VEHICLE_INITIAL_STATE: VehicleStateInterface = {
    vehicleList: [],
    vehicleById: {
        id: 0,
        name: "",
        year: 0,
        details: {
            currency: "",
            price: 0,
            color: "",
            brand: "",
            manufactureYear: 0,
            image: "",
            description: ""
        }
    },
    fetchStatus: "idle",
    error: "",
    currentPage: 1,
    totalPages: 1,
};
