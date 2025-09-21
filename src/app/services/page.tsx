import React from "react";
import Link from "next/link";
import PageHeader from "@/components/shared/page-header";

export default function page() {
  return (
    <div className="space-y-2.5">
      {/* Service Page header section */}
      <PageHeader pageName="Services" />

      {/* Interior Styling Heading */}
      <div className="w-full max-w-150 h-21.5 mt-3 pt-5 pl-4">
        <div className="w-89.5 h-7">
          <p className="text-white font-roboto text-[22px] font-bold tracking-wide">
            Interior Styling
          </p>
        </div>
      </div>

      {/* Interior Styling Paragraph section */}
      <div className="w-full h-28">
        <div className="w-89.5 h-26.5 ml-4">
          <p className="text-white text-[16px] font-inter">
            Transform your space with our expert styling services. We curate
            furniture, decor, and accessories to reflect your personal style and
            enhance your home&apos;s aesthetic.
          </p>
        </div>
      </div>

      {/* Inquire Link */}
      <div className="w-full h-16 pl-4 pt-3">
        <Link href="/support">
          <div className="w-21 h-10 bg-[#1CC8F8] rounded-[8px] pl-4.5 pt-2">
            <p className="w-12 h-5 font-inter font-bold text-[14px]">Inquire</p>
          </div>
        </Link>
      </div>

      {/* Interior Decorating Section */}
      <div className="w-full max-w-150 h-21.5 mt-3 pt-5 pl-4">
        <div className="w-89.5 h-7">
          <p className="text-white font-roboto text-[22px] font-bold tracking-wide">
            Interior Decorating
          </p>
        </div>
      </div>

      {/* Interior Decorating Paragraph Text */}
      <div className="w-full h-28">
        <div className="w-89.5 h-26.5 ml-4">
          <p className="text-white text-[16px] font-inter">
            Elevate your home with our comprehensive decorating services. From
            color palettes to furniture selection and placement, we create
            cohesive and inviting interiors.
          </p>
        </div>
      </div>

      {/* Interior Decorating Book A Consultation Link */}
      <div className="w-full h-16 pl-4 pt-3">
        <Link href="/support">
          <div className="w-40 h-10 bg-[#1CC8F8] rounded-[8px] pl-4.5 pt-2">
            <p className="w-38 h-5 font-inter text-[14px] font-bold">
              Book Consultation
            </p>
          </div>
        </Link>
      </div>

      {/* Interior Consulting Heading */}
      <div className="w-full max-w-150 h-21.5 mt-3 pt-5 pl-4">
        <div className="w-89.5 h-7">
          <p className="text-white font-roboto text-[22px] font-bold tracking-wide">
            Interior Consulting
          </p>
        </div>
      </div>

      {/* Interior Consulting Paragraph text */}
      <div className="w-full h-28">
        <div className="w-89.5 h-26.5 ml-4">
          <p className="text-white text-[16px] font-inter">
            Get expert advice on your interior design projects. Our consulting
            services provide guidance on space planning, material selection, and
            design solutions tailored to your needs.
          </p>
        </div>
      </div>

      {/* Interior Consulting Book A Consultaion link */}
      <div className="w-full h-16 pl-4 pt-3">
        <Link href="/support">
          <div className="w-40 h-10 bg-[#1CC8F8] rounded-[8px] pl-4.5 pt-2">
            <p className="w-38 h-5 font-inter text-[14px] font-bold">
              Book Consultation
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
