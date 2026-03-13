import React from "react";
import { DollarSign, Shield, Zap, Globe, Heart, Award } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Cost-Effective Talent",
    desc: "Access top-tier professionals at a fraction of the cost compared to Western markets, without compromising on quality.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Shield,
    title: "Vetted & Verified",
    desc: "Every professional in our network undergoes rigorous skills assessments, background checks, and interviews.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Zap,
    title: "Fast Placement",
    desc: "Our streamlined process connects you with the right talent in as little as 48 hours — so you can focus on growth.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Globe,
    title: "Remote-Ready Teams",
    desc: "All our professionals are trained for remote collaboration, with reliable internet, communication skills, and professionalism.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Heart,
    title: "Real Impact",
    desc: "Every hire creates meaningful employment for young, educated Malawians — you grow your business while changing lives.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Award,
    title: "Dedicated Support",
    desc: "Our account managers are with you every step of the way, ensuring seamless onboarding and ongoing satisfaction.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function WhyOutple() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#3d1078] font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smart Outsourcing.<br />
            <span className="text-[#3d1078]">Real Impact.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We connect businesses around the world with Malawi's top talent — a country known for its exceptional education system, skilled professionals, and warm, friendly culture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-[#3d1078]/20 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-20 grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">
          <img src="/src/assets/images/professional-woman-2.jpg" alt="Professional" className="w-full h-64 object-cover" />
          <img src="/src/assets/images/professional-woman.jpg" alt="Team" className="w-full h-64 object-cover" />
          <img src="/src/assets/images/collaboration.jpg" alt="Collaboration" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  );
}