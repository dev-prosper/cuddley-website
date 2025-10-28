import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

type Cart = currentCart.Cart;

type CartState = {
  cart: Cart | null;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => Promise<void>;
  addItem: (
    wixClient: WixClient,
    productId: string,
    variantId?: string,
    quantity?: number,
  ) => Promise<void>;
  removeItem: (wixClient: WixClient, itemId: string) => Promise<void>;
};

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  counter: 0,

  getCart: async (wixClient: WixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || null,
        isLoading: false,
        counter: cart?.lineItems?.length || 0,
      });
    } catch (err) {
      console.error(err);
      set({ isLoading: false });
    }
  },

  addItem: async (
    wixClient: WixClient,
    productId: string,
    variantId?: string,
    quantity = 1,
  ) => {
    set({ isLoading: true });
    const response = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity,
        },
      ],
    });

    set({
      cart: response.cart,
      counter: response.cart?.lineItems?.length || 0,
      isLoading: false,
    });
  },

  removeItem: async (wixClient: WixClient, itemId: string) => {
    set({ isLoading: true });
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId],
    );

    set({
      cart: response.cart,
      counter: response.cart?.lineItems?.length || 0,
      isLoading: false,
    });
  },
}));
