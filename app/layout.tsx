import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "Brad Kirn Abstract Art",
  description: "From Architecture to Abstract: The Art of Brad Kirn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased font-sans">
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-xl font-serif tracking-tight font-bold">
              BRAD KIRN <span className="text-neutral-400 font-light">ART</span>
            </Link>
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
              <Link href="/shop" className="hover:text-neutral-500 transition-colors">Shop</Link>
              <Link href="/about" className="hover:text-neutral-500 transition-colors">About</Link>
              <Link href="/news" className="hover:text-neutral-500 transition-colors">News</Link>
              <Link href="/contact" className="hover:text-neutral-500 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-5">
              <Link href="/cart" className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </Link>
              <button className="md:hidden"><Menu size={20}/></button>
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="bg-neutral-50 py-16 mt-20 border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 text-center text-xs tracking-widest text-neutral-400 uppercase">
            <p>© 2025 Brad Kirn Art • All Content Protected</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
