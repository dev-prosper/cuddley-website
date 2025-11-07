"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type OrderStatus = "Processing" | "Shipped" | "Out for Delivery" | "Delivered";

export default function TrackOrderPage() {
  const { orderNumber } = useParams();
  const [status, setStatus] = useState<OrderStatus>("Processing");
  const [estimatedDate, setEstimatedDate] = useState<string>("");

  // Mock API simulation for order status progression
  useEffect(() => {
    // Calculate estimated delivery date = 7 days from today
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 7);

    const formattedDate = deliveryDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setEstimatedDate(formattedDate);

    // Mock progress timeline
    const timer = setTimeout(() => setStatus("Shipped"), 3000);
    const timer2 = setTimeout(() => setStatus("Out for Delivery"), 6000);
    const timer3 = setTimeout(() => setStatus("Delivered"), 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const statusSteps: OrderStatus[] = [
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = statusSteps.indexOf(status);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-5 text-center">
      <section className="mb-6">
        <p className="font-inter font-bold text-[28px] text-[#121417]">
          Track Your Order
        </p>
        <p className="font-inter text-[16px] text-[#61758A]">
          Order Number:{" "}
          <span className="text-[#121417] font-semibold">#{orderNumber}</span>
        </p>
      </section>

      {/* Progress Bar */}
      <section className="w-full max-w-md mt-10 mb-8">
        <div className="flex justify-between items-center relative">
          {statusSteps.map((step, index) => (
            <div key={step} className="flex flex-col items-center w-full">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  index <= currentStep
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {index + 1}
              </div>
              <p
                className={`mt-2 text-sm font-inter ${
                  index <= currentStep ? "text-green-700" : "text-gray-400"
                }`}
              >
                {step}
              </p>
              {index < statusSteps.length - 1 && (
                <div
                  className={`absolute top-4 left-[12%] w-[75%] h-[2px] ${
                    index < currentStep ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Info */}
      <section className="max-w-md mb-10">
        <p className="font-inter text-[16px] text-[#121417] mb-2">
          <span className="font-semibold">Current Status:</span> {status}
        </p>
        <p className="font-inter text-[16px] text-[#61758A]">
          Estimated Delivery Date:{" "}
          <span className="text-[#121417]">{estimatedDate}</span>
        </p>
      </section>

      {/* Buttons */}
      <section className="flex flex-col items-center gap-4">
        <Link
          href="/shop"
          className="bg-[#121417] text-white font-inter text-sm px-5 py-2 rounded-lg hover:bg-[#22252a] transition"
        >
          Continue Shopping
        </Link>

        <Link
          href="/"
          className="text-[#61758A] text-sm hover:text-[#121417] font-inter"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
}
