"use client";

import React, { useMemo } from "react";
import PageHeader from "@/components/shared/page-header";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Page() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // 🧾 Subtotal, shipping, and totals
  const subtotal = useMemo(
    () =>
      cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cart],
  );

  const shipping = subtotal >= 500000 ? 0 : 20000;
  const tax = 5000;
  const total = subtotal + shipping + tax;

  const formatPrice = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

  return (
    <div>
      {/* Header */}
      <header className="px-4 pt-10 pb-2">
        <PageHeader pageName="Cart" />
      </header>

      <main>
        {/* Cart Items */}
        <section>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div
                key={product._id}
                className="w-full h-18 py-2 px-4 flex justify-between items-center"
              >
                {/* Product Info */}
                <div className="min-w-[237px] w-full max-w-[437px] flex flex-row gap-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={56}
                    height={56}
                    className="object-contain rounded-[8px]"
                  />

                  <div className="flex flex-col justify-center">
                    <span className="font-roboto text-[16px] text-white font-medium">
                      {product.name}
                    </span>
                    <span className="font-inter text-[14px] text-[#9EA3B8]">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-row gap-2 items-center">
                  {/* - Button */}
                  <button
                    onClick={() =>
                      product.quantity === 1
                        ? removeFromCart(product._id)
                        : updateQuantity(product._id, -1)
                    }
                    className="w-7 h-7 rounded-[14px] bg-[#0C111E] hover:bg-[#1A2238] flex justify-center items-center transition-colors"
                  >
                    <span className="text-white">−</span>
                  </button>

                  {/* Quantity number */}
                  <span className="text-white font-bold">
                    {product.quantity}
                  </span>

                  {/* + Button */}
                  <button
                    onClick={() => updateQuantity(product._id, 1)}
                    className="w-7 h-7 rounded-[14px] bg-[#0C111E] hover:bg-[#1A2238] flex justify-center items-center transition-colors"
                  >
                    <span className="text-white">+</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            // Empty Cart Message
            <div className="text-center text-gray-400 py-10">
              Your cart is empty 🛒
            </div>
          )}
        </section>

        {/* Order Summary */}
        {cart.length > 0 && (
          <section className="mt-8">
            <div className="w-full h-11.5 pt-4 pb-2 pl-4">
              <span className="font-bold font-inter text-[18px] text-white">
                Order Summary
              </span>
            </div>

            <div className="w-full h-40 p-4 space-y-3">
              <div className="flex flex-row justify-between">
                <span className="font-inter text-[#9EA3B8] text-[14px]">
                  Subtotal
                </span>
                <span className="font-noto-serif text-[14px] text-white">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex flex-row justify-between">
                <span className="font-inter text-[#9EA3B8] text-[14px]">
                  Shipping
                </span>
                <span className="font-noto-serif text-[14px] text-white">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>

              <div className="flex flex-row justify-between">
                <span className="font-inter text-[#9EA3B8] text-[14px]">
                  Tax
                </span>
                <span className="font-noto-serif text-[14px] text-white">
                  {formatPrice(tax)}
                </span>
              </div>

              <div className="flex flex-row justify-between border-t border-gray-700 pt-2 mt-2">
                <span className="font-inter text-[#9EA3B8] text-[14px]">
                  Total
                </span>
                <span className="font-noto-serif text-[16px] text-white font-semibold">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
