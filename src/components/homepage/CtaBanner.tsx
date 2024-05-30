"use client";

import { HOME_PAGE } from "@/utils/data";

const CtaBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/${HOME_PAGE?.banner_cta?.background_image}.jpg')`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className=" text-white p-4 text-center  flex"
    >
      <div className="border-4 border-white py-16 h-full w-full min-h-[300px] md:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {HOME_PAGE?.banner_cta?.headline}
        </h2>
        <p className="text-lg mb-4">{HOME_PAGE?.banner_cta?.subheadline}</p>
        <button className="bg-orange-500 hover:bg-orange-600 duration300 ease-in-out transition-all text-white px-6 py-3 rounded-full">
          {HOME_PAGE?.banner_cta?.cta_text}
        </button>
      </div>
    </div>
  );
};

export default CtaBanner;
