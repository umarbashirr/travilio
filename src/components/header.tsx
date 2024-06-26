"use client";

import { cn } from "@/lib/utils";
import { SITE_ROUTES } from "@/utils/data";
import Link from "next/link";
import BoxedContainer from "./boxed-container";
import Logo from "./logo";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { createPortal } from "react-dom";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Sidebar = dynamic(() => import("./sidebar"));

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className="bg-white h-20 flex items-center justify-start w-full">
      <BoxedContainer className="flex items-center justify-between">
        <Logo />
        <nav className="flex items-center justify-end gap-4">
          <ul className="hidden lg:flex items-center justify-end gap-4">
            {SITE_ROUTES?.map((route) => {
              return (
                <li
                  key={route.path}
                  className={cn(
                    "hover:text-orange-500 duration-200 ease-in-out transition-all font-semibold",
                    !route?.primary ? "hidden" : "inline-flex",
                    pathname === route.path ? "text-orange-500" : "text-primary"
                  )}
                >
                  <Link href={route?.path}>{route.label}</Link>
                </li>
              );
            })}
          </ul>
          <button className="flex lg:hidden" onClick={() => setIsOpen(true)}>
            <HiMenuAlt3 size={24} />
          </button>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </BoxedContainer>
    </header>
  );
};

export default Header;
