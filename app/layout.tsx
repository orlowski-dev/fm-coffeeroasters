import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import AppHeader from "@/components/AppHeader";
import "./globals.css";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin-ext"],
  weight: ["400", "700"],
  variable: "--barlow",
});

const fraunces = Fraunces({
  subsets: ["latin-ext"],
  weight: ["700", "900"],
  variable: "--fraunces",
});

export const metadata: Metadata = {
  title: "Coffeeroasters",
  description: "Coffeeroasters subscription site solution - Frontend Mentor",
  icons: ["/brand/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${fraunces.variable}`}>
        <AppHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
