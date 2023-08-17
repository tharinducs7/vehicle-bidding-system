import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addBid } from "@/store/bids/actions";
import { toast } from 'react-toastify';
interface BidFormProps {
    vehicleId: number;
    brand: string;
    image: string;
    minBid: number;
    name: string;
    year: number;
}

const BidForm: React.FC<BidFormProps> = ({ vehicleId, brand, image, minBid, name, year }) => {
    const [bidPrice, setBidPrice] = useState('');
    const dispatch = useDispatch();

    const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (!isNaN(parseInt(value)) && parseInt(value) > 0) {
            setBidPrice(value);
        }
    };

    const handleSubmit = () => {
        const parsedBidPrice = parseInt(bidPrice);
        if (parsedBidPrice >= minBid+1) {
            handleAddBid(parsedBidPrice);
            setBidPrice('');
        }
    };

    const handleAddBid = (bidPrice: number) => {
        const bid = {
            vehicleId,
            brand,
            image,
            bidValue: bidPrice,
            name,
            year
        };
        dispatch(addBid(bid));
        toast.success("Successfully Placed the Bid!");
    };

    return (
        <div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your Bid?</span>
                </label>
                <input onChange={handleBidChange} type="number" min={minBid+1} placeholder={`Enter bid (min: ${minBid+1})`} className="input input-bordered w-full max-w-xs" />
            </div>
            <button
                onClick={handleSubmit}
                disabled={!bidPrice || parseInt(bidPrice) < minBid+1}
                className="btn btn-success mt-3">
                <label className='text-white'>Place Bid</label>
            </button>
        </div>
    );
};

export default BidForm;
