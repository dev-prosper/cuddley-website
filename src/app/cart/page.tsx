"use client";

import React, { useMemo, useState } from "react";
import PageHeader from "@/components/shared/page-header";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Page() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("debit-card");

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
                // ✅ Use product._id if available, fallback to index to avoid warning
                key={product._id ?? index}
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

                  <span className="text-white font-bold">
                    {product.quantity}
                  </span>

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
            // ✅ Empty cart message (not inside a map, so no key needed)
            <div className="text-center text-gray-400 py-10">
              Your cart is empty 🛒
            </div>
          )}
        </section>

        {/* Show the following only when cart has items */}
        {cart.length > 0 && (
          <>
            {/* Order Summary */}
            <section className="mt-8">
              <div className="w-full pt-4 pb-2 pl-4">
                <span className="font-bold font-inter text-[18px] text-white">
                  Order Summary
                </span>
              </div>

              <div className="w-full p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#9EA3B8] text-[14px]">Subtotal</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#9EA3B8] text-[14px]">Shipping</span>
                  <span className="text-white">
                    {shipping === 0 ? "Free" : formatPrice(shipping)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#9EA3B8] text-[14px]">Tax</span>
                  <span className="text-white">{formatPrice(tax)}</span>
                </div>

                <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                  <span className="text-[#9EA3B8] text-[14px]">Total</span>
                  <span className="text-white font-semibold">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </section>

            {/* Shipping Information */}
            <section>
              <div className="w-full pt-4 pl-4">
                <span className="font-bold text-white text-[18px]">
                  Shipping Information
                </span>
              </div>

              <div className="w-full py-3 px-4 flex flex-col gap-3">
                <label className="text-white font-inter">Full Name</label>
                <input
                  type="text"
                  placeholder="Liam Carter"
                  required
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                />
              </div>

              <div className="w-full py-3 px-4 flex flex-col gap-3">
                <label className="text-white font-inter">Address</label>
                <input
                  type="text"
                  placeholder="123 Main Str"
                  required
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                />
              </div>

              <div className="w-full py-3 px-4 flex flex-col gap-3">
                <label className="text-white font-inter">Country</label>
                <input
                  type="text"
                  value="Nigeria"
                  disabled
                  className="w-full h-14 bg-[#1A2238] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8] cursor-not-allowed"
                />
              </div>

              <div className="w-full py-3 px-4 flex gap-3">
                <div className="w-1/2 flex flex-col gap-2">
                  <label className="text-white font-inter">State</label>
                  <input
                    type="text"
                    className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  />
                </div>

                <div className="w-1/2 flex flex-col gap-2">
                  <label className="text-white font-inter">Zip Code</label>
                  <input
                    type="text"
                    className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <div className="w-full px-4 pt-4 pb-2">
                <span className="font-inter font-bold text-[18px] text-white">
                  Payment Method
                </span>
              </div>

              <div className="w-full p-4 flex flex-col gap-4 text-white">
                {[
                  { id: "debit-card", label: "Debit Card" },
                  { id: "cash", label: "Cash" },
                  { id: "transfer", label: "Transfer" },
                ].map((method) => (
                  <label
                    key={method.id} // ✅ Fixed: each payment method now has a unique key
                    className={`flex items-center gap-3 p-3 rounded-[8px] border cursor-pointer transition ${
                      paymentMethod === method.id
                        ? "border-[#1CC8F8] bg-[#0C111E]"
                        : "border-[#3D4254] bg-[#0C111E]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={() => setPaymentMethod(method.id)}
                      className="accent-[#1CC8F8]"
                    />
                    <span>{method.label}</span>
                  </label>
                ))}
              </div>

              <div className="w-full p-4">
                <button className="w-full h-12 rounded-[8px] px-5 bg-[#1CC8F8] flex items-center justify-center hover:bg-[#3AD3FA] transition">
                  <span className="text-black font-extrabold font-inter text-[16px]">
                    Place Order
                  </span>
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
