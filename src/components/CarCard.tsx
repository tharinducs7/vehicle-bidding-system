import { useState } from "react";
import Image from "next/image";
import dummyCar from "../../public/dummycar.png"

import { VehicleInterface } from "@/utils/interfaces";

interface CarCardProps {
    car: VehicleInterface;
}

const CarCard = ({ car }: CarCardProps) => {
    const { name, details } = car;
    const { image, brand, price, color, manufactureYear, description } = details;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <div className='relative w-full h-40 my-3 object-contain'>
                    <Image src={ image ? image : dummyCar}
                        alt='car model' fill priority className='object-contain' />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {brand} {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>  <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                    <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                    {`${price}`}
                    <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                </p></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}

export default CarCard;
