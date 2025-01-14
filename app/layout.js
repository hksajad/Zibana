import "./globals.css";
import './grid.css'
import './responsive.css'
import localFont from "next/font/local";
const yekan = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakhMedium.woff",
      style: "normal",
    }
  ]
})

export const metadata = {
  title: "زیبانا",
  icons : {
    icon : "/img/favIcon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>{children}</body>
    </html>
  );
}
