"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#E5E5E5]">
        <div className="relative z-10 text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-60"
          >
            Original Abstract Works
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl mb-8 tracking-tight"
          >
            Brad Kirn
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link href="/gallery" className="border border-black px-10 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/5] bg-gray-200" /> {/* Replace with featured art img */}
          <div>
            <h2 className="font-serif text-4xl mb-6 italic">"Bumps along the way."</h2>
            <p className="text-sm leading-relaxed opacity-70 mb-8 max-w-md">
              A journey of motion, texture, and resilience. Each piece represents a moment of finding balance 
              within the chaos of the creative process.
            </p>
            <Link href="/about" className="text-[10px] uppercase tracking-widest border-b border-black pb-1">Read the Story</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
