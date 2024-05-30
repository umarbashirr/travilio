"use client";

import { TOUR_PACKAGES } from "@/utils/tour-data";
import BoxedContainer from "../boxed-container";
import SingleTourPackageCard from "../SingleTourPackageCard";

const Packages = () => {
  return (
    <BoxedContainer>
      <div>
        <header className="text-center">
          <h2 className="text-4xl font-bold">Latest Tour Packages</h2>
          <p className="mt-4">
            Check out our latest tour packages and book your dream vacation
            today!
          </p>
        </header>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOUR_PACKAGES.map((tourPackage) => {
            return (
              <SingleTourPackageCard
                key={tourPackage.id}
                tourPackage={tourPackage}
              />
            );
          })}
        </div>
      </div>
    </BoxedContainer>
  );
};

export default Packages;
