import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4 block text-center">The Journey</span>
      <h1 className="text-5xl font-serif text-center mb-16">From Architecture to Art</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 leading-relaxed text-neutral-600">
        <p className="text-xl text-neutral-900 font-light italic border-l-4 border-neutral-100 pl-8 py-2">
          "Raised in Hollywood, Florida, Brad Kirn has called Tallahassee home since 1985. A self-taught artist who has surrounded himself with all types of art for most of his life."
        </p>
        
        <p>
          Brad enjoys a rewarding career in <strong>Architecture</strong>, which heavily influences the geometric precision and balance of his abstract works. His creative expression extends beyond the canvas—he is a multi-instrumentalist (guitar, piano, bass), a woodworker, and a fly fisherman who ties his own flies.
        </p>

        <p>
          Over the last few years, during a period of health recovery, Brad found a new desire to express himself. What started as paint pouring evolved into sophisticated collage work and geometric layering using acrylics, chalk, ink, and oils.
        </p>

        <div className="bg-neutral-50 p-12 mt-8">
            <h2 className="text-black font-serif text-2xl mb-4">The Family Team</h2>
            <div className="grid grid-cols-2 gap-4 text-xs tracking-widest uppercase text-neutral-500">
                <div>Photography: <span className="text-black">David Hasten</span></div>
                <div>Design: <span className="text-black">Eden Kirn</span></div>
                <div>Consultant: <span className="text-black">Jillian Kirn</span></div>
                <div>Web: <span className="text-black">Sydney Mokray</span></div>
            </div>
        </div>
      </div>
    </div>
  );
}
