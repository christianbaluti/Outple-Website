import React, { useState } from "react";

const tabs = ["For Businesses", "For Job Seekers"];

const businessSteps = [
  {
    step: "01",
    title: "Tell Us Your Needs",
    desc: "Share your role requirements, team size, and timeline. Our consultants will craft the perfect talent brief.",
    img: "/src/assets/images/needs-discussion.jpg",
  },
  {
    step: "02",
    title: "We Match & Vet",
    desc: "Our algorithm + human review team shortlists the best candidates from our verified pool of 50,000+ professionals.",
    img: "/src/assets/images/matching-vetting.jpg",
  },
  {
    step: "03",
    title: "Interview & Select",
    desc: "Meet your top candidates, conduct interviews, and choose your perfect hire — on your schedule.",
    img: "/src/assets/images/interview-select.jpg",
  },
  {
    step: "04",
    title: "Onboard & Grow",
    desc: "We handle contracts, payroll, and compliance. Your new team member is ready to hit the ground running.",
    img: "/src/assets/images/onboarding.jpg",
  },
];

const seekerSteps = [
  {
    step: "01",
    title: "Create Your Profile",
    desc: "Sign up and build your professional profile. Showcase your skills, experience, and what makes you exceptional.",
    img: "/src/assets/images/vetting.jpg",
  },
  {
    step: "02",
    title: "Skills Assessment",
    desc: "Complete our skills verification tests. Top scores get you into our premium talent pool — visible to global employers.",
    img: "/src/assets/images/skills-assessment.jpg",
  },
  {
    step: "03",
    title: "Get Matched",
    desc: "Our platform matches you with roles that fit your skills, experience, and salary expectations.",
    img: "/src/assets/images/professional-woman.jpg",
  },
  {
    step: "04",
    title: "Start Working",
    desc: "Interview, get placed, and start your global career journey — all while working from Malawi.",
    img: "/src/assets/images/professional-woman-2.jpg",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);
  const steps = activeTab === 0 ? businessSteps : seekerSteps;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#3d1078] font-semibold text-sm tracking-widest uppercase mb-3">Process</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-[#3d1078]">Works</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Simple. Fast. Effective.</p>

          {/* Tabs */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mt-8">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-[#3d1078] text-white shadow-lg"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#3d1078]/30 to-transparent z-0 -translate-x-6" />
              )}
              <div className="relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="h-40 overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-block text-xs font-bold text-[#3d1078] bg-purple-100 px-2 py-1 rounded-md mb-3">{step.step}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}