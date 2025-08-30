import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import MaxWidthContainer from "@/components/shared/maxwidth-container";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuddley Interiors",
  description: "Elevate your space with Cuddley Interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} antialiased`}>
        <MaxWidthContainer>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthContainer>
      </body>
    </html>
  );
}
