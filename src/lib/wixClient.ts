import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { orders, currentCart, checkout } from "@wix/ecom";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";

export const wixClient = createClient({
  modules: {
    products,
    collections,
    orders,
    currentCart,
    checkout, // ✅ singular
    members,
    redirects, // ✅ still correct
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});
