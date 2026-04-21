import type { Metadata } from "next";
import "./globals.css";
import { CartBottomBar } from "@/components/cart-bottom-bar";
import OfferPopup from "@/components/OfferPopup";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Kunawa Space",
  description:
    "Warm and modern cafe experience with coffee, food, and social vibes.",
  icons: {
    icon: "/logo/Kunawa_logo.jpg",
    shortcut: "/logo/Kunawa_logo.jpg",
    apple: "/logo/Kunawa_logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-brown antialiased">
        {children}
        <Analytics />
        <OfferPopup />
        <Script
          src="//code.tidio.co/ych9pywstrdywc6o1la5xbnyzj1j9mrz.js"
          strategy="afterInteractive"
        />
        <CartBottomBar />
      </body>
    </html>
  );
}
