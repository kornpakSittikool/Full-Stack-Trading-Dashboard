import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Body layout component
const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  return <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>;
};

// Root layout component
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <BodyLayout>{children}</BodyLayout>
    </html>
  );
};

export default RootLayout;
