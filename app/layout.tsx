import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Asutosh | Web Developer",
  description:
    "Explore My dynamic web development portfolio featuring modern designs, smooth animations, and innovative solutions using Next.js, Tailwind CSS, and Framer Motion. Dive into a showcase of creativity, technical prowess, and cutting-edge web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className}bg-gray-50 dark:bg-zinc-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
