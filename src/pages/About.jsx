import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Heart, Globe, Users, Star, Shield, Lightbulb, Handshake, Target, Sparkles, CheckCircle } from "lucide-react";

const coreValues = [
  { icon: Star, title: "Excellence", desc: "We deliver world-class talent and services that help businesses grow with confidence." },
  { icon: Shield, title: "Integrity", desc: "We operate with transparency, trust, and fairness in every partnership." },
  { icon: Sparkles, title: "Empowerment", desc: "We create opportunities that allow Malawian professionals to thrive globally." },
  { icon: Target, title: "Impact", desc: "Every hire drives us closer to our mission of creating 1 million jobs and transforming communities." },
  { icon: Lightbulb, title: "Innovation", desc: "We embrace technology and new ideas to refine outsourcing and make it seamless." },
  { icon: Handshake, title: "Collaboration", desc: "We believe success is built together — with our clients, our talent, and our communities." },
];

const team = [
  { name: "Chisomo Banda", role: "Chief Executive Officer", img: "/src/assets/images/professional-woman.jpg" },
  { name: "James Whitfield", role: "Head of Global Partnerships", img: "/src/assets/images/avatar-man.jpg" },
  { name: "Aisha Mwale", role: "Director of Talent Acquisition", img: "/src/assets/images/professional-woman-2.jpg" },
  { name: "Sarah Mitchell", role: "Head of Client Success", img: "/src/assets/images/avatar-woman.jpg" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with background image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/team-office.jpg"
            alt="Outple team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/10 text-white/80 text-[14px] font-medium leading-[1.3] px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">About Outple</span>
            <h1 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-6">
              Transforming the Way the World Hires.
            </h1>
            <p className="text-white/75 text-[18px] leading-[1.6]">
              At Outple, we connect global companies with exceptional remote professionals from Malawi — a country known for its strong education system, driven workforce, and famously warm-hearted people.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/src/assets/images/team-working.jpg" alt="Mission" className="rounded-3xl w-full h-96 object-cover shadow-xl" />
            </div>
            <div>
              <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-4">Our Mission</span>
              <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-6">Building Bridges Between Talent and Opportunity</h2>
              <p className="text-gray-500 text-[16px] leading-[1.6] mb-6">
                With a curated network of over 50,000 skilled professionals, we simplify staffing and outsourcing — helping businesses scale sustainably while driving employment opportunities for young, educated Malawians.
              </p>
              <p className="text-gray-500 text-[16px] leading-[1.6] mb-8">
                Malawi's workforce is a hidden gem. It offers a unique combination of strong English proficiency, a high-quality education system, cultural adaptability, and a genuine work ethic that sets it apart from other talent markets globally.
              </p>
              <Link to={createPageUrl("HireTeam")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-6 py-3 rounded-full hover:bg-[#2d0a5e] transition-colors group">
                Work With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#432d7e]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8">
              <span className="inline-block text-purple-300 font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-4">Our Vision</span>
              <p className="text-[28px] lg:text-[32px] font-bold text-white leading-[1.2]">
                "To create 1 million jobs in Malawi by connecting the world with Africa's brightest talent."
              </p>
            </div>
            <div className="text-center p-8 border-t md:border-t-0 md:border-l border-white/20">
              <span className="inline-block text-purple-300 font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-4">Our Mission</span>
              <p className="text-[18px] text-white/90 leading-[1.6]">
                Make remote staffing simple — helping businesses grow while unlocking opportunities that transform lives and communities in Malawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3">What We Stand For</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2]">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#432d7e]" />
                </div>
                <h3 className="text-[22px] font-semibold text-gray-900 leading-[1.3] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-[16px] leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outple Promise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3">Our Commitment</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-2">The Outple Promise</h2>
            <p className="text-[18px] text-[#432d7e] font-semibold leading-[1.3]">People First. Purpose Always.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 lg:p-12 border border-purple-100">
            <p className="text-gray-600 text-[18px] leading-[1.6] mb-8">
              We don't just fill roles — we build bridges. Every hire through Outple:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[16px] leading-[1.6]">Empowers a skilled young professional in Malawi with life-changing work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-[16px] leading-[1.6]">Drives inclusive economic growth</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#432d7e] flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">Ready to Build Your Global Team?</h2>
          <p className="text-gray-500 text-[16px] leading-[1.6] mb-8">Join companies worldwide hiring smarter with Outple. Access Malawi's brightest talent.</p>
          <Link to={createPageUrl("HireTeam")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
            Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}