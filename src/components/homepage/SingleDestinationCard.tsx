"use client";

import Image from "next/image";
import { TOUR_PACKAGES } from "@/utils/tour-data";
import Link from "next/link";

interface SingleDestinationCardProps {
  destination: {
    name: string;
    image: string;
    link: string;
    state_province: string;
  };
}

const SingleDestinationCard = ({
  destination: { name, image, link, state_province },
}: SingleDestinationCardProps) => {
  const tours = TOUR_PACKAGES.filter(
    (tour) =>
      tour?.state_province?.toLowerCase() === state_province.toLowerCase()
  );

  return (
    <div className="flex-shrink-0 flex-grow relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-sm group p-4 flex items-center justify-center">
      <Image src={image} alt={name} className="object-cover" fill />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-0 max-h-0 group-hover:max-w-full group-hover:max-h-full bg-black bg-opacity-65 flex duration-300 ease-in-out transition-all"></div>
      <div className="border-2 w-full h-full text-center border-white flex flex-col items-center justify-center z-20 duration-300 ease-in-out transition-all opacity-0 group-hover:opacity-100 delay-75">
        <Link href={link}>
          <h2 className="text-white text-2xl font-semibold text-center">
            {name}
          </h2>
        </Link>
        <p className="text-sm text-white mt-2">
          {tours.length} {tours.length > 1 ? "Tours" : "Tour"}
        </p>
      </div>
    </div>
  );
};

export default SingleDestinationCard;
