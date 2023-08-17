/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getVehicleById } from '@/store/vehicle/actions';
import dummyCar from "../../../public/dummycar.png"

import BidForm from '@/components/BidForm';
import Link from 'next/link';

const VehicleDetails = () => {
    const router = useRouter()
    const dispatch = useDispatch();

    const vehicle = useSelector((state: any) => state.vehicles.vehicleById);

    const { id, name, details } = vehicle;
    const { image, brand, price, color, manufactureYear, description } = details;

    useEffect(() => {
        if (router.query.id !== undefined) {
            const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;
            dispatch(getVehicleById(id));
        }
    }, [dispatch, router.query.id]);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10">
            <figure>
                <img src={image ? image : dummyCar} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{brand} {name} {manufactureYear}</h2>
                <div className="mb-4">{description}</div>

                <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Color</h3>
                    <div
                        className="w-16 h-16 rounded-full mb-2"
                        style={{ backgroundColor: color }}
                    ></div>
                </div>
                <form>
                    <BidForm
                        vehicleId={id}
                        minBid={price}
                        brand={brand}
                        image={image}
                        name={name}
                        year={manufactureYear}
                    />
                </form>
            </div>

            <div className="card-actions justify-end mr-5">
                <Link className="btn btn-primary" href={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default VehicleDetails