export interface BidInterface {
    vehicleId: number;
    brand: string;
    name: string;
    year: number;
    image: string;
    bidValue: number;
}

export interface BidStateInterface {
    bids: BidInterface[];
    error: string;
}