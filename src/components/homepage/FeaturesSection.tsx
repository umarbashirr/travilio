"use client";

import { HOME_PAGE } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";
import BoxedContainer from "../boxed-container";

const FeaturesSection = () => {
  return (
    <BoxedContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {HOME_PAGE?.features.map(
          (
            feature: {
              icon: any;
              title: string;
              description: string;
            },
            index: number
          ) => {
            return (
              <article
                key={index}
                className="text-center group hover:bg-gradient-to-tr from-orange-500 to-orange-600 bg-slate-50 rounded-xl shadow-md py-14 px-14 duration-300 ease-in-out transition-all hover:-translate-y-4"
              >
                <div className="text-orange-500">{feature?.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white duration-300 ease-in-out transition-all">
                  {feature?.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white duration-300 ease-in-out transition-all">
                  {feature?.description}
                </p>
              </article>
            );
          }
        )}
      </div>
    </BoxedContainer>
  );
};

export default FeaturesSection;
