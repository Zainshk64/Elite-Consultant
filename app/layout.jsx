import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import RootLayoutClient from "./RootLayoutClient";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>HnH Consultant - Your Gateway to Global Opportunities</title>
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
          {/* <RootLayoutClient geistSans={geistSans}> */}
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          {/* </RootLayoutClient> */}
      </body>
    </html>
  );
}

export const metadata = {
  generator: "v0.app",
};
