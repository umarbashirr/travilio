"use client";

import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (totalScroll / windowHeight) * 100;

    setScrollProgress(scroll);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <div
          className="flex items-center justify-center w-10 h-10 bg-transparent text-orange-500 rounded-full cursor-pointer"
          onClick={scrollToTop}
          style={{
            border: `4px solid rgba(249, 115, 22, ${scrollProgress / 100})`,
          }}
        >
          <BsArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
