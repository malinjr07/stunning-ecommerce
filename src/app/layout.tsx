import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./all.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "E Shop Now | One E-Commerce For All",
  description:
    "The One and Only E-Commerce Project that you'll ever dream about, the E Shop Now. With Maximum PageSpeed, GTmatrix Record, Most SEO, Server Optimized Application which will not only increase sells, but also reduce the Server Cost like no other application can! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
