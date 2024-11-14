import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Kulinarne podróże Dwóch Niedźwiadków",
  description: "",
  metadataBase: new URL(process.env.URL!),
  generator: "Next.js",
  keywords: ["blog", "jedzenie", "dobre", "recenzje", "opinie", "opinia", "warszawa"],
  robots: { index: true, follow: true },
  icons: {
    icon: process.env.URL! + "/icon/favicon.ico",
    apple: process.env.URL! + "/icon/apple-touch-icon.png"
  },
  manifest: process.env.URL! + "/"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Pacifico&display=swap" rel="stylesheet"/>
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
