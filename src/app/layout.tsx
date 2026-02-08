import type { Metadata } from "next";
import localFont from "next/font/local";

import { Geist, Geist_Mono, Anton, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

const nb = localFont({
  src: [
    {
      path: "./fonts/nb-international-regular/NB International Regular/NB-International.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Fish | Dashboard",
  description: "One Fish | Dashboard",
  icons: {
    icon: {
      url: "/icon/icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${permanentMarker.variable} ${nb.variable} antialiased`}
      >
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
