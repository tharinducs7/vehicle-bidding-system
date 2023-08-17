import { BID_INITIAL_STATE } from "./_initial_state";
import type { BidActions } from "./types";
import * as CONSTANTS from "./constants";

export const bidReducer = (
    state = BID_INITIAL_STATE,
    action: BidActions
) => {
    switch (action.type) {
        case CONSTANTS.ADD_BID: {
            return {
                ...state,
                bids: [...state.bids, action.payload],
            };
        }
        default:
            return { ...state };
    }
};
