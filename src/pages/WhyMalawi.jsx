import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Globe, BookOpen, TrendingUp, Clock } from "lucide-react";

const reasons = [
  {
    icon: BookOpen,
    title: "English-Speaking Workforce",
    desc: "Malawi's education system is conducted in English from primary level, following the British English standard. This means professionals communicate fluently with clients across the UK, US, Australia, and beyond — no language barriers.",
    illustration: (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="160" fill="none"/>
        <rect x="30" y="40" width="140" height="90" rx="8" fill="#432d7e" opacity="0.1"/>
        <rect x="40" y="50" width="120" height="10" rx="3" fill="#432d7e" opacity="0.5"/>
        <rect x="40" y="66" width="90" height="8" rx="3" fill="#432d7e" opacity="0.3"/>
        <rect x="40" y="80" width="100" height="8" rx="3" fill="#432d7e" opacity="0.3"/>
        <rect x="40" y="94" width="70" height="8" rx="3" fill="#432d7e" opacity="0.3"/>
        <circle cx="155" cy="110" r="22" fill="#432d7e" opacity="0.15"/>
        <text x="145" y="116" fontSize="16" fill="#432d7e" fontWeight="bold">EN</text>
        <circle cx="50" cy="115" r="12" fill="#432d7e" opacity="0.2"/>
        <path d="M44 115 L50 109 L56 115 L50 121 Z" fill="#432d7e" opacity="0.5"/>
      </svg>
    ),
  },
  {
    icon: Globe,
    title: "Highly Educated Talent Pool",
    desc: "Malawi has a growing class of university graduates in technology, business, finance, and the arts. Many are underemployed domestically but thrive when given access to global opportunities.",
    illustration: (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="160" fill="none"/>
        <circle cx="100" cy="80" r="50" fill="#432d7e" opacity="0.1" stroke="#432d7e" strokeWidth="1.5" strokeOpacity="0.3"/>
        <ellipse cx="100" cy="80" rx="20" ry="50" fill="none" stroke="#432d7e" strokeWidth="1.5" strokeOpacity="0.3"/>
        <line x1="50" y1="80" x2="150" y2="80" stroke="#432d7e" strokeWidth="1.5" strokeOpacity="0.3"/>
        <line x1="58" y1="55" x2="142" y2="55" stroke="#432d7e" strokeWidth="1" strokeOpacity="0.25"/>
        <line x1="58" y1="105" x2="142" y2="105" stroke="#432d7e" strokeWidth="1" strokeOpacity="0.25"/>
        <circle cx="100" cy="80" r="6" fill="#432d7e" opacity="0.6"/>
        <circle cx="75" cy="60" r="4" fill="#432d7e" opacity="0.4"/>
        <circle cx="130" cy="95" r="4" fill="#432d7e" opacity="0.4"/>
        <circle cx="120" cy="55" r="3" fill="#432d7e" opacity="0.35"/>
        <circle cx="65" cy="100" r="3" fill="#432d7e" opacity="0.35"/>
      </svg>
    ),
  },
  {
    icon: TrendingUp,
    title: "Exceptional Work Ethic",
    desc: "Malawian professionals are known for their resilience, reliability, and dedication. With the opportunity of a global career, employees consistently go above and beyond for the businesses they support.",
    illustration: (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="160" fill="none"/>
        <rect x="30" y="120" width="20" height="20" rx="3" fill="#432d7e" opacity="0.2"/>
        <rect x="60" y="100" width="20" height="40" rx="3" fill="#432d7e" opacity="0.3"/>
        <rect x="90" y="75" width="20" height="65" rx="3" fill="#432d7e" opacity="0.45"/>
        <rect x="120" y="50" width="20" height="90" rx="3" fill="#432d7e" opacity="0.6"/>
        <rect x="150" y="28" width="20" height="112" rx="3" fill="#432d7e" opacity="0.8"/>
        <polyline points="40,110 70,90 100,65 130,40 160,18" stroke="#432d7e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="160" cy="18" r="5" fill="#432d7e"/>
        <polyline points="150,18 160,18 160,28" stroke="#432d7e" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    icon: Clock,
    title: "Competitive Time Zone",
    desc: "At GMT+2, Malawi overlaps conveniently with European business hours — making real-time collaboration easy for UK, European, and Middle Eastern businesses.",
    illustration: (
      <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="160" fill="none"/>
        <circle cx="100" cy="80" r="50" fill="#432d7e" opacity="0.08" stroke="#432d7e" strokeWidth="2" strokeOpacity="0.3"/>
        <circle cx="100" cy="80" r="44" fill="none" stroke="#432d7e" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const r = deg * Math.PI / 180;
          const x1 = 100 + 38 * Math.sin(r);
          const y1 = 80 - 38 * Math.cos(r);
          const x2 = 100 + 44 * Math.sin(r);
          const y2 = 80 - 44 * Math.cos(r);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#432d7e" strokeWidth={i % 3 === 0 ? 2 : 1} strokeOpacity="0.4"/>;
        })}
        <line x1="100" y1="80" x2="100" y2="48" stroke="#432d7e" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="100" y1="80" x2="122" y2="92" stroke="#432d7e" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="100" cy="80" r="4" fill="#432d7e"/>
        <text x="78" y="138" fontSize="10" fill="#432d7e" opacity="0.6" fontWeight="600">GMT +2</text>
      </svg>
    ),
  },
];

