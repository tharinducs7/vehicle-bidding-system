/* eslint-disable @next/next/no-img-element */
import { BidInterface } from '@/utils/interfaces';
import React from 'react';
import Image from "next/image";
import dummyCar from "../../public/dummycar.png"
interface AuctionItemProps {
  bid: BidInterface
}

const AuctionItem: React.FC<AuctionItemProps> = ({ bid }) => {
  return (
    <div className="flex bg-white rounded-lg p-4 shadow-md m-1">
      <div className="flex-grow">
        <h2 className="text-lg text-black">{bid.brand} </h2>
        <p className="text-gray-600"> {bid.name} {bid.year}</p>
        <p className="text-gray-400 font-semibold mt-3">
            {`${Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(bid.bidValue)}`}
        </p>
      </div>
      <div className="ml-4">
        
          <div className='w-24 h-24 my-3 object-contain'>
                <Image src={bid.image ? bid.image : dummyCar}
                        width={96} 
                        height={72} 
                        objectFit='contain'
                        alt={bid.name} 
                        priority 
                    className='object-contain'
                />
            </div>
      </div>
    </div>
  );
};

export default AuctionItem;
