"use client";

import { HOME_PAGE } from "@/utils/data";
import BoxedContainer from "../boxed-container";
import SingleDestinationCard from "./SingleDestinationCard";
import { useRef } from "react";

const PopularDestinations = () => {
  const scrollContainerRef = useRef<any>(null);

  const handleMouseDown = (e: any) => {
    const container = scrollContainerRef.current;
    container.isDown = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
    container.style.scrollBehavior = "auto"; // Disable smooth scrolling during drag
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container.isDown) {
      container.isDown = false;
      container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    }
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (container.isDown) {
      container.isDown = false;
      container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    }
  };

  const handleMouseMove = (e: any) => {
    const container = scrollContainerRef.current;
    if (!container.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 1; // Adjust the scroll speed if needed
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  return (
    <BoxedContainer>
      <div>
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            {HOME_PAGE.popular_destinations.title}
          </h2>
          <p className="mt-4">{HOME_PAGE.popular_destinations.description}</p>
        </header>
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="mt-10 flex flex-nowrap gap-10 overflow-x-auto scroll-smooth  no-scrollbar cursor-grab select-none"
        >
          {HOME_PAGE.popular_destinations.destinations.map((d) => {
            return <SingleDestinationCard key={d.name} destination={d} />;
          })}
        </div>
      </div>
    </BoxedContainer>
  );
};

export default PopularDestinations;
