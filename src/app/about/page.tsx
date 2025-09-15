import React from "react";
import { BackMenu, CollabIcon, LoveIcon } from "@/components/icons";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export default function page() {
  return (
    <div>
      {/* Top Header */}
      <div className="w-full h-18 pt-4 pl-4 flex flex-row justify-between">
        {/* Back Menu Icon */}
        <div className="w-12 h-12 pt-3">
          <BackMenu className="w-6 h-6 cursor-pointer text-white" />
        </div>

        {/* Header Text */}
        <div className="w-77.5 h-6 pr-12 mt-3">
          <p className="w-65.5 h-6 font-roboto font-bold text-[18px] text-white text-center">
            About Us
          </p>
        </div>
      </div>
      <div className="">
        {/* Our Story Image */}
        <div className="w-full h-54.5">
          <Image
            src="/images/Showroom.png"
            alt="Cuddley Showroom"
            width={390}
            height={218}
          />
        </div>

        {/* Our Story Header */}
        <div className="w-92 h-15 pt-5 pl-4">
          <p className="w-82 h-7 font-bold font-inter text-[22px] text-white">
            Our Story
          </p>
        </div>

        {/* Our Story Paragragh text */}
        <div className="w-full h-46 pt-1 pl-4">
          <p className="font-inter text-[14px] text-white">
            Cuddleys Interiors was founded in 2018 by Adaeze Onwuka, a
            passionate interior designer with a vision to create beautiful,
            functional spaces that reflect the unique personalities of her
            clients. What started as a small, home-based business has grown into
            a thriving design studio, known for its attention to detail,
            personalized service, and commitment to quality.
          </p>
        </div>
      </div>

      <div className="">
        {/* Our Mission */}
        <div className="w-full h-71 py-3">
          <div className="w-full h-65">
            <Image
              src="/images/Cuddley-store.png"
              alt="Cuddley Stores"
              width={390}
              height={260}
            />
          </div>
        </div>

        {/* Our Mission Heading */}
        <div className="w-92 h-15 pt-5 pl-4">
          <p className="w-82 h-7 font-bold font-inter text-[22px] text-white">
            Our Mission
          </p>
        </div>

        {/* Our Mission paragraph text */}
        <div className="w-full h-40 pt-1 pl-4">
          <p className="font-inter text-[14px] text-white">
            At Cuddleys Interiors, our mission is to transform houses into
            homes. We believe that your living space should be a sanctuary, a
            place where you feel comfortable, inspired, and truly yourself. We
            strive to create designs that are not only aesthetically pleasing
            but also functional and tailored to your lifestyle.
          </p>
        </div>
      </div>

      {/* Our Value */}
      <div className="">
        <div className="w-full h-15 pt-5 pl-4">
          <p className="w-82.5 h-7 text-white font-bold text-[22px] font-inter">
            Our Value
          </p>
        </div>

        <div className="w-full h-49 p-4 space-y-3">
          {/* Collab And Client Appro */}
          <div className="w-89.5 h-23.5 space-x-3  flex flex-row">
            <div className="w-43.5 h-23.5 rounded-[8px] pl-4 pt-2 bg-[#0C111E] border flex flex-row space-x-3">
              <div className="pt-6">
                <LoveIcon className="size-6 " />
              </div>
              <div className="w-23.5 h-15">
                <p className="text-white thext-white font-bold font-inter">
                  Client-Centric Approach
                </p>
              </div>
            </div>

            <div className="w-43.5 h-23.5 rounded-[8px] pl-4 pt-2 bg-[#0C111E] border flex flex-row space-x-3">
              <div className="pt-6">
                <CollabIcon className="size-6 " />
              </div>
              <div className="w-26.5 h-5 pt-6">
                <p className="text-white thext-white font-bold font-inter">
                  Collaboration
                </p>
              </div>
            </div>
          </div>

          <div className="w-89.5 h-14.5">
            <div className="w-43.5 h-14.5 border bg-[#0C111E] rounded-[8px] p-4 flex flex-row space-x-3">
              <StarIcon className="size-6 text-white" />
              <div className="w-21.5 h-5">
                <p className="text-[16px] font-bold font-inter text-white">
                  Excellence
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-64 pt-1 pl-4">
          <p className="text-white text-[14px] text-center">
            We are committed to building strong relationships with our clients,
            understanding their needs and preferences, and working closely with
            them throughout the design process. We believe in open
            communication, transparency, and a collaborative approach to ensure
            that every project is a success. Our team of experienced designers
            and craftsmen are dedicated to delivering exceptional results, using
            high-quality materials and innovative techniques to create spaces
            that are both beautiful and enduring.
          </p>
        </div>
      </div>
    </div>
  );
}
