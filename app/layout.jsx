'use client';

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>H&H Consultant - Your Gateway to Global Opportunities</title>
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
