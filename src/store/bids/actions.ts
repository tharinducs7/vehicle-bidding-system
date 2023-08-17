import * as CONSTANTS from "./constants";
import { BidInterface } from "@/utils/interfaces";
import type * as types from "./types";

export const addBid = (bid: BidInterface): types.AddBidToVehicle => ({
    type: CONSTANTS.ADD_BID,
    payload: bid,
});