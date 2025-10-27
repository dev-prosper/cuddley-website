import type { Metadata } from "next";
import { Noto_Serif, Roboto, Inter } from "next/font/google";
import "./globals.css";
import MaxWidthContainer from "@/components/shared/maxwidth-container";
import ClientNavbar from "@/components/shared/ClientNavbar";
import Footer from "@/components/shared/footer";
import { wixClientServer } from "@/lib/wixClientServer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuddley Interiors",
  description: "Elevate your space with Cuddley Interiors",
};

type Category = {
  _id: string;
  slug: string;
  name: string;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let cats: Category[] = [];

  try {
    // ✅ Fetch Wix categories on the server with error handling
    const wixClient = await wixClientServer();
    const catsResponse = await wixClient.collections.queryCollections().find();
    console.log("Fetched categories:", catsResponse.items);
    cats = catsResponse.items.map(
      (cat): Category => ({
        _id: cat._id ?? "",
        slug: cat.slug ?? "",
        name: cat.name ?? "",
      }),
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Fallback to empty array if fetch fails
    cats = [];
  }

  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} ${roboto.variable} ${inter.variable} antialiased`}
      >
        <MaxWidthContainer>
          <ClientNavbar cats={cats} />
          {children}
          <Footer />
        </MaxWidthContainer>
      </body>
    </html>
  );
}
