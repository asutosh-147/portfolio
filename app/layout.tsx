import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asutosh | Web Developer Portfolio",
  description: "Explore My dynamic web development portfolio featuring modern designs, smooth animations, and innovative solutions using Next.js, Tailwind CSS, and Framer Motion. Dive into a showcase of creativity, technical prowess, and cutting-edge web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