const stats = [
  { value: "18M+", label: "Population" },
  { value: "English", label: "Official Language" },
  { value: "GMT+2", label: "Time Zone" },
  { value: "Top 10", label: "Friendliest Nations in Africa" },
];

export default function WhyMalawi() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — Blantyre city aerial */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://visitmalawi.mw/wp-content/uploads/2021/10/blantyre_large.jpg"
            alt="Blantyre, Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          <span className="inline-block bg-white/10 text-white/80 text-[14px] font-medium leading-[1.3] px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">The Warm Heart of Africa</span>
          <h1 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-6">Why Malawi?</h1>
          <p className="text-[18px] text-white/80 max-w-2xl mx-auto leading-[1.6]">
            Malawi is one of Africa's hidden gems — a nation of driven, educated, English-speaking professionals ready to take on the world from home.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[36px] font-bold text-[#432d7e] leading-[1.2] mb-1">{s.value}</div>
                <div className="text-gray-500 text-[14px] leading-[1.5]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blantyre city photo feature */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-4 block">Blantyre, Malawi</span>
              <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-6">Africa's Hidden Talent Powerhouse</h2>
              <p className="text-gray-500 text-[16px] leading-[1.6] mb-6">
                Malawi nicknamed the “warm heart of Africa” for its culture rooted in friendliness and resilience,
                Malawi  is also a home to one of Africa’s strongest education systems, producing ambitious,
                high-performing graduates across disciplines. Despite this deep talent pool,
                quality job opportunities are limited. That’s where your business can make
                a difference — and benefit at the same time.
              </p>

              <h4 className="text-[22px] font-semibold text-gray-900 leading-[1.3] mb-4">Hiring with Impact</h4>

              <p className="text-gray-500 text-[16px] leading-[1.6]">
                Every hire through Outple not only gain top talent but also help unlock the potential of an entire nation. You are helping to
              </p>
              <ul className="list-disc list-inside text-gray-500 text-[16px] leading-[1.6]">
                <li>Reduce unemployment, empower youth, and fuel sustainable growth in Malawi. Together, we’re building stronger businesses and brighter futures.</li>
                <li>Empower skilled professionals with global opportunities</li>
              </ul>
              
            </div>
            <div className="relative">
              <img
                src="/src/assets/images/blantyre_city.jpg"
                alt="Blantyre city Malawi"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl">
                <p className="font-semibold text-gray-900 text-[14px] leading-[1.3]">📍 Blantyre, Malawi</p>
                <p className="text-gray-500 text-[12px] leading-[1.5]">Commercial Capital · 1M+ Population · GMT+2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons with illustrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          {reasons.map((r, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <r.icon className="w-6 h-6 text-[#432d7e]" />
                </div>
                <h2 className="text-[28px] font-semibold text-gray-900 leading-[1.3] mb-4">{r.title}</h2>
                <p className="text-gray-500 text-[16px] leading-[1.6]">{r.desc}</p>
              </div>
              <div className={`${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} h-64 flex items-center justify-center p-4`}>
                <div className="w-full h-full max-w-xs mx-auto">
                  {r.illustration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#432d7e]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="text-[28px] lg:text-[32px] text-white font-medium leading-[1.3] mb-8 italic">
            "Malawi offers a growing pool of highly capable professionals
            equipped to deliver value in today’s global economy."
          </blockquote>
          <p className="text-white/60 text-[14px] leading-[1.5]">— Outple</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">Ready to tap into this talent?</h2>
          <p className="text-gray-500 text-[16px] leading-[1.6] mb-8">Let us introduce you to Malawi's finest professionals, ready to work for your business.</p>
          <Link to={createPageUrl("HireTeam")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
            Hire Malawian Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}