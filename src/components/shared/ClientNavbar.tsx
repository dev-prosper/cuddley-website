"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CartIcon,
  CloseIcon,
  CuddleyLogo,
  CuddleyLogoImageOnly,
  HamburgerIcon,
} from "../icons";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext"; // ✅ import cart context

type Category = {
  _id: string;
  slug: string;
  name: string;
};

interface ClientNavbarProps {
  cats: Category[];
}

export default function ClientNavbar({ cats }: ClientNavbarProps) {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  // ✅ Access cart state from context
  const { cart } = useCart();

  // 🧮 Count total quantity in cart
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full max-w-[600px] flex flex-row justify-between px-4 pt-10 relative mx-auto">
      {/* --- LOGO --- */}
      <div>
        <Link href="/">
          <CuddleyLogo className="w-48 h-8 text-[#FEFEFF]" />
        </Link>
      </div>

      {/* --- NAV ICONS --- */}
      <div className="flex flex-row gap-4 items-center relative">
        {/* --- CART ICON --- */}
        <div className="relative">
          <Link href="/cart">
            <CartIcon className="size-5 cursor-pointer text-white" />
          </Link>

          {/* --- CART BADGE --- */}
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#1CC8F8] text-black text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </div>

        {/* --- MOBILE MENU ICON --- */}
        {!isMobileNavbarOpen && (
          <button onClick={() => setIsMobileNavbarOpen(true)}>
            <HamburgerIcon className="size-5 cursor-pointer" />
          </button>
        )}

        {/* --- MOBILE NAV MENU --- */}
        <div
          className={cn(
            "absolute top-0 left-0 overflow-y-auto w-full h-screen bg-[#0A0A11] pt-12 px-4.5 transform transition-transform duration-300 ease-in-out space-y-10 z-50",
            isMobileNavbarOpen
              ? "translate-x-0 fixed"
              : "-translate-x-[2000px]",
          )}
        >
          {/* --- HEADER --- */}
          <div className="bg-[#1C1F26] rounded-xl flex flex-row justify-between py-4 px-4 items-center">
            <CuddleyLogoImageOnly />
            <button onClick={() => setIsMobileNavbarOpen(false)}>
              <CloseIcon className="size-5 text-white cursor-pointer" />
            </button>
          </div>

          {/* --- CATEGORIES --- */}
          <div className="space-y-8 px-1.5 pb-10">
            {cats?.map((item) => (
              <div className="border-b border-[#3D4254] pb-6" key={item._id}>
                <Link
                  href={`/shop/${item.slug}`}
                  onClick={() => setIsMobileNavbarOpen(false)}
                >
                  <h3 className="text-white font-bold">{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
