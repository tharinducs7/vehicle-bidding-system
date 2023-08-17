import { useState } from "react";
import Image from "next/image";
import dummyCar from "../../public/dummycar.png"
import { currencyFormat } from "@/utils/helpers";
import { VehicleInterface } from "@/utils/interfaces";
import BidForm from "./BidForm";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
interface CarCardProps {
    car: VehicleInterface;
}

const CarCard = ({ car }: CarCardProps) => {
    const { id, name, details } = car;
    const { image, brand, price, color, manufactureYear, description } = details;
    const [isOpen, setIsOpen] = useState(false);
 
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src={image ? image : dummyCar}
                        alt='car model' fill priority className='object-contain' />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brand} {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>  <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'></span>
                    {`${Intl.NumberFormat('en-US', { style: 'currency', currency: 'LKR' }).format(price)}`} 
                    <span className='self-end text-[14px] leading-[17px] font-medium'></span>
                </p></p>

                <BidForm
                    vehicleId={id}
                    minBid={price}
                    brand={brand}
                    image={image}
                />

                <div className="card-actions justify-end">
                    <Link href={`vehicle/${id}`} className="badge badge-outline">More Details</Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
