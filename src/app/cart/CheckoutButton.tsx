"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutButton() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Your cart is empty.");

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Checkout failed:", data);
      alert("Checkout failed: " + data.error);
      return;
    }

    window.location.href = data.checkoutUrl;
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full bg-[#1CC8F8] text-white py-3 rounded-lg mt-4"
    >
      Proceed to Checkout
    </button>
  );
}
