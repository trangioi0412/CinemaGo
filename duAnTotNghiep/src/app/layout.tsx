"use client";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { usePathname } from "next/navigation";
import { AppProvider } from "./Context/context";
const beVietNamProSans = Be_Vietnam_Pro({
  weight: ["400", "700"],
  variable: "--font-be-vietnam-pro-sans",
  subsets: ["latin", "vietnamese"],
});
const oswald = Oswald({
  weight: ["400", "700"],
  variable: "--font-oswald-sans",
  subsets: ["latin", "vietnamese"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  if (pathName.startsWith("/admin")) {
    return <>{children}</>;
  }
  return (
    <html lang="en">
      <body className={`${beVietNamProSans.variable} ${oswald.variable}`}>
        <AppProvider>
          <Navbar />
          <main style={{ display: "contents" }}>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
