import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "James Whitfield",
    role: "CEO, TechBridge UK",
    avatar: "/src/assets/images/avatar-man.jpg",
    quote: "Outple transformed our operations. We hired a full development team within a week — the quality is outstanding and the savings are significant. I'd recommend them to any scaling business.",
    rating: 5,
  },
  {
    name: "Amara Osei",
    role: "Head of Operations, FinServe Africa",
    avatar: "/src/assets/images/professional-woman.jpg",
    quote: "The professionals we've hired through Outple are dedicated, highly skilled, and culturally aligned with our values. The onboarding support was seamless from day one.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "HR Director, GlobalEdge Solutions",
    avatar: "/src/assets/images/avatar-woman.jpg",
    quote: "We were sceptical at first, but Outple exceeded every expectation. The talent network is exceptional. Our Malawian team members are some of our most productive employees.",
    rating: 5,
  },
  {
    name: "David Kamanga",
    role: "Senior Developer, placed via Outple",
    avatar: "/src/assets/images/avatar-man-2.jpg",
    quote: "Outple gave me the opportunity to work for a London-based company without leaving Malawi. My career has grown tremendously and I'm earning in a foreign currency.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const t = testimonials[index];

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a0533] to-[#3d1078]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-300 font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What Our <span className="text-purple-300">Clients Say</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <blockquote className="text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-10 italic">
            "{t.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-purple-300/50" />
            <div className="text-left">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-purple-300 text-sm">{t.role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === index ? "bg-white w-6" : "bg-white/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/20">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}