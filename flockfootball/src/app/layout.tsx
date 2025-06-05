import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Replace the Geist fonts with Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flock Football Analytics",
  description: "Dominating fantasy football with data-driven insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}