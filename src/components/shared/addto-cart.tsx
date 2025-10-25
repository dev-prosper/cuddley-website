"use client";

import React from "react";
import { wixClient } from "@/lib/wixClient";

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
  variantId,
  quantity = 1,
  stockNumber,
}: AddToCartProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const isOutOfStock = stockNumber !== undefined && stockNumber <= 0;

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);

      const cart = await wixClient.currentCart.addToCurrentCart({
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

      console.log(" Added to cart:", cart);
    } catch (err) {
      console.error(" Failed to add to cart:", err);
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
        {isOutOfStock ? "Out of Stock" : isLoading ? "Adding..." : "Add to Cart"}
      </button>
    </div>
  );
}
