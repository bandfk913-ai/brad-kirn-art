"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Immersive Hero */}
      <section className="relative h-[80vh] bg-neutral-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-90">
           {/* Update this with your best texture close-up */}
           <img 
            src="/hero-art.jpg" 
            alt="Brad Kirn Abstract Detail" 
            className="w-full h-full object-cover grayscale-[20%]"
           />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
          >
            Motion & <br/>Balance
          </motion.h1>
          <Link href="/original-artwork" className="inline-block bg-black text-white px-12 py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all">
            View Collection
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto py-32 px-8 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 mb-10 italic">Bumps along the way</h2>
        <p className="font-serif text-2xl md:text-3xl leading-relaxed text-neutral-800">
          "Inspiration comes in many forms if we are open to it, and mine comes from the compositions of shapes, colors, sounds, and smells that surround us all daily."
        </p>
      </section>
    </div>
  );
}
