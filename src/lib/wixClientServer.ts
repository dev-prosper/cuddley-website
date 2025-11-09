// import { OAuthStrategy, createClient } from "@wix/sdk";
// import { collections, products } from "@wix/stores";
// import { orders, currentCart, checkout } from "@wix/ecom"; // ✅ use checkout instead of ecom
// import { cookies } from "next/headers";
// import { members } from "@wix/members";
// import { redirects } from "@wix/redirects";

// export const wixClientServer = async () => {
//   let refreshToken;

//   try {
//     const cookieStore = await cookies();
//     refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
//   } catch (error) {
//     console.error(error);
//     refreshToken = {};
//   }

//   const wixClient = createClient({
//     modules: {
//       products,
//       collections,
//       orders,
//       members,
//       currentCart,
//       checkout,
//       redirects,
//     },
//     auth: OAuthStrategy({
//       clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//       tokens: {
//         refreshToken,
//         accessToken: { value: "", expiresAt: 0 },
//       },
//     }),
//   });

//   return wixClient;
// };

import { createClient, OAuthStrategy, RefreshToken } from "@wix/sdk";
import { cookies } from "next/headers";
import { wixModules } from "./wixModules";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refreshToken")?.value;
    if (token) refreshToken = JSON.parse(token);
  } catch (error) {
    console.error("Error reading refreshToken from cookies:", error);
  }

  return createClient({
    modules: wixModules,
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
};
