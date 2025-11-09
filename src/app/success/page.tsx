"use client";

import React, { useEffect, useState } from "react";
import { SuccessIcon } from "@/components/icons";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [estimatedDate, setEstimatedDate] = useState<string>("");

  useEffect(() => {
    // 1️⃣ Get order ID from query (Wix returns something like ?orderId=xxxx)
    const orderId =
      searchParams.get("orderId") || searchParams.get("checkoutId");
    if (orderId) {
      setOrderNumber(`#CU${orderId.slice(-6).toUpperCase()}`);
    }

    // 2️⃣ Calculate estimated delivery date = today + 7 days
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);

    const formattedDate = deliveryDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setEstimatedDate(formattedDate);
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 text-center">
      {/* ✅ Success Icon */}
      <section className="w-full flex justify-center mb-6">
        <div className="w-24 h-24">
          <SuccessIcon />
        </div>
      </section>

      {/* ✅ Order Confirmed Text */}
      <section className="mb-4">
        <p className="font-inter font-bold text-[28px] text-[#121417]">
          Order Confirmed!
        </p>
      </section>

      {/* ✅ Message */}
      <section className="max-w-md mb-6">
        <p className="font-inter text-[16px] text-[#121417]">
          Thank you for your order with Cuddleys Interiors. We&apos;re thrilled
          to bring comfort and style to your home.
        </p>
      </section>

      {/* ✅ Order Info Section */}
      <section className="w-full max-w-md flex justify-center gap-12 mb-8">
        <div className="flex flex-col space-y-2">
          <span className="font-inter text-[14px] text-[#61758A]">
            Order Number
          </span>
          <span className="font-inter text-[14px] text-[#121417]">
            {orderNumber || "#CU------"}
          </span>
        </div>

        <div className="flex flex-col space-y-2">
          <span className="font-inter text-[14px] text-[#61758A]">
            Estimated Delivery
          </span>
          <span className="font-inter text-[14px] text-[#121417]">
            {estimatedDate || "Loading..."}
          </span>
        </div>
      </section>

      {/* ✅ Buttons */}
      <section className="flex flex-col items-center gap-4">
        <Link
          href={`/order/track/${orderNumber.replace("#", "")}`}
          className="bg-[#121417] text-white font-inter text-sm px-5 py-2 rounded-lg hover:bg-[#22252a] transition"
        >
          Track Order
        </Link>

        <Link
          href="/shop"
          className="text-[#61758A] text-sm hover:text-[#121417] font-inter"
        >
          Continue Shopping
        </Link>
      </section>
    </div>
  );
}
