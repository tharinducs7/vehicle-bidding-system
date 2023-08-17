/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getVehicleById } from '@/store/vehicle/actions';
import dummyCar from "../../../public/dummycar.png"
import Image from "next/image";
import BidForm from '@/components/BidForm';

const VehicleDetails = () => {
    const router = useRouter()
    console.log(router.query.id, "iddddddddd")

    const dispatch = useDispatch();
    const vehicle = useSelector((state: any) => state.vehicles.vehicleById);
    console.log(vehicle, "vehicle")
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
        
            <h2 className="text-xl font-semibold mb-2">
                {name} - {manufactureYear}
            </h2>
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
                />
            </form>
       
          
        </div>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
    


    )
}

export default VehicleDetails