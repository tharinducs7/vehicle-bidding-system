export interface BidInterface {
    vehicleId: number;
    brand: string;
    image: string;
    bidValue: number;
}

export interface BidStateInterface {
    bids: BidInterface[];
    error: string;
}