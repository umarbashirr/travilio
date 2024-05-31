"use client";

import { TestimonialInterface } from "@/interfaces/home.interface";
import BoxedContainer from "../boxed-container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect, useRef } from "react";

interface TestimonialsProps {
  testimonials: TestimonialInterface[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const scrollContainerRef = useRef<any>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.isDown = true;
      container.startX = e.pageX - container.offsetLeft;
      container.scrollLeftStart = container.scrollLeft;
      container.style.scrollBehavior = "auto"; // Disable smooth scrolling during drag
    }
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (container && container.isDown) {
      container.isDown = false;
      container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    }
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (container && container.isDown) {
      container.isDown = false;
      container.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container?.isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2; // Adjust the scroll speed if needed
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  return (
    <BoxedContainer>
      <h2 className="text-orange-500 text-sm font-semibold text-center">
        Our Testimonials
      </h2>
      <h3 className="font-bold text-3xl md:text-4xl mt-2 mb-10 text-center">
        What Our Customers Say
      </h3>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex items-center justify-start gap-10 overflow-x-auto scroll-smooth no-scrollbar cursor-grab select-none py-2"
      >
        {testimonials.map(
          (testimonial: TestimonialInterface, index: number) => {
            return (
              <article
                key={index}
                className="min-w-[300px] min-h-[300px] md:min-w-[400px] bg-white rounded-lg p-6 shadow-md text-center"
              >
                <FaQuoteRight className="text-orange-100 w-8 h-8 mx-auto mb-6" />
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <p className="mb-1 font-semibold">{testimonial.author}</p>
                <p className="text-sm">{testimonial.location}</p>
              </article>
            );
          }
        )}
      </div>
    </BoxedContainer>
  );
};

export default Testimonials;
