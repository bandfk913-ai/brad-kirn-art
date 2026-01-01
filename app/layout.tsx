import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Brad Kirn Abstract Art | Original Artwork",
  description: "Abstract expressionism by Brad Kirn. Motion, balance, and texture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-white text-black antialiased`}>
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
          <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl tracking-tight hover:opacity-70 transition">
              Brad Kirn <span className="font-light text-neutral-400 italic">Abstract Art</span>
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-600">
              <Link href="/original-artwork" className="hover:text-black transition">Original Artwork</Link>
              <Link href="/about" className="hover:text-black transition">About the Artist</Link>
              <Link href="/contact" className="hover:text-black transition">Contact</Link>
              <div className="flex items-center space-x-4 pl-4 border-l border-neutral-200">
                <span>Cart (0)</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-24">{children}</main>
        <footer className="py-20 px-8 text-center text-[10px] uppercase tracking-[0.4em] text-neutral-400">
          All content © Brad Kirn Art • {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
