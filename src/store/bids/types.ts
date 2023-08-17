import * as CONSTANTS from "./constants";
import { BidInterface } from "@/utils/interfaces";

export type AddBidToVehicle = {
    type: typeof CONSTANTS.ADD_BID;
    payload: BidInterface
};

export type BidActions =
    | AddBidToVehicle;

