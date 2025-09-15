import React from "react";
import { InstagramIcon, WhatsAppIcon, TiktokIcon } from "../icons";
import { Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-white space-y-6 px-4 pt-20 pb-10">
      <div className="flex gap-5">
        <Link href="https://www.instagram.com/cuddleys_interiors/">
          <InstagramIcon className="size-6" />
        </Link>
        <Link href="https://wa.me/2349033209215">
          <WhatsAppIcon className="size-6" />
        </Link>
        <Link href="https://www.tiktok.com/@i_am_veevian">
          <TiktokIcon className="size-6" />
        </Link>
      </div>

      <div className="space-y-2.5">
        <h3 className="font-noto-serif font-bold text-xl">Quick Links</h3>
        <div className="space-y-2">
          <Link
            href="/services"
            className="font-inter text-sm leading-6 text-[#BCB7B7D9] block"
          >
            Our Services
          </Link>
          <Link
            href="/contact-us"
            className="font-inter text-sm leading-6 text-[#BCB7B7D9] block"
          >
            Customer Support
          </Link>
          <Link
            href="/"
            className="font-inter text-sm leading-6 text-[#BCB7B7D9] block"
          >
            Shipping & Returns
          </Link>
          <Link
            href="/"
            className="font-inter text-sm leading-6 text-[#BCB7B7D9] block"
          >
            Terms of Service
          </Link>
          <Link
            href="/"
            className="font-inter text-sm leading-6 text-[#BCB7B7D9] block"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="space-y-2.5">
        <h3 className="font-noto-serif font-bold text-xl">Contact Us</h3>

        <div className="space-y-2">
          <Link
            href="tel:+2349033209215"
            className="text-[#BCB7B7D9] flex text-sm items-center gap-2"
          >
            <Phone className="size-3" />
            <span>+2349033209215</span>
          </Link>

          <Link
            href="mailto:cuddleys23@gmail.com"
            className="text-[#BCB7B7D9] flex text-sm items-center gap-2"
          >
            <Mail className="size-3" />
            <span>cuddleys23@gmail.com</span>
          </Link>
        </div>
      </div>

      <div className="space-y-2.5">
        <h3 className="font-noto-serif font-bold text-xl">
          Subscribe to our Newsletter
        </h3>
        <div className="relative">
          <Input
            placeholder="Enter your email"
            className="bg-[#0C111E] border border-[#3D4254] font-inter placeholder:font-inter text-sm px-4 py-8 text-white rounded-xl"
          />

          <ArrowRight className="absolute top-1/2 right-6 -translate-y-1/2" />
        </div>
      </div>

      <hr className="border-[#BCB7B7D9] border mt-10 mb-5" />

      <p className="text-sm text-[#BCB7B7D9] text-center">
        &copy; {currentYear} Cuddley Interiors. All rights reserved
      </p>
    </div>
  );
}
