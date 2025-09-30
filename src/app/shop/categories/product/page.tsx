import { BackMenu, ForwardIcon } from "@/components/icons";
import AddToCart from "@/components/shared/addto-cart";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <header className="w-full flex flex-row justify-between pt-4 pl-4">
        <BackMenu />
        <ForwardIcon />
      </header>

      <main>
        <section>
          <div className="relative w-full h-80 max-w-full">
            <Image
              src="/images/sofa.png"
              alt="A bedroom"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section>
          <p className="w-full pt-5 pl-4 font-inter text-white font-bold text-[22px]">
            Cuddley Sofa
          </p>
          <p className="w-full pt-1 pl-4 font-inter text-[14px] text-[#9EA3B8]">
            ₦550,000
          </p>
          <p className="pt-1 pl-4 w-full font-inter text-[16px] text-white">
            Sink into the plush comfort of the Cuddly Sofa, designed for
            ultimate relaxation. Its deep cushions and soft fabric make it the
            perfect centerpiece for any living space.
          </p>
        </section>

        <section>
          <p className="py-4 px-4 w-full text-white font-bold text-[18px]">
            Size
          </p>
          <div className="p-4 space-x-3 flex flex-row">
            <div className="px-2 h-11 border border-[#3D4254] rounded-[8px] bg-[#0C111E] text-center text-[#9EA3B8] flex items-center justify-center">
              Small
            </div>

            <div className="px-2 h-11 border border-[#3D4254] rounded-[8px] bg-[#0C111E] text-center text-[#9EA3B8] flex items-center justify-center">
              Medium
            </div>

            <div className="px-2 h-11 border border-[#3D4254] rounded-[8px] bg-[#0C111E] text-center text-[#9EA3B8] flex items-center justify-center">
              Large
            </div>
          </div>
        </section>

        <section>
          <p className="py-4 px-4 w-full text-white font-bold text-[18px]">
            Color
          </p>

          <div className="p-4 space-x-5 flex flex-row">
            <div className="rounded-full w-10 h-10 bg-[#492E0BF2] border-3"></div>
            <div className="rounded-full w-10 h-10 bg-[#C0B6A5]"></div>
            <div className="rounded-full w-10 h-10 bg-[#3D4254]"></div>
          </div>
        </section>

        <section>
          <AddToCart />
        </section>

        <section>
          <p className="pt-4 pl-4 text-white font-semibold font-inter text-[18px]">
            Shipping Information
          </p>
          <p className="pt-1 pl-4 text-white text-[16px] font-inter">
            Ships within 5-7 business days. Free shipping on orders over
            ₦700,000. Returns accepted within 30 days of delivery.
          </p>
        </section>
      </main>
    </div>
  );
}
