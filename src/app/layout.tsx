import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/page/Navbar";
import Navfoot from "./components/page/Navfoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fiardiel's Portfolio",
  description: "Portfolio of Rafi Ardiel Erinaldi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full scroll-smooth">
      <body className={`${inter.className} font-sans dark h-full`}>
        <Navbar></Navbar>
        <NextUIProvider>
          {children}
        </NextUIProvider>
        <Navfoot></Navfoot>
      </body>
    </html>
  );
}
