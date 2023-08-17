/* eslint-disable @next/next/no-img-element */
import { BidInterface } from '@/utils/interfaces';
import React from 'react';

interface AuctionItemProps {
  bid: BidInterface
}

const AuctionItem: React.FC<AuctionItemProps> = ({ bid }) => {
  return (
    <div className="flex bg-white rounded-lg p-4 shadow-md">
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{bid.brand}</h2>
        <p className="text-gray-600"></p>
        <p className="text-blue-500 font-semibold">${bid.bidValue}</p>
      </div>
      <div className="ml-4">
        <img src={bid.image} alt={`${bid.brand}`} className="w-24 h-24 rounded-md" />
      </div>
    </div>
  );
};

export default AuctionItem;
