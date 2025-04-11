import { Be_Vietnam_Pro, Oswald } from "next/font/google";
import "./adminglobal.css";
import Nav from "./Components/Navbar/Navbar";
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
  return (
    <html lang="en">
      <body className={`${beVietNamProSans.variable} ${oswald.variable}`}>
        <main style={{ display: "flex" }}>
          <Nav/>
          {children}
          </main>
      </body>
    </html>
  );
}
