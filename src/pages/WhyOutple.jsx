import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Users, Zap, TrendingUp, Heart, CheckCircle, Globe } from "lucide-react";

const benefits = [
  { icon: Users, title: "Top Talent Access", desc: "Highly educated, ambitious, and reliable professionals." },
  { icon: Zap, title: "Seamless Recruitment", desc: "Stress-free, fast, and transparent hiring." },
  { icon: TrendingUp, title: "Scalable Teams", desc: "From one role to full departments, grow at any stage." },
  { icon: Globe, title: "Cultural Compatibility", desc: "Malawi's workforce is collaborative and adaptable." },
  { icon: Heart, title: "Social Impact", desc: "Every hire empowers communities and drives growth in Africa." },
];

export default function WhyOutple() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/team-collaboration.jpg"
            alt="Why Outple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          <span className="inline-block bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Why Choose Us</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Why Outple?</h1>
          <p className="text-2xl text-purple-200 font-semibold mb-4">Smart Outsourcing. Real Impact.</p>
          <p className="text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            At Outple, we connect businesses around the world with Malawi's top talent — a country known for its exceptional education system, skilled professionals, and warm, friendly culture.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#432d7e] mb-2">50,000+</div>
              <div className="text-gray-500">Qualified Candidates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#432d7e] mb-2">48hrs</div>
              <div className="text-gray-500">Average Placement</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#432d7e] mb-2">100+</div>
              <div className="text-gray-500">Global Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#432d7e] mb-2">95%</div>
              <div className="text-gray-500">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="inline-block text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-4">Our Network</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Access to 50,000+ Qualified Candidates</h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                With over 50,000 qualified candidates in our talent network, we help companies scale faster, smarter, and more affordably. From startups to enterprise teams, we simplify remote staffing — matching you with vetted, highly-educated professionals across key industries.
              </p>
              <Link to={createPageUrl("Services")} className="inline-flex items-center gap-2 text-[#432d7e] font-semibold hover:gap-3 transition-all">
                View Our Services <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <img src="/src/assets/images/team-working.jpg" alt="Talent network" className="rounded-3xl shadow-xl w-full h-80 object-cover" />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="text-center mb-12">
            <span className="inline-block text-[#432d7e] font-semibold text-sm tracking-widest uppercase mb-3">Why Work With Us</span>
            <h2 className="text-4xl font-bold text-gray-900">The Outple Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#432d7e] transition-colors">
                  <b.icon className="w-7 h-7 text-[#432d7e] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
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
      <section className="py-20 bg-[#432d7e]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Global Team?</h2>
          <p className="text-purple-200 text-lg mb-8">Join companies worldwide hiring smarter with Outple. Access Malawi's brightest talent.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("HireTeam")} className="inline-flex items-center justify-center gap-2 bg-white text-[#432d7e] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors group">
              Start Hiring <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
