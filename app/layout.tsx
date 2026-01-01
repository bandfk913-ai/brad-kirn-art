import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Brad Kirn Art | Abstract Expressionism",
  description: "Original abstract art by Brad Kirn. Bumps along the way.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl tracking-tighter">BRAD KIRN</Link>
            <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
              <Link href="/gallery" className="hover:opacity-50 transition">Gallery</Link>
              <Link href="/about" className="hover:opacity-50 transition">The Story</Link>
              <Link href="/contact" className="hover:opacity-50 transition">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20 min-h-screen">{children}</main>
        <footer className="py-20 px-6 text-center text-[10px] uppercase tracking-[0.3em] opacity-40">
          © {new Date().getFullYear()} Brad Kirn Art • Bumps along the way
        </footer>
      </body>
    </html>
  );
}
