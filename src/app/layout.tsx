import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import Navbar from "@/components/global/Navbar";
import SmallNavbar from "@/components/global/SmallNavbar";
import Providers from "@/providers";

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
    <html lang="en" className="h-full scroll-smooth dark">
      <body className={`${inter.className} font-sans dark bg-black text-foreground`}>
        <Providers font={inter.className}>
          <Navbar />
          <SmallNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
