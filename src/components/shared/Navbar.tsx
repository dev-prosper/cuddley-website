"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  CartIcon,
  CloseIcon,
  CuddleyLogo,
  CuddleyLogoImageOnly,
  FavouriteIcon,
  HamburgerIcon,
} from "../icons";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <header className="w-full max-w-[600px] flex flex-row justify-between px-4 pt-10 relative mx-auto">
      <div className=" mid:bg-green-500">
        <Link href="/">
          <CuddleyLogo className="w-48 h-8 text-[#FEFEFF]" />
        </Link>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <FavouriteIcon className="size-5 cursor-pointer text-white" />
        <CartIcon className="size-5 cursor-pointer text-white" />
        {!isMobileNavbarOpen && (
          <button onClick={() => setIsMobileNavbarOpen(true)}>
            <HamburgerIcon className="size-5 cursor-pointer" />
          </button>
        )}

        <div
          className={cn(
            "absolute top-0 left-0 overflow-y-auto w-full h-screen bg-[#0A0A11] pt-12 px-4.5 transform transition-transform duration-300 ease-in-out space-y-10 z-50",
            isMobileNavbarOpen ? "translate-x-0" : "-translate-x-[2000px]"
          )}
        >
          <div className="bg-[#1C1F26] rounded-xl flex flex-row justify-between py-4 px-4 items-center">
            <div>
              <CuddleyLogoImageOnly />
            </div>

            <div className="">
              <button onClick={() => setIsMobileNavbarOpen(false)}>
                <CloseIcon className="size-5 text-white cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="space-y-8 px-1.5 pb-10">
            {navLinks.map((link, index) => {
              return (
                <div className="border-b border-[#3D4254] pb-6" key={index}>
                  <Link
                    href={link.href}
                    className=""
                    onClick={() => setIsMobileNavbarOpen(false)}
                  >
                    <h3 className=" text-white font-bold">{link.label}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
