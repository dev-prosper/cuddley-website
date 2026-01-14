"use client";
export const dynamic = "force-dynamic";
import React, { useMemo, useState } from "react";
import PageHeader from "@/components/shared/page-header";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Page() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  // const [paymentMethod, setPaymentMethod] = useState("debit-card");
  const [loading, setLoading] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const subtotal = useMemo(
    () =>
      cart.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [cart],
  );
  const shipping = subtotal >= 500000 ? 0 : 20000;
  const tax = 5000;
  const total = subtotal + shipping + tax;

  const formatPrice = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

  // 🛒 Checkout flow
  const handleCheckout = async () => {
    try {
      setLoading(true);

      // Example user info — you can get this from your checkout form
      const userEmail = "customer@example.com";
      // const shippingAddress = "123 Main Street, Lagos, Nigeria";

      // Send to backend
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          amount: total,
          metadata: {
            cart,
            userAddress,
            // paymentMethod,
          },
        }),
      });

      const data = await response.json();

      if (data.status && data.data.authorization_url) {
        window.location.href = data.data.authorization_url;
      } else {
        alert("Error initializing payment");
        console.error(data);
      }
    } catch (error) {
      console.error("Payment init error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="px-4 pt-10 pb-2">
        <PageHeader pageName="Cart" />
      </header>

      <main>
        <section>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <div
                key={product._id ?? index}
                className="w-full h-18 py-2 px-4 flex justify-between items-center"
              >
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
            <div className="text-center text-gray-400 py-10">
              Your cart is empty 🛒
            </div>
          )}
        </section>

        {/* Only show when cart has items */}
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

            {/* Shipping Information Section */}
            <section>
              <div className="w-full h-11.5 pt-4 pl-4">
                <span className="font-bold font-inter text-white text-[18px]">
                  Shipping Information
                </span>
              </div>

              <div className="w-full h-28 py-3 px-4 flex flex-col gap-3">
                <label
                  htmlFor="Name"
                  className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="w-full h-28 py-3 px-4 flex flex-col gap-3">
                <label
                  htmlFor="Name"
                  className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  placeholder="youremail@sample.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              <div className="w-full h-28 py-3 px-4 flex flex-col gap-3">
                <label
                  htmlFor="Address"
                  className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  placeholder="123 Main Str"
                  value={userAddress}
                  onChange={(e) => setUserAddress(e.target.value)}
                  required
                />
              </div>

              <div className="w-full h-28 py-3 px-4 flex flex-col gap-3">
                <label
                  htmlFor="Country"
                  className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                >
                  Country
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  placeholder="Liam Carter"
                />
              </div>

              <div className="w-full h-28 py-3 px-4 flex flex-row gap-3">
                <div className="min-w-43 max-w-83 w-full h-22 flex flex-col gap-2">
                  <label
                    htmlFor="State"
                    className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                  >
                    State
                  </label>

                  <input
                    type="text"
                    className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  />
                </div>
                <div className="min-w-43 max-w-83 w-full h-22  flex flex-col gap-2">
                  <label
                    htmlFor="Zip-Code"
                    className="w-full h-8 font-inter font-medium text-[16px] text-white pb-2"
                  >
                    Zip Code
                  </label>

                  <input
                    type="text"
                    className="w-full h-14 bg-[#0C111E] p-4 rounded-[8px] border border-[#3D4254] text-[#9EA3B8]"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              {/* <div className="w-full px-4 pt-4 pb-2">
                <span className="font-inter font-bold text-[18px] text-white">
                  Payment Method
                </span>
              </div>

              <div className="w-full p-4 flex flex-col gap-4 text-white">
                {[
                  { id: "debit-card", label: "Debit Card" },
                  { id: "transfer", label: "Transfer" },
                ].map((method) => (
                  <label
                    key={method.id}
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
              </div> */}

              <div className="w-full p-4">
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-[#1CC8F8] font-medium text-white py-3 rounded-lg mt-4 cursor-pointer disabled:opacity-60"
                >
                  {loading ? "Processing..." : "Proceed to Checkout"}
                </button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
