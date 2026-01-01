"use client";
import { motion } from "framer-motion";

const ARTWORKS = [
  { id: 1, title: "No. 64", price: "$1,200", size: "30x40" },
  { id: 2, title: "Links B.W.", price: "$450", size: "18x24" },
  { id: 3, title: "Resilience", price: "$800", size: "24x36" },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl mb-16 tracking-tight">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTWORKS.map((art) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={art.id}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] bg-gray-100 mb-6 overflow-hidden">
              <div className="w-full h-full bg-neutral-300 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-serif text-xl">{art.title}</h3>
              <p className="text-xs opacity-50 uppercase tracking-widest">{art.size}</p>
            </div>
            <p className="text-sm mt-1 opacity-70">{art.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
