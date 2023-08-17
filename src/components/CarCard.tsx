import { useState } from "react";
import Image from "next/image";
import dummyCar from "../../public/dummycar.png"

import { VehicleInterface } from "@/utils/interfaces";
import BidForm from "./BidForm";

import Link from "next/link";
interface CarCardProps {
    car: VehicleInterface;
}

const CarCard = ({ car }: CarCardProps) => {
    const { id, name, details } = car;
    const { image, brand, price, color, manufactureYear, description } = details;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src={image ? image : dummyCar}
                        alt='car model' fill priority className='object-contain' />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brand} {name}
                    <div className="badge" style={{ backgroundColor: color }}> </div>
                </h2>

                <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-end text-[14px] leading-[17px] font-medium'>
                        {`${Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(price)}`}
                    </span>
                </p>

                <BidForm 
                    vehicleId={id} 
                    minBid={price} 
                    brand={brand} 
                    image={image} 
                    name={name} 
                    year={manufactureYear} 
                />

                <div className="card-actions justify-end">
                    <Link href={`vehicle/${id}`} className="badge badge-info gap-2 p-4">
                        <label className="text-white">More Details</label>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
