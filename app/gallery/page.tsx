"use client";
import { motion } from "framer-motion";

const ARTWORKS = [
  { id: 1, title: "No. 64", size: "30x40", price: "$1,200", type: "Canvas" },
  { id: 2, title: "Links B.W.", size: "18x24", price: "$450", type: "Paper" },
  // Add all your inventory here
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <header className="mb-20">
        <h1 className="font-playfair text-5xl mb-4">Collection</h1>
        <div className="flex gap-6 text-xs uppercase tracking-widest opacity-60">
          <button className="border-b border-black">All</button>
          <button className="hover:text-black transition">Canvas</button>
          <button className="hover:text-black transition">Paper</button>
        </div>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {ARTWORKS.map((art) => (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="break-inside-avoid group relative"
            key={art.id}
          >
            <div className="relative overflow-hidden bg-gray-100">
               <img 
                 src={`/api/placeholder/600/${art.id % 2 === 0 ? '800' : '400'}`} 
                 alt={art.title}
                 className="w-full grayscale hover:grayscale-0 transition duration-700"
               />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-8 py-3 text-xs uppercase tracking-widest">
                    View Details
                  </button>
               </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div>
                <h3 className="font-medium text-lg">{art.title}</h3>
                <p className="text-sm opacity-50">{art.size} • {art.type}</p>
              </div>
              <p className="font-medium">{art.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
