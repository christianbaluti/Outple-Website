import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Monitor, HeadphonesIcon, BarChart3, Palette, Code, PenTool, Calculator, Users, Search, Megaphone, Database, Shield, BookOpen, Camera, Globe } from "lucide-react";

const services = [
  {
    title: "Dedicated Remote Teams",
    tagline: "Your team, our talent.",
    desc: "Build a full-time remote workforce that works exclusively for your business. Ideal for companies that want consistent output, long-term collaboration, and a team that truly understands your culture.",
    features: ["Full-time, exclusive commitment", "Managed onboarding & HR support", "Ongoing performance reviews", "Direct communication with your team"],
    img: "/src/assets/images/professional-at-work.jpg",
  },
  {
    title: "Flexible Staffing",
    tagline: "Scale when you need to.",
    desc: "Need to ramp up for a project or fill a short-term gap? Our flexible staffing solutions let you access pre-vetted professionals on demand, without long-term obligations.",
    features: ["No long-term contracts required", "Rapid placement within 48 hours", "Pay only for what you need", "Pre-screened & interview-ready candidates"],
    img: "/src/assets/images/team-meeting.jpg",
  },
  {
    title: "Executive Search",
    tagline: "Leadership that makes the difference.",
    desc: "Finding the right senior leader or specialist is one of the most critical decisions a business makes. Our executive search service connects you with the best talent for your most important roles.",
    features: ["C-suite and senior leadership roles", "Confidential and discreet search process", "Deep talent network in-country", "Thorough reference & background checks"],
    img: "/src/assets/images/executive.jpg",
  },
  {
    title: "BPO & Outsourced Functions",
    tagline: "Delegate the detail. Focus on growth.",
    desc: "Outsource entire business functions — from customer support to finance and accounting — to our managed teams in Malawi. We handle the infrastructure, you reap the results.",
    features: ["Customer service & support desks", "Finance, accounting & payroll", "Data entry & processing", "Quality assurance & testing"],
    img: "/src/assets/images/team-office.jpg",
  },
];

const roles = [
  { icon: Users, title: "Virtual Assistant", desc: "Administrative support, scheduling, email management, and task coordination" },
  { icon: Users, title: "Business Assistant", desc: "Strategic support for executives and business operations" },
  { icon: HeadphonesIcon, title: "Customer Service", desc: "Professional customer support and client relationship management" },
  { icon: BarChart3, title: "Sales Support", desc: "Lead generation, CRM management, and sales pipeline assistance" },
  { icon: Palette, title: "Graphic Designer", desc: "Visual design, branding, and creative content creation" },
  { icon: Megaphone, title: "Marketing Support", desc: "Campaign management, content creation, and marketing operations" },
  { icon: Calculator, title: "Finance Support", desc: "Bookkeeping, invoicing, and financial administration" },
  { icon: Monitor, title: "Administrative Support", desc: "Office management, documentation, and operational support" },
  { icon: HeadphonesIcon, title: "Call Centre", desc: "Inbound and outbound call handling, customer engagement" },
  { icon: Palette, title: "UX/UI Designers", desc: "User experience design, interface design, and prototyping" },
  { icon: Code, title: "Back-End Developers", desc: "Server-side development, APIs, and database management" },
  { icon: Code, title: "Front-End Developer", desc: "Web interfaces, responsive design, and user interactions" },
  { icon: Globe, title: "Social Media Manager", desc: "Social strategy, content scheduling, and community management" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with background image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/services-hero.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32 w-full">
          <span className="inline-block bg-white/10 text-white/80 text-[14px] font-medium leading-[1.3] px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">What We Offer</span>
          <h1 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-6">Our Services</h1>
          <p className="text-[18px] text-white/75 leading-[1.6] max-w-2xl mx-auto">
            From dedicated remote teams to full business process outsourcing, Outple provides the staffing solutions your business needs to grow with confidence.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {services.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <span className="text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3 block">{s.tagline}</span>
                <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">{s.title}</h2>
                <p className="text-gray-500 text-[16px] leading-[1.6] mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700 text-[16px] leading-[1.6]">
                      <CheckCircle className="w-5 h-5 text-[#432d7e] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={createPageUrl("HireTeam")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-6 py-3 rounded-full hover:bg-[#2d1a5e] transition-colors group">
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <img src={s.img} alt={s.title} className="w-full h-96 object-cover rounded-3xl shadow-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roles We Place */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3 block">Talent We Place</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">Roles Available for Remote Hiring</h2>
            <p className="text-gray-500 text-[16px] leading-[1.6] max-w-2xl mx-auto">Browse the full range of positions you can hire through Outple — all remote-ready, pre-vetted, and based in Malawi.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roles.map((role, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#432d7e] transition-colors duration-300">
                  <role.icon className="w-6 h-6 text-[#432d7e] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 text-[18px] leading-[1.3] mb-2">{role.title}</h3>
                <p className="text-gray-500 text-[14px] leading-[1.6]">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2] mb-4">Couldn't Find What You Are Looking For?</h2>
          <p className="text-gray-500 text-[16px] leading-[1.6] mb-8">No problem! If you have a specific requirement not covered by the options above, let us know, we will tailor make it to suite your needs.</p>
          <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#432d7e] text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
            Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}