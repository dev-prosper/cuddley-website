"use client";
import React from "react";
import { wixClient } from "@/lib/wixClient";
import { useCart } from "@/context/CartContext";

type AddToCartProps = {
  productId: string;
  productName?: string;
  price?: number;
  imageUrl?: string;
  variantId?: string;
  quantity?: number;
  stockNumber?: number;
};

export default function AddToCart({
  productId,
  productName,
  price,
  imageUrl,
  quantity = 1,
  stockNumber,
}: AddToCartProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const { addToCart } = useCart();

  const isOutOfStock = stockNumber !== undefined && stockNumber <= 0;

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);

      // Add to local cart
      addToCart({
        _id: productId,
        name: productName || "Unnamed Product",
        price: price || 0,
        image: imageUrl || "/images/placeholder.png",
        quantity: quantity ?? 1,
      });

      // Optionally add to Wix cart too
      await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
            },
            quantity: quantity ?? 1,
          },
        ],
      });
    } catch (err) {
      console.error("❌ Failed to add to cart:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-3 px-4">
      <button
        onClick={handleAddToCart}
        disabled={isOutOfStock || isLoading}
        className="w-full h-14 rounded-[8px] cursor-pointer bg-[#1CC8F8] flex items-center justify-center text-black font-inter font-bold text-[16px]"
      >
        {isOutOfStock
          ? "Out of Stock"
          : isLoading
            ? "Adding..."
            : "Add to Cart"}
      </button>
    </div>
  );
}
