"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Replace with your high-res hero image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale-[20%]" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-playfair text-6xl md:text-8xl mb-4"
          >
            Abstracts in Motion
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-inter uppercase tracking-[0.4em] text-sm"
          >
            By Brad Kirn
          </motion.p>
        </div>
      </section>

      {/* Modern Grid Preview */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-playfair text-4xl">Latest Works</h2>
          <Link href="/gallery" className="text-sm uppercase border-b border-black pb-1 hover:opacity-50 transition">View All</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden mb-4">
                 {/* Placeholder for Artwork */}
                 <div className="w-full h-full bg-slate-300 group-hover:scale-105 transition duration-700" />
              </div>
              <h3 className="font-inter font-medium">Original Piece No. {item}</h3>
              <p className="text-sm opacity-50 uppercase tracking-tighter">Oil on Canvas</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
