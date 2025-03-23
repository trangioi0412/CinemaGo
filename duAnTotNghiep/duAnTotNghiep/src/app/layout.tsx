"use client";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { usePathname } from "next/navigation";
import Banner from "./Components/Banner/Banner";
const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={`${robotoSans.variable} ${robotoMono.variable}`}>
        <Navbar />
        {pathName === "/" && <Banner />}
        {pathName === "/" ? (
          <main style={{ marginTop: 0 }}>{children}</main>
        ) : (
          <main>{children}</main>
        )}
        <Footer />
      </body>
    </html>
  );
}
