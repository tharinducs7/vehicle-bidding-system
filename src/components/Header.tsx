import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import BiddingList from './BiddingList';
import { getVehicleByBrand, getVehicleList } from '@/store/vehicle/actions';

const Header = () => {
  const bids = useSelector((state: any) => state.bids.bids);
  const dispatch = useDispatch();

  const handleBrandChange = (event: any) => {
   
    if(event.target.value !== "ALL") {
      dispatch(getVehicleByBrand(event.target.value));
    } else {
      dispatch(getVehicleList(1));
    }
  };

  return (
    <div className="navbar text-primary-content fixed top-0 left-0 right-0 z-30 bg-slate-500">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href='/'> Car Portal </Link>
      </div>
      <div className="flex-none">
        <select className="select select-primary w-full max-w-xs text-black mr-6" name='vehicle-brands' onChange={handleBrandChange} >
          <option disabled selected>Filter by Brand</option>
          <option value={"ALL"}>ALL Brands</option>
          <option value={"Volkswagen"}>Volkswagen</option>
          <option value={"Audi"}>Audi</option>
          <option value={"Ford"}>Ford</option>
          <option value={"Mercedes"}>Mercedes</option>
          <option value={"BMW"}>BMW</option>
        </select>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-square bg-white">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm badge-secondary indicator-item">{bids.length}</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content bg-base-100 shadow w-96">
            <BiddingList bids={bids} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header