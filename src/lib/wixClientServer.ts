import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders, currentCart, checkout } from "@wix/ecom"; // ✅ use checkout instead of ecom
import { cookies } from "next/headers";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";

export const dynamic = "force-dynamic";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (error) {
    console.error(error);
    refreshToken = {};
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
      orders,
      members,
      currentCart,
      checkout,
      redirects,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
