import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders, currentCart } from "@wix/ecom";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";

export const wixClient = createClient({
  modules: { products, collections, orders, members, currentCart, redirects }, // ✅ add redirects
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
  }),
});
