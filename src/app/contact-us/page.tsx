"use client";

import React, { useState } from "react";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  TiktokIcon,
  InstagramIcon,
  WhatsappIcon,
  ChatIcon,
  ChatIcon2,
} from "@/components/icons";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    setLoading(true);

    const phone = "2349033209215"; 
    const message = "Hello, I would like to know more about your skincare products!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="space-y-2.5">
      {/* Get In Touch Header */}
      <div className="w-full h-12 pt-4 pl-4">
        <h2 className="w-89.5 h-6 text-white text-[18px] font-inter font-bold">
          Get in Touch
        </h2>
      </div>

      {/* Email Contact Section */}
      <div className="w-full h-18 pt-2 pl-4 flex flex-row space-x-4">
        <div className="w-12 h-12 pt-3 pl-3 bg-[#0C111E] rounded-[8px]">
          <EmailIcon className="size-6" />
        </div>
        <div className="w-45.5 h-12.5 flex flex-col">
          <div className="w-42 h-6">
            <p className="text-white font-medium text-[16px] font-inter">
              Email
            </p>
          </div>
          <div className="w-45.5 h-5.5">
            <a
              href="mailto:cuddleys23@gmail.com"
              className="text-[14px] font-roboto text-[#00C2FF]"
            >
              cuddleys23@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Phone Contact Section */}
      <div className="w-full h-18 pt-2 pl-4 flex flex-row space-x-4">
        <div className="w-12 h-12 pt-3 pl-3 bg-[#0C111E] rounded-[8px]">
          <PhoneIcon className="size-6" />
        </div>
        <div className="w-33 h-11.5">
          <p className="w-33 h-6 text-white font-medium font-inter text-[16px]">
            Phone
          </p>
          <a
            href="tel:+2349033209215"
            className="w-33 h-5.5 text-[#00C2FF] text-[14px] font-medium"
          >
            +234 9033209215
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="w-full h-23 pt-2 pl-4 flex flex-row space-x-4">
        <div className="w-12 h-12 pt-3 pl-3 bg-[#0C111E] rounded-[8px]">
          <LocationIcon className="size-6" />
        </div>
        <div className="w-51.5 h-17.5">
          <p className="w-51.5 h-6 text-white font-medium font-inter text-[16px]">
            Location
          </p>
          <p className="w-51.5 h-11.5 text-[#00C2FF] text-[14px] font-medium">
            Plot 10 Matia Mall, Orchid road Lekki Lagos.
          </p>
        </div>
      </div>

      {/* Follow us Section */}
      <div className="w-full h-58 bg-[#0C111E] p-4 space-y-2">
        <div className="w-43 h-20 space-y-6">
          <p className="w-38 h-5.5 font-inter font-medium text-[14px] text-white">
            Follow Us
          </p>
          <div className="w-38 h-9 space-x-6.5 flex flex-row">
            <a href="http://">
              <InstagramIcon className="size-8" />
            </a>
            <a href="http://">
              <WhatsappIcon className="size-8" />
            </a>
            <a href="http://">
              <TiktokIcon className="size-8" />
            </a>
          </div>
        </div>

        {/* Customer Support Section */}
        <div className="w-77.5 h-24 space-y-2">
          <p className="w-43.5 h-5 font-bold font-inter text-[14px] text-white">
            Customer Support Hours
          </p>
          <p className="w-76.5 h-5.5 text-white font-inter font-bold text-[14px]">
            Monday - Friday:
            <span className="font-inter font-normal text-[14px] text-white">
              9:00AM - 6:00PM WAT
            </span>
          </p>
          <p className="w-76.5 h-5.5 text-white font-inter font-bold text-[14px]">
            Saturday:
            <span className="font-inter font-normal text-[14px] text-white">
              Closed
            </span>
          </p>
          <p className="w-76.5 h-5.5 text-white font-inter font-bold text-[14px]">
            Sunday:
            <span className="font-inter font-normal text-[14px] text-white">
              Closed
            </span>
          </p>
        </div>
      </div>

      {/* Whatsapp Chat Section */}
      <div className="w-full h-127.5 pt-16.5 bg-[#ffffff]">
        <div className="w-full h-97.5 pl-6 space-y-6">
          <div className="w-82.5 h-28">
            <div className="pl-34.5">
              <div className="w-13.5 h-13.5">
                <ChatIcon className="size-13.5" />
              </div>
            </div>
            <p className="w-82.5 h-9 font-bold font-inter text-[24px] text-center mt-6">
              Chat with Us on whatsapp
            </p>
          </div>

          <div className="w-82.5 h-26">
            <p className="font-inter font-medium text-[18px] text-center">
              Get instant support and personalized skincare advice directly
              through whatsapp. Our team is ready to help you.
            </p>
          </div>

          {/* WhatsApp Chat Link */}
          <div className="pl-6">
            <button
              onClick={handleWhatsAppClick}
              disabled={loading}
              className="w-[280px] h-[58px] bg-[#60D669] rounded-[4px] flex items-center justify-center text-white font-medium disabled:opacity-70"
            >
              <div className="flex items-center space-x-2">
                <ChatIcon2 className="w-6 h-6" />
                <span>{loading ? "Loading..." : "Start Whatsapp Chat"}</span>
              </div>
            </button>
          </div>

          <div className="w-82.5 h-12">
            <p className="text-center text-[16px] font-medium font-inter">
              Click the button above to open whatsapp pre-filled message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
