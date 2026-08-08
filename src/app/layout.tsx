import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/background/StarBackground";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Falit Sharma | Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, TypeScript and modern web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
