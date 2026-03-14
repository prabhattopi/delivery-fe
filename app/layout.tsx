import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery PWA",
  description: "Track your deliveries in real-time",
  applicationName: "Delivery Tracker",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Delivery Tracker",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning STOPS browser extensions from crashing your app
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RegisterSW />
        {children}
      </body>
    </html>
  );
}