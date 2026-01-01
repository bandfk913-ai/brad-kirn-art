"use client";
import { motion } from "framer-motion";

const CATEGORIES = [
  { name: "Artwork on Canvas", count: "40+", img: "/canvas-preview.jpg" },
  { name: "Artwork on Paper", count: "30+", img: "/paper-preview.jpg" }
];

export default function OriginalArtwork() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 py-20">
      <header className="mb-20">
        <h1 className="font-serif text-4xl mb-4">Original Artwork</h1>
        <p className="text-neutral-500 text-sm tracking-wide">Select a medium to explore the collection.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {CATEGORIES.map((cat, i) => (
          <motion.div 
            key={cat.name}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] bg-neutral-100 overflow-hidden mb-8 relative">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
              <img 
                src={cat.img} 
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="flex justify-between items-end border-b border-neutral-100 pb-6">
              <h2 className="font-serif text-3xl">{cat.name}</h2>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{cat.count} Pieces</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
