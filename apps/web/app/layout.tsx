import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import { Footer } from "@/components/footer";

import pageData from "@/lib/shared/page-data.json";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

export const metadata: Metadata = {
  title: "Niagara Glow Riders",
  description: "Niagara Glow Riders",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
      <body>
        {children}
        <Footer data={pageData.footer} />
      </body>
    </html>
  );
}
