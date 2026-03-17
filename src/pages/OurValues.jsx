import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Globe, TrendingUp, ShieldCheck, Users, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "People First",
    desc: "Every decision we make starts with people — the professionals we represent, the businesses we serve, and the communities we impact. We never lose sight of the human behind every engagement.",
    img: "/src/assets/images/people-values.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Integrity Without Compromise",
    desc: "We are honest, transparent, and fair in everything we do. Our clients and candidates trust us because we say what we mean and deliver on our word — every time.",
    img: "/src/assets/images/integrity.jpg",
  },
  {
    icon: Globe,
    title: "Global Thinking, Local Impact",
    desc: "We connect the world's businesses with Malawi's talent. But we never forget our roots — every placement is an opportunity to create lasting economic change in local families and communities.",
    img: "/src/assets/images/global.jpg",
  },
  {
    icon: Lightbulb,
    title: "Excellence in Execution",
    desc: "We hold ourselves to the highest standards. From candidate vetting to client communication, we pursue excellence in every detail — because the businesses and professionals we work with deserve nothing less.",
    img: "/src/assets/images/excellence.jpg",
  },
  {
    icon: TrendingUp,
    title: "Growth for Everyone",
    desc: "We believe opportunity should be shared. When our clients grow, our talent grows. When our talent thrives, our platform grows. Success at Outple is never a zero-sum game.",
    img: "/src/assets/images/growth.jpg",
  },
  {
    icon: Users,
    title: "Partnership Over Transaction",
    desc: "We're not a job board or a CV database. We build real relationships — with businesses who trust us to find the right people, and with talent who rely on us to champion their careers.",
    img: "/src/assets/images/partnership.jpg",
  },
];

export default function OurValues() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/people-values.jpg" alt="Our Values" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32 w-full">
          <span className="inline-block bg-white/10 text-white/80 text-[14px] font-medium leading-[1.3] px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Who We Are</span>
          <h1 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-6">Our Values</h1>
          <p className="text-[18px] text-white/75 max-w-2xl mx-auto leading-[1.6]">
            These aren't aspirational statements on a wall. They are the principles that guide every hire, every placement, and every conversation we have.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-[#432d7e]" />
                  </div>
                  <h3 className="text-[22px] font-semibold text-gray-900 leading-[1.3] mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-[1.6]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outple Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3">Our Commitment</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-2">The Outple Promise</h2>
            <p className="text-[18px] text-[#432d7e] font-semibold leading-[1.3]">People First. Purpose Always.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <p className="text-gray-600 text-[18px] leading-[1.6] mb-8">
              We don't just fill roles — we build bridges. Every hire through Outple:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[16px] leading-[1.6]">Empowers a skilled young professional in Malawi with life-changing work</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[16px] leading-[1.6]">Drives inclusive economic growth</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[16px] leading-[1.6]">Supports your business with reliable, high-performing team members</span>
              </li>
            </ul>
            <p className="text-gray-600 text-[18px] leading-[1.6] font-medium">
              Outsourcing can be smart and meaningful. With Outple, it's both.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">Work with a company you can trust</h2>
          <p className="text-gray-500 text-[16px] leading-[1.6] mb-8">Our values aren't just words — they're the foundation of every relationship we build.</p>
          <Link to={createPageUrl("About")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
            Meet Our Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}