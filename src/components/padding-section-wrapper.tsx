"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface PaddingSectionWrapperProps {
  className?: string;
  children: ReactNode;
}

const PaddingSectionWrapper = ({
  className,
  children,
}: PaddingSectionWrapperProps) => {
  return (
    <div className={cn("w-full h-full py-12 md:py-20 lg:py-28", className)}>
      {children}
    </div>
  );
};

export default PaddingSectionWrapper;
