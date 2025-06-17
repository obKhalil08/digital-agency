import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { barlow } from "@/fonts";
import Navbar from "./components/globals/navbar/navbar";
import Footer from "./components/globals/footer/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Digital Agency",
  description: "A digital agency website template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} antialiased bg-grey-10 text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <div className="grow px-4 laptop:px-20 desktop:px-[162px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
