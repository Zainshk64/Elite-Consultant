"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation"; // ✅ Import this

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname(); // ✅ Get current route

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Check if route is under /admin
  const isAdminRoute = pathname?.startsWith("/admin");

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
            {/* ✅ Show Navbar and Footer only if NOT admin route */}
            {!isAdminRoute && <Navbar />}

            <main className="min-h-screen">{children}</main>

            <Toaster
              position="bottom-left"
              toastOptions={{
                style: {
                  background: "#333",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
            />

            {!isAdminRoute && <Footer />}
          </>
        )}
      </body>
    </html>
  );
}
