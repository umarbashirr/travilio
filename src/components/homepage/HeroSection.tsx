"use client";

import { HOME_PAGE } from "@/utils/data";
import BoxedContainer from "../boxed-container";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${HOME_PAGE?.hero?.background_image})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="bg-fill bg-center min-h-[calc(100vh-124px)] flex items-center justify-center"
    >
      <BoxedContainer className="w-full h-full flex flex-col text-center items-center justify-center text-white">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          {HOME_PAGE?.hero?.title}
        </h1>
        <p className="text-lg my-4">{HOME_PAGE?.hero?.subtitle}</p>
        <Link
          href="/tours"
          className="bg-orange-500 py-3 px-6 rounded-md shadow-md hover:bg-orange-600 duration-300 ease-in-out transition-all"
        >
          {HOME_PAGE?.hero?.cta_text}
        </Link>
      </BoxedContainer>
    </div>
  );
};

export default HeroSection;
