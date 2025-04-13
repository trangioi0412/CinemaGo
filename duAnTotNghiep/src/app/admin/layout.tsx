"use client";
import { Be_Vietnam_Pro, Oswald } from "next/font/google";
import "./adminglobal.css";
import Nav from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import { linkLocal, links } from "./links/links";
import AppProvider from "./context/AppProvider";
import { useToggleNav } from "./context/ToggleNavContext";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = useState<boolean>(true);
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${beVietNamProSans.variable} ${oswald.variable}`}>
        <AppProvider>
          {toggle && (
            <Nav
              links={
                pathname.startsWith("/admin/adminLocal") ? linkLocal : links
              }
            />
          )}
          <main style={{ display: "flex" }}>
            {
              <Header
                toggleNav={() => setToggle(!toggle)}
                links={
                  pathname.startsWith("/admin/adminLocal") ? linkLocal : links
                }
              />
            }
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
