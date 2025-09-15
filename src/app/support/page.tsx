import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full h-179.5">
        <div className="w-full h-57">
          {/* Get In Touch */}
          <div className="w-full h-17 pt-5 pl-4">
            <p className="w-89.5 h-9 font-roboto text-[28px] text-white font-bold">
              Get in touch
            </p>
          </div>

          {/* Get In Touch Write Up */}
          <div className="w-full h-22 pt-1 pl-4">
            <p className="w-89.5 h-18 text-[16px] font-inter font-medium text-white">
              We're here to help. Reach out to us with any questions or
              inquiries, and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form className="w-full h-123">
            {/* Name Input And Label */}
            <div className="w-full h-28 pt-3 pl-4 flex flex-col">
              <label
                htmlFor="name"
                className="w-89.5 h-8 font-noto-serif text-white font-medium text-[16px]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-89.5 h-14 bg-[#0C111E] font-noto-serif text-[#9EA3B8] rounded-[8px] p-3.5"
              />
            </div>

            {/* Email Input and label */}
            <div className="w-full h-28 pt-3 pl-4 flex flex-col">
              <label
                htmlFor="email"
                className="w-89.5 h-8 font-noto-serif text-white font-medium text-[16px]"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="w-89.5 h-14 bg-[#0C111E] font-noto-serif text-[#9EA3B8] rounded-[8px] p-3.5"
              />
            </div>

            {/* Message and Textarea and Button */}
            <div className="w-full h-67 pt-3 pl-4">
              {/* Message and Textarea */}
              <div className="w-89.5 h-44 flex flex-col">
                <label
                  htmlFor="message"
                  className="w-89.5 h-8 font-medium font-not0-serif text-[16px] text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  className="w-89.5 h-36 p-3.5 rounded-[8px] bg-[#0C111E] text-[#9EA3B8]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="relative w-21 h-10 pl-4 rounded-[8px] bg-[#1CC8F8] left-68.5 top-6"
              >
                <p className="w-14 h-5 text-[14px] font-bold font-inter text-black">
                  Send
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information section */}
      <div className="w-full h-65.5 ">
        <div className="w-89.5 h-59 pt-4.5 pl-4 space-y-5">
          <div className="w-86.5 h-7">
            <p className="font-roboto font-bold text-white text-[22px] text-center">
              Contact Information
            </p>
          </div>

          <div className="w-86.5 h-16 space-x-5 flex flex-row">
            <div className="w-42 h-16">
              <p className="w-23 h-5 font-noto-serif text-[14px] text-[#9EA3B8]">
                Address
              </p>
              <p className="w-42 h-10.5 text-white text-[14px] font-inter">
                Plot 10 Matia Mall, Orchid road Lekki Lagos.
              </p>
            </div>

            <div className="w-33.5 h-13">
                <p className="w-27 h-5 font-noto-serif text-[14px] text-[#9EA3B8]">Phone</p>
                <p className="w-33.5 h-8 text-white text-[14px] font-inter">+234 9033209215</p>
            </div>
          </div>

          <div className="w-86.5 h-25.5 py-5">
            <div className="w-18 h-8">
              <p className="text-[#9EA3B8] font-noto-serif text-[14px]">Email</p>
            </div>

            <div className="w-48.5 h-5">
              <p className="text-white text-[14px] font-inter">info@cuddleysinteriors.com</p>
            </div>
          </div>
        </div>
      </div>


      {/* Map Section */}
      <div className="w-full h-56.5 pt-3 pl-4">
        <div className="w-86.5 h-40.5 rounded-[8px]">
          <Image src="/images/Map.png" alt="A map" width={358} height={201} />
        </div>
      </div>
    </div>
  );
}
