// "use client";
// export const dynamic = "force-dynamic";

// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { products, collections } from "@wix/stores";
// import { currentCart } from "@wix/ecom";
// import Cookies from "js-cookie";
// import { createContext, ReactNode } from "react";

// const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

// const wixClient = createClient({
//   modules: {
//     products,
//     collections,
//     currentCart,
//   },
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//     tokens: {
//       refreshToken,
//       accessToken: { value: "", expiresAt: 0 },
//     },
//   }),
// });

// export type WixClient = typeof wixClient;

// export const WixClientContext = createContext<WixClient>(wixClient);

// export const WixClientContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   return (
//     <WixClientContext.Provider value={wixClient}>
//       {children}
//     </WixClientContext.Provider>
//   );
// };

// "use client";

// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { products, collections } from "@wix/stores";
// import { currentCart } from "@wix/ecom";
// import Cookies from "js-cookie";
// import { createContext, ReactNode, useMemo } from "react";

// export const WixClientContext = createContext<any>(null);

// export const WixClientContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   // read cookie inside the hook, only in the browser
//   const wixClient = useMemo(() => {
//     const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

//     return createClient({
//       modules: {
//         products,
//         collections,
//         currentCart,
//       },
//       auth: OAuthStrategy({
//         clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//         tokens: {
//           refreshToken,
//           accessToken: { value: "", expiresAt: 0 },
//         },
//       }),
//     });
//   }, []);

//   return (
//     <WixClientContext.Provider value={wixClient}>
//       {children}
//     </WixClientContext.Provider>
//   );
// };

"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, ReactNode, useMemo } from "react";

// infer the type directly from createClient
type WixClientType = ReturnType<typeof createClient>;

export const WixClientContext = createContext<WixClientType | null>(null);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const wixClient = useMemo<WixClientType>(() => {
    const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

    return createClient({
      modules: {
        products,
        collections,
        currentCart,
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
          refreshToken,
          accessToken: { value: "", expiresAt: 0 },
        },
      }),
    });
  }, []);

  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
