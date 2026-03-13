import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Clock, Users, DollarSign, Shield, Laptop, Building, CheckCircle, Lock, UserCheck, Key, Server, FileCheck, Settings } from "lucide-react";

const businessSteps = [
  {
    num: "01",
    title: "Tell Us Your Needs",
    desc: "We learn about your business goals, team gaps, and skill requirements.",
    img: "/src/assets/images/meeting-briefing.jpg",
  },
  {
    num: "02",
    title: "We Source & Vet Candidates",
    desc: "Our recruitment team selects top professionals that match your criteria — already screened for skills, communication, and reliability.",
    img: "/src/assets/images/vetting.jpg",
  },
  {
    num: "03",
    title: "You Onboard and Scale",
    desc: "You choose your team. We handle contracts, HR, and compliance — so you can focus on growth.",
    img: "/src/assets/images/team-work.jpg",
  },
];

const businessPromises = [
  { icon: Clock, text: "Fast turnarounds" },
  { icon: Users, text: "Flexible staffing" },
  { icon: DollarSign, text: "Cost-effective and ethical" },
];

const jobSeekerSteps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Register and build your professional profile — showcase your skills, qualifications, experience, and the type of work you're looking for.",
    img: "/src/assets/images/profile-creation.jpg",
  },
  {
    num: "02",
    title: "We Match You to Opportunities",
    desc: "Our team reviews your profile and matches you with relevant vacancies from international companies actively looking for your skills.",
    img: "/src/assets/images/matching.jpg",
  },
  {
    num: "03",
    title: "Interview & Get Selected",
    desc: "You'll be invited to interview with potential employers. We help you prepare and ensure you present your best self throughout the process.",
    img: "/src/assets/images/interview.jpg",
  },
  {
    num: "04",
    title: "Start Your Remote Career",
    desc: "Once placed, you start earning in foreign currency from the comfort of Malawi. We stay in touch to support your ongoing success.",
    img: "/src/assets/images/professional-at-work.jpg",
  },
];

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState("business");
  const steps = activeTab === "business" ? businessSteps : jobSeekerSteps;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/src/assets/images/team-collaboration.jpg" alt="How it works" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32 w-full">
          <span className="inline-block bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">The Process</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Whether you're a business looking to hire or a professional looking for work, our process is designed to be simple, transparent, and fast.
          </p>
        </div>
      </section>

      {/* Tab toggle */}
      <section className="py-16 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="flex bg-gray-100 p-1 rounded-full">
              {[
                { key: "business", label: "For Businesses" },
                { key: "jobseeker", label: "For Job Seekers" },
              ].map(tab => (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab.key ? "bg-[#432d7e] text-white shadow" : "text-gray-500 hover:text-gray-800"}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "business" && (
            <p className="text-center text-[#432d7e] font-semibold text-lg mb-14">We've Made Outsourcing Seamless.</p>
          )}

          <div className="space-y-20">
            {steps.map((step, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <span className="text-6xl font-bold text-gray-100 block mb-2 leading-none">{step.num}</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-lg">{step.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img src={step.img} alt={step.title} className="w-full h-72 object-cover rounded-2xl shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Business Promises */}
          {activeTab === "business" && (
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {businessPromises.map((promise, i) => (
                <div key={i} className="flex items-center gap-3 bg-purple-50 px-6 py-3 rounded-full">
                  <promise.icon className="w-5 h-5 text-[#432d7e]" />
                  <span className="font-semibold text-gray-800">{promise.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Security & Compliance</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Security built for UK businesses</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Outple provides a secure, professionally managed environment for your remote employees. Our framework is aligned with Cyber Essentials Plus and ISO 27001 principles, ensuring your data, systems and access are protected.
            </p>
            <p className="text-gray-400 mt-4">We don't rely on hope, trust or informal arrangements — we rely on structured controls, auditing and policy-driven operations.</p>
          </div>

          {/* Security Principles */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Our Security Principles</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Least privilege", "Separation of duties", "Device compliance by default", "Controlled access", "Data minimisation", "Policy-led operations", "Auditable, traceable actions"].map((principle, i) => (
                <span key={i} className="bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm">{principle}</span>
              ))}
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Managed Devices */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">1. Managed & Secured Devices</h4>
              <p className="text-gray-400 text-sm mb-4">Outple employees work on company-managed laptops with:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Mandatory full-disk encryption</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Enforced strong passwords & MFA</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Remote lock and wipe capability</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Antivirus/endpoint protection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Prohibited use of USB storage</li>
              </ul>
            </div>

            {/* Secure Office */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">2. Secure Office Infrastructure</h4>
              <p className="text-gray-400 text-sm mb-4">A stable, supervised environment that removes risks:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Enterprise-grade fibre connection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Redundant backup connection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Generator / backup power</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Secured access with CCTV</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Clean desk policy</li>
              </ul>
            </div>

            {/* Background Checks */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">3. Background Checks & ID Verification</h4>
              <p className="text-gray-400 text-sm mb-4">All employees undergo verification:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white text-xs font-semibold mb-2">Standard Check:</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• ID verification</li>
                    <li>• Reference verification</li>
                    <li>• Education check</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold mb-2">Enhanced Check:</p>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li>• Police Clearance</li>
                    <li>• Sanctions screening</li>
                    <li>• Adverse media report</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Access Control */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">4. Access Control & Data Protection</h4>
              <p className="text-gray-400 text-sm mb-4">Employees only access exactly what they need:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Role-based permissions</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Access approval workflows</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />No local storage of client data</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />NDAs and data protection training</li>
              </ul>
            </div>

            {/* Cyber Essentials */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">5. Cyber Essentials Plus Alignment</h4>
              <p className="text-gray-400 text-sm mb-4">Our controls follow CE+ expectations:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />User access control</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Malware protection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Secure configuration</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Patch management</li>
              </ul>
            </div>

            {/* ISO 27001 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">6. ISO 27001-Informed Operations</h4>
              <p className="text-gray-400 text-sm mb-4">Building ISMS around ISO 27001 practices:</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Risk assessments</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Policy documentation</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Incident response processes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />Business continuity planning</li>
              </ul>
            </div>
          </div>

          {/* Client-Specific */}
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#432d7e] rounded-xl flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">7. Client-Specific Security Requirements</h4>
                <p className="text-gray-400 text-sm mb-4">For organisations with tighter controls, we support:</p>
                <div className="flex flex-wrap gap-2">
                  {["VPN routing", "Dedicated VLANs", "Device restrictions", "Logging & monitoring", "Custom onboarding flows", "Security playbooks"].map((item, i) => (
                    <span key={i} className="bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-xs">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security CTA */}
          <div className="mt-12 text-center">
            <p className="text-white text-lg font-semibold mb-2">Security you can rely on. Stability you can trust.</p>
            <p className="text-gray-400 mb-6">We bring UK-grade expectations to global hiring.</p>
            <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-white text-[#432d7e] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors group">
              Book a call to discuss your security requirements <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-gray-500 text-lg mb-8">Join hundreds of businesses and professionals already working through Outple.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("HireTeam")} className="inline-flex items-center justify-center gap-2 bg-[#432d7e] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2d1a5e] transition-colors group">
              Hire Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={createPageUrl("FindJobs")} className="inline-flex items-center justify-center gap-2 shadow-md text-[#432d7e] font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-colors bg-white">
              Find a Job
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}