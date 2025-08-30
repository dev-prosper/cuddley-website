import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-120 bg-[url('/images/background.png')] bg-cover bg-center mt-8 relative md:py-15 py-20 px-2">
      <h2 className="text-4xl font-extrabold text-white">Elevate Your Space</h2>

      <div className="w-52 space-y-6 mt-16">
        <p className="font-extrabold text-white">
          Discover exquisite furniture and decor to transform your home into a
          sanctuary of style and comfort.
        </p>

        <Link
          href=""
          className="bg-[#1CC8F8] text-black font-extrabold rounded-lg text-center py-2.5 px-4 text-sm"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
