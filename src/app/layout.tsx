import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Lorvin AI",
  description: "AI-Driven Storytelling Platform",
};

const myFont = localFont({ src: "./ClashGrotesk-Medium.otf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` tracking-wider ${myFont.className}`}>{children}</body>
    </html>
  );
}
