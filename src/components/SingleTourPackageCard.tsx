"use client";

import { TourPackage } from "@/interfaces/tour-package.interface";
import Image from "next/image";
import Link from "next/link";
import { BiChild } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";

interface SingleTourPackageCardProps {
  tourPackage: TourPackage;
}

const SingleTourPackageCard = ({ tourPackage }: SingleTourPackageCardProps) => {
  return (
    <div className="border rounded-xl shadow-sm overflow-hidden">
      <div className="relative w-full h-[250px] lg:h-[350px] overflow-hidden">
        <Image
          src={`/images/${tourPackage?.image}.jpg`}
          alt={tourPackage.name}
          fill
          className="object-cover hover:scale-110 duration-200 ease-in-out transition-all rotate-0 hover:rotate-2"
        />
      </div>
      <div className="p-4">
        <Link href={`/tour-packages/${tourPackage?.id}`}>
          <h3 className="text-2xl font-semibold">{tourPackage?.name}</h3>
        </Link>
        <p className="text-sm mb-4">
          <span className="font-medium">Location:</span>{" "}
          {tourPackage?.state_province}, {tourPackage?.country}
        </p>
        <p>{tourPackage?.description}</p>
        <div className="mt-4 flex items-center justify-start gap-4 font-medium flex-wrap">
          <div className="flex items-center gap-2">
            <CiClock1 className="inline text-orange-500" size={18} />
            <p>{tourPackage?.duration}</p>
          </div>

          <div className="flex items-center gap-2">
            <BsPerson className="inline text-orange-500" size={18} />
            <p>
              {tourPackage?.total_adults < 10 && tourPackage?.total_adults > 0
                ? `0${tourPackage?.total_adults}`
                : tourPackage?.total_adults}{" "}
              adults
            </p>
          </div>

          <div className="flex items-center gap-2">
            <BiChild className="inline text-orange-500" size={18} />
            <p>
              {tourPackage?.total_children < 10 &&
              tourPackage?.total_children > 0
                ? `0${tourPackage?.total_children}`
                : tourPackage?.total_children}{" "}
              children
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <p className="font-medium text-lg">${tourPackage?.price}</p>
          <button className="py-2 px-4 rounded-md shadow-md bg-orange-500 hover:bg-orange-600 text-white duration-300 ease-in-out transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTourPackageCard;
