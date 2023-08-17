import Head from 'next/head'
import Image from 'next/image'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicleList } from '@/store/vehicle/actions';
import { CarCard } from '@/components';
import { VehicleInterface } from '@/utils/interfaces';

export default function Home() {
  const vehicles = useSelector((state: any) => state.vehicles);
  console.log(vehicles, "vehicles here");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicleList());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="text-red p-4">
          This is a component with Tailwind CSS styles.

          <div className="grid gap-4 grid-cols-3">
            {vehicles.vehicleList.map((vehicle: VehicleInterface, index: Number) => (
              <CarCard key={vehicle.id} car={vehicle} />
            ))}
          </div>

        </div>
      </main>
    </>
  )
}