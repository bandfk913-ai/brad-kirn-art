'use client';
import { motion } from "framer-motion";

const ARTWORK = [
  { id: 1, title: "SOP Series 2", type: "Canvas", size: "30x30", price: "$1,200", img: "https://placehold.co/600x800/EEE/31343C?text=Art+Sample+1" },
  { id: 2, title: "Geometric Flow", type: "Paper", size: "14x11", price: "$450", img: "https://placehold.co/600x600/EEE/31343C?text=Art+Sample+2" },
  { id: 3, title: "Architecture Study 1", type: "Canvas", size: "48x36", price: "$2,400", img: "https://placehold.co/800x600/EEE/31343C?text=Art+Sample+3" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center text-white px-6"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] mb-4 font-light text-neutral-400">Tallahassee, FL</h2>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Architecture <br/>to Abstract</h1>
          <button className="border border-white/30 hover:bg-white hover:text-black transition-all px-8 py-3 uppercase tracking-widest text-xs">
            View Collection
          </button>
        </motion.div>
        <div className="absolute inset-0 opacity-40 grayscale">
            {/* Replace with actual Brad Kirn hero image */}
            <img src="https://placehold.co/1920x1080/000/FFF?text=Hero+Artwork" alt="Abstract Art" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Modernized Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-3xl font-serif">Original Artwork</h3>
            <p className="text-neutral-500 mt-2">Acrylic on gallery-wrapped canvas and cold-press paper.</p>
          </div>
          <div className="flex space-x-6 text-xs uppercase tracking-widest font-bold">
            <button className="border-b-2 border-black pb-1">All</button>
            <button className="text-neutral-400 hover:text-black transition-colors">Canvas</button>
            <button className="text-neutral-400 hover:text-black transition-colors">Paper</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {ARTWORK.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-6 relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white px-3 py-1 text-[10px] uppercase tracking-tighter shadow-sm font-bold">Available</span>
                </div>
              </div>
              <h4 className="font-serif text-xl">{item.title}</h4>
              <p className="text-neutral-400 text-sm mt-1 uppercase tracking-widest">{item.size} • {item.type}</p>
              <p className="mt-2 font-medium">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
