"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface SectionWrapperProps {
  className?: string;
  children: ReactNode;
}

const SectionWrapper = ({ className, children }: SectionWrapperProps) => {
  return (
    <div className={cn("w-full h-full my-12 md:my-20 lg:my-28", className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
