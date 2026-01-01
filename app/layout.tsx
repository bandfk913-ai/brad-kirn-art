import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Brad Kirn Art | Abstract Expressionism",
  description: "Bumps along the way. Original abstract art by Brad Kirn.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-[#FAFAFA] text-[#1A1A1A] antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-playfair text-2xl tracking-tighter">BRAD KIRN</Link>
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
              <Link href="/gallery" className="hover:opacity-50 transition">Gallery</Link>
              <Link href="/about" className="hover:opacity-50 transition">The Story</Link>
              <Link href="/contact" className="hover:opacity-50 transition">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        <footer className="py-20 px-6 border-t border-black/5 text-center text-xs uppercase tracking-[0.2em] opacity-40">
          © {new Date().getFullYear()} Brad Kirn Art • Bumps along the way
        </footer>
      </body>
    </html>
  );
}
