import { BackMenu } from "@/components/icons";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="pt-4 px-4 flex flex-row">
        <BackMenu className="size-5" />

        <p className="text-center w-full text-[16px] font-inter font-bold text-white">
          Sofa Set
        </p>
      </div>

      <section className="grid grid-cols-2 gap-4 py-4 px-4">
        <div className="space-y-3 flex flex-col">
          {/* Image Div */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/bedroom.png"
              alt="A chair"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* Text Div */}
          <div className="">
            <p className="text-[16px] font-medium font-noto-serif text-white">
              Cuddly Sofa
            </p>
            <p className="font-roboto text-[14px] text-[#9EA3B8]">₦550,000</p>
          </div>
        </div>

        <div className="space-y-3 flex flex-col">
          {/* Image Div */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/bedroom.png"
              alt="A chair"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* Text Div */}
          <div className="">
            <p className="text-[16px] font-medium font-noto-serif text-white">
              Cuddly Sofa
            </p>
            <p className="font-roboto text-[14px] text-[#9EA3B8]">₦550,000</p>
          </div>
        </div>

        <div className="space-y-3 flex flex-col">
          {/* Image Div */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/bedroom.png"
              alt="A chair"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* Text Div */}
          <div className="">
            <p className="text-[16px] font-medium font-noto-serif text-white">
              Cuddly Sofa
            </p>
            <p className="font-roboto text-[14px] text-[#9EA3B8]">₦550,000</p>
          </div>
        </div>

        <div className="space-y-3 flex flex-col">
          {/* Image Div */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/bedroom.png"
              alt="A chair"
              fill
              className="object-cover rounded-[8px]"
            />
          </div>

          {/* Text Div */}
          <div className="">
            <p className="text-[16px] font-medium font-noto-serif text-white">
              Cuddly Sofa
            </p>
            <p className="font-roboto text-[14px] text-[#9EA3B8]">₦550,000</p>
          </div>
        </div>
      </section>
    </div>
  );
}
