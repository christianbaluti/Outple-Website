import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1920&q=80"
            alt="Professional at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#432d7e]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Outple — Since 2021</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Build Global Teams.<br />
              <span className="text-4xl lg:text-6xl text-white/60">
                Empower Local Talent.
              </span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Access a world-class workforce in Malawi — Africa’s best-kept talent secret — and grow your business with impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("HireTeam")} className="inline-flex items-center gap-2 bg-white text-[#432d7e] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all group shadow-xl">
                Hire Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to={createPageUrl("FindJobs")} className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all">
                Find Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Vetted Professionals" },
              { value: "200+", label: "Global Clients" },
              { value: "48hrs", label: "Average Placement Time" },
              { value: "15+", label: "Industries Covered" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-4 block">What We Do</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Africa's most connected staffing platform</h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-8">
                Outple bridges the gap between world-class businesses and talented professionals in Malawi. We handle everything: sourcing, vetting, contracts, compliance, and ongoing support.
              </p>
              <ul className="space-y-3 mb-8">
                {["Dedicated remote teams", "Flexible & project-based staffing", "Executive search", "Business process outsourcing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#432d7e] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl("Services")} className="inline-flex items-center gap-2 text-[#432d7e] font-semibold hover:gap-3 transition-all group">
                View all services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Team meeting" className="rounded-2xl h-64 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80" alt="Professional" className="rounded-2xl h-64 w-full object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY MALAWI TEASER */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/src/assets/images/blantyre_large.jpg"
                alt="Blantyre, Malawi"
                className="rounded-3xl w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="font-bold text-gray-900 text-sm">The Warm Heart of Africa</p>
                <p className="text-gray-500 text-xs">GMT+2 · English-speaking · University-educated</p>
              </div>
            </div>
            <div>
              <span className="text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-4 block">Why Malawi?</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Africa's best-kept talent secret</h2>
              <p className="text-gray-500 leading-relaxed text-lg mb-6">
                Malawi's professionals are English-speaking, university-educated, and eager to work with global companies. With a time zone aligned to Europe and a culture built on resilience and warmth, they consistently exceed expectations.
              </p>
              <Link to={createPageUrl("WhyMalawi")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#2d1a5e] transition-colors group">
                Discover why <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS TEASER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-3 block">Simple Process</span>
            <h2 className="text-4xl font-bold text-gray-900">Hire in 4 steps</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Tell us what you need", desc: "Share your role requirements with our team." },
              { num: "02", title: "We find & vet talent", desc: "We search and screen candidates from our 50K+ network." },
              { num: "03", title: "Review your shortlist", desc: "Interview pre-vetted candidates and make your choice." },
              { num: "04", title: "Your team starts work", desc: "We handle contracts, compliance, and onboarding." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-gray-100 mb-3">{step.num}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to={createPageUrl("HowItWorks")} className="inline-flex items-center gap-2 text-[#432d7e] font-semibold hover:gap-3 transition-all group">
              See the full process <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Outple Promise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-3">Our Commitment</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">The Outple Promise</h2>
            <p className="text-xl text-[#432d7e] font-semibold">People First. Purpose Always.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We don't just fill roles — we build bridges. Every hire through Outple:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Empowers a skilled young professional in Malawi with life-changing work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Drives inclusive economic growth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Supports your business with reliable, high-performing team members</span>
              </li>
            </ul>
            <p className="text-gray-600 text-lg font-medium">
              Outsourcing can be smart and meaningful. With Outple, it's both.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/80 to-[#1a0533]/95"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Build Your Global Team?</h2>
          <p className="text-purple-200 text-xl mb-8 max-w-2xl mx-auto">
            Join companies worldwide hiring smarter with Outple. Access Malawi's brightest talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("HireTeam")} className="inline-flex items-center justify-center gap-2 bg-white text-[#432d7e] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all group shadow-xl">
              Start Hiring <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={createPageUrl("FindJobs")} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Find Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Us</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a business leader looking to scale with world-class professionals, or a skilled Malawian seeking global opportunities, Outple is here to make connections that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("HireTeam")} className="inline-flex items-center justify-center gap-2 bg-[#432d7e] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
              For Businesses <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={createPageUrl("FindJobs")} className="inline-flex items-center justify-center gap-2 border-2 border-[#432d7e] text-[#432d7e] font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-colors">
              For Job Seekers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}