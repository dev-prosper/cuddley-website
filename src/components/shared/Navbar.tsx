"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CartIcon,
  CloseIcon,
  CuddleyLogo,
  FavouriteIcon,
  HamburgerIcon,
} from "../icons";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <header className="w-full max-w-[600px] border border-green-300 flex flex-row justify-between px-4">
      <div className="relative mid:bg-green-500">
        <Link href="/">
          <CuddleyLogo className="w-48 h-8 text-[#FEFEFF]" />
        </Link>
      </div>

      <div className="flex flex-row gap-4 items-center">
        <FavouriteIcon className="size-5 cursor-pointer text-white" />
        <CartIcon className="size-5 cursor-pointer text-white" />
        {isMobileNavbarOpen ? (
          <button onClick={() => setIsMobileNavbarOpen(false)}>
            <CloseIcon className="size-5 cursor-pointer text-white" />
          </button>
        ) : (
          <button onClick={() => setIsMobileNavbarOpen(true)}>
            <HamburgerIcon className="size-5 cursor-pointer" />
          </button>
        )}

        <div
          className={`w-[375px] h-[650px] bg-[#0A0A11] left-0 md:left-[420px] md:w-[600px]  ${
            isMobileNavbarOpen ? "flex flex-col absolute " : "hidden"
          }`}
        >
          <div className="bg-[#1C1F26] ml-[8px]  rounded-[12px] h-[48px] w-[355px] md:w-[570px] md:mx-[15px] flex flex-row justify-between">
            <div className="md:w-[240px] w-[94px] h-[23px] my-[13px] ml-[18px]">
              <Image
                src="/Logo 1.png"
                alt="Cuddleys Interior Logo"
                width={94}
                height={23}
              />
            </div>

            <div className="mx-[14px] my-[12px]">
              <button onClick={()=>setIsMobileNavbarOpen(false)}>
                <CloseIcon className="size-5 text-white cursor-pointer" />
              </button>
            </div>
          </div>

          <div className="w-[330px] md:w-[540px] h-[540px] mt-[40px] mx-[15px] md:mx-[20px] flex flex-col gap-[30px]">
            {navLinks.map((link) => {
              return (
                <div className="w-[330px] md:w-[540px] h-[64px]">
                  <Link
                    href={link.href}
                    className=""
                    onClick={() => setIsMobileNavbarOpen(false)}
                  >
                    <h3 className="w-[130px] h-[30px] text-white font-bold text-[20px]">
                      {link.label}
                    </h3>
                  </Link>
                  <div className="w-[320px] md:w-[530px] h-[2px] bg-gray-400 mt-[30px] "></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
