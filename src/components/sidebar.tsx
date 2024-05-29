"use client";

import Link from "next/link";
import Logo from "./logo";
import { SITE_ROUTES } from "@/utils/data";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: any;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "z-50 fixed top-0 right-0 w-full shadow-md h-full max-w-80 transition-all duration-300 ease-in-out bg-white",
          isOpen ? "right-0" : "-right-80"
        )}
      >
        <button
          className={cn("absolute top-3 right-3")}
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="p-8 flex items-center justify-center bg-[#FAF8F5] text-center">
          <Logo />
        </div>
        <div className="space-y-4 flex flex-col mt-10 text-primary-blue-color px-4">
          {SITE_ROUTES.map((route: any) => {
            return (
              <Link
                key={route.label}
                href={route.path}
                className="hover:text-orange-400 font-medium duration-200 ease-in-out transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
