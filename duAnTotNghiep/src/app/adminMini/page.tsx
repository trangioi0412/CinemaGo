import { Be_Vietnam_Pro, Oswald } from "next/font/google";
import NavMini from "./Components/Navbar/navbar";
import style from "./adminMini.module.css"
import HeaderAdmin from "./Components/Header/header";

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
      <body className={`${beVietNamProSans.variable} ${oswald.variable} `}>
        <main className={style.boxAll}>
          <div className={style.navbar}>
            <NavMini></NavMini>   
          </div>
          <div className={style.header}>
            {<HeaderAdmin/>}
            {children}
          </div>
          
        </main>
      </body>
    </html>
  );
}
