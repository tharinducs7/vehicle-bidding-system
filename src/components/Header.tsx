import React from 'react'
import Link from 'next/link'
import AuctionItem from "./AcutionItem";
import { useSelector } from "react-redux";
import { BidInterface } from '@/utils/interfaces';

const Header = () => {
  const bids = useSelector((state: any) => state.bids.bids);

  const totalBidValue = bids.reduce((accumulator: any, currentValue: any) => {
    return accumulator + currentValue.bidValue;
}, 0);

  return (
 <div className="navbar bg-primary text-primary-content">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" href='/'> Car Portal </Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{bids.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow w-96">
        <div className="card-body">
          <span className="font-bold text-lg">{bids.length} Items</span>

  {bids.map((bid: BidInterface, index: Number) => (
              <AuctionItem key={bid.vehicleId} bid={bid} />
            ))}

              


          <span className="text-info">Total:  {`${Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(totalBidValue)}`}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View All</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Header