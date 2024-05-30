"use client";

import { HOME_PAGE } from "@/utils/data";
import BoxedContainer from "../boxed-container";
import Image from "next/image";

const AboutSection = () => {
  return (
    <BoxedContainer className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
      <div className="flex-1">
        <h2 className="text-orange-500 text-sm font-semibold">
          {HOME_PAGE?.about_section?.title}
        </h2>
        <h3 className="font-bold text-3xl md:text-4xl mt-2 mb-4">
          {HOME_PAGE?.about_section?.subtitle}
        </h3>
        <p className="opacity-80 leading-loose mb-6 ">
          {HOME_PAGE?.about_section?.description}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {HOME_PAGE?.about_section?.highlights?.map((highlight, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">{highlight?.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  {highlight?.title}
                </h4>
                <p className="text-sm opacity-75">{highlight?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5">
        <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] row-span-1 col-span-1 rounded-lg shadow-sm overflow-hidden">
          <Image
            src={HOME_PAGE?.about_section?.image}
            alt={HOME_PAGE?.about_section?.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] row-span-2 col-span-1 rounded-lg shadow-sm overflow-hidden">
          <Image
            src={HOME_PAGE?.about_section?.image_2}
            alt={HOME_PAGE?.about_section?.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-full min-h-[200px] md:min-h-[300px] rounded-lg shadow-sm overflow-hidden">
          <Image
            src={HOME_PAGE?.about_section?.image_3}
            alt={HOME_PAGE?.about_section?.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </BoxedContainer>
  );
};

export default AboutSection;
