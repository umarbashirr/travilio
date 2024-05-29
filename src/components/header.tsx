"use client";

import { cn } from "@/lib/utils";
import { SITE_ROUTES } from "@/utils/data";
import Link from "next/link";
import BoxedContainer from "./boxed-container";
import Logo from "./logo";
// import Sidebar from "./sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { createPortal } from "react-dom";

import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("./sidebar"));

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
                    "hover:text-orange-400 duration-200 ease-in-out transition-all",
                    !route?.primary ? "hidden" : "inline-flex"
                  )}
                >
                  <Link href={route?.path}>{route.label}</Link>
                </li>
              );
            })}
          </ul>
          <button className="flex lg:hidden" onClick={() => setIsOpen(true)}>
            <MenuIcon size={24} />
          </button>
          {createPortal(
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />,
            document.body
          )}
        </nav>
      </BoxedContainer>
    </header>
  );
};

export default Header;
