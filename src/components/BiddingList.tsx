import React from 'react';
import AuctionItem from './AcutionItem';
import { BidInterface } from '@/utils/interfaces';

interface BiddingListProps {
    bids: BidInterface[];
}

const BiddingList = ({ bids }: BiddingListProps) => {
    const totalBidValue = bids.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue.bidValue;
    }, 0);

    return (
        <div className="card-body">
            <span className="text-sm text-black">{bids.length} {bids.length > 1 ? 'Items':  'Item'}</span>
            <div className="max-h-60 overflow-y-auto p-2 mt-2">
                {bids.map((bid: BidInterface, index: Number) => (
                    <AuctionItem key={bid.vehicleId} bid={bid} />
                ))}
            </div>
            <span className="text-blue-500 font-semibold text-xl text-right">
                Total: {`${Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(totalBidValue)}`}
            </span>
        </div>
    );
};

export default BiddingList;