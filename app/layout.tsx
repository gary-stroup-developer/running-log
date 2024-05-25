import type { Metadata } from "next";
import { Poppins, Merriweather_Sans, ADLaM_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-poppins'
});
const mw = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-merriweather-sans'
});

const adlam = ADLaM_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-adlam'
});

export const metadata: Metadata = {
  title: "Running Log",
  description: "A running application that provides a fun and interactive experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${adlam.variable} ${mw.variable}`}>{children}</body>
    </html>
  );
}
