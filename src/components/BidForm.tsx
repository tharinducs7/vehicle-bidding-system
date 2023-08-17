// components/BidForm.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBid } from "@/store/bids/actions";

interface BidFormProps {
    vehicleId: number;
    brand: string;
    image: string;
    minBid: number;
    //onSubmit: (vehicleId: number, bidPrice: number) => void;
}

const BidForm: React.FC<BidFormProps> = ({ vehicleId, brand, image, minBid }) => {
    const [bidPrice, setBidPrice] = useState('');
    const dispatch = useDispatch();
    const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
            setBidPrice(value);
        }
    };

    const handleSubmit = () => {
        const parsedBidPrice = parseInt(bidPrice);
        if (parsedBidPrice >= minBid) {
            handleAddBid(parsedBidPrice);
            setBidPrice('');
        }
    };

    const handleAddBid = (bidPrice: number) => {
        console.log(vehicleId, bidPrice, "bidPrice");
        const bid = {
            vehicleId: vehicleId,
            brand: brand,
            image: image,
            bidValue: bidPrice,
        };

        dispatch(addBid(bid));
    };


    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your Bid?</span>
                </label>
                <input onChange={handleBidChange} type="number" placeholder={`Enter bid (min: ${minBid})`} className="input input-bordered w-full max-w-xs" />
            </div>
            <button
                onClick={handleSubmit}
                disabled={!bidPrice || parseInt(bidPrice) < minBid}
                className="btn btn-info mt-3">
                Place Bid
            </button>
        </div>
    );
};

export default BidForm;
