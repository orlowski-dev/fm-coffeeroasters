import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
