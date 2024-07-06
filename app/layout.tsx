import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeContextProvider from "@/context/themeContext";
import ThemeSwitch from "@/components/themeSwitch";

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
    <html lang="en" className="custom-scrollbar !scroll-smooth">
      <body
        className={`${poppins.className}bg-gray-50 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200 overflow-x-auto`}
      >
        <ThemeContextProvider>
          <Navbar />
          {children}
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
