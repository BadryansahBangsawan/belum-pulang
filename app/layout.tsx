import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import { CartBottomBar } from "@/components/cart-bottom-bar";
import OfferPopup from "@/components/OfferPopup";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakehouse Café",
  description:
    "Warm, playful café experience with fresh bakes, coffee, and colorful vibes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${inter.variable} bg-cream text-brown antialiased`}
      >
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
