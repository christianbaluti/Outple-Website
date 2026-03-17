import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, FileText, Quote, Star } from "lucide-react";

const caseStudies = [
  {
    title: "Hey Broadband",
    industry: "Telecommunications",
    summary: "Driving value and quality through offshore talent for customer service roles",
    result: "Higher quality talent at more efficient pricing than UK onshore",
    pdfUrl: "/src/assets/case-studies/hey-broadband.pdf",
    pdfPreview: "/src/assets/case-studies/hey-broadband-preview.jpg",
  },
  {
    title: "Umodzi Gin",
    industry: "Consumer Goods",
    summary: "Building a brand born and built on the African continent",
    result: "Simple overseas employment without local tax burden",
    pdfUrl: "/src/assets/case-studies/umodzi-gin.pdf",
    pdfPreview: "/src/assets/case-studies/umodzi-gin-preview.jpg",
  },
  {
    title: "Fortius Telecommunications",
    industry: "Telecommunications",
    summary: "Optimising operational expenditure through strategic offshore hiring",
    result: "Improved workplace engagement across 11 UK employees",
    pdfUrl: "/src/assets/case-studies/fortius-telecom.pdf",
    pdfPreview: "/src/assets/case-studies/fortius-telecom-preview.jpg",
  },
  {
    title: "Digital Infrastructure",
    industry: "Finance & Infrastructure",
    summary: "Building offshore financial operations team for cost efficiency",
    result: "Reduced operational expenditure and increased diversity",
    pdfUrl: "/src/assets/case-studies/digital-infrastructure.pdf",
    pdfPreview: "/src/assets/case-studies/digital-infrastructure-preview.jpg",
  },
];

const testimonials = [
  {
    quote: "We began hiring our team onshore in the UK and we had found that salaries of £21,000 were being commanded in London for entry level customer service and call centre roles. Outple offered us talent of higher quality offshore at a more efficient price. This has driven value and quality into our business.",
    author: "Marta Comas",
    role: "CEO, Hey Broadband",
    rating: 5,
  },
  {
    quote: "The ethos of Umodzi Gin is that our product and our brand is born and built on the continent so it was really important for us to employ our staff overseas in the continent of Africa. Outple provided the service through which we could do this simply and without taking on the burden of local employment laws and taxes.",
    author: "Dave Mountain",
    role: "Founder, Umodzi Gin",
    rating: 5,
  },
  {
    quote: "We operate in an industry where margins are tight and it's important that we optimise our operational expenditure. We have Administrative and Human Resource requirements that are extensive as we are in the business of managing people. Outple helped us to fulfil these requirements through the hire of Walu – who brightened up our workplace and improved engagement and motivation across all of our 11 UK employees.",
    author: "James Sagoe",
    role: "Managing Director, Fortius Telecoms",
    rating: 5,
  },
  {
    quote: "Outple are a core supplier of talented individuals that drive the bookkeeping, financial analytics, budgeting, planning and reporting process for our business. We reviewed a cost / benefit of building this team in the UK and Offshore and we've found that by outsourcing and offshoring these services we have reduced the operational expenditure in our business and increased diversity.",
    author: "Carlos Bock",
    role: "Chairman, Digital Infrastructure",
    rating: 5,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/team-office.jpg"
            alt="Case Studies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#432d7e]/90 via-[#432d7e]/75 to-black/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center py-32">
          <span className="inline-block bg-white/10 text-white/80 text-[14px] font-medium leading-[1.3] px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">Success Stories</span>
          <h1 className="text-[48px] lg:text-[56px] font-bold text-white leading-[1.2] mb-6">Case Studies & Testimonials</h1>
          <p className="text-[18px] text-white/75 leading-[1.6] max-w-2xl mx-auto">
            See how businesses worldwide have transformed their operations with Outple's exceptional talent from Malawi.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3">Real Results</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2]">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={study.pdfPreview} alt={`${study.title} case study preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#432d7e] text-white text-[12px] leading-[1.5] font-semibold px-3 py-1 rounded-full">{study.industry}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[22px] font-semibold text-gray-900 leading-[1.3] mb-2">{study.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-[1.6] mb-4">{study.summary}</p>
                  <div className="bg-purple-50 rounded-xl p-3 mb-4">
                    <p className="text-[#432d7e] font-semibold text-[14px] leading-[1.5]">{study.result}</p>
                  </div>
                  <a
                    href={study.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#432d7e] text-[14px] font-semibold hover:gap-3 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    Download Case Study
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#432d7e] font-medium text-[14px] leading-[1.3] tracking-widest uppercase mb-3">What Our Clients Say</span>
            <h2 className="text-[36px] font-bold text-gray-900 leading-[1.2]">Testimonials</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-purple-200 mb-4" />
                <p className="text-gray-600 text-[16px] leading-[1.6] mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-[16px] leading-[1.3]">{t.author}</p>
                  <p className="text-gray-500 text-[14px] leading-[1.5]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#432d7e]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-[36px] font-bold text-white leading-[1.2] mb-4">Join Us</h2>
          <p className="text-purple-200 text-[18px] leading-[1.6] mb-8 max-w-2xl mx-auto">
            Whether you're a business leader looking to scale with world-class professionals, or a skilled Malawian seeking global opportunities, Outple is here to make connections that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("HireTeam")} className="inline-flex items-center justify-center gap-2 bg-white text-[#432d7e] text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors group">
              Hire Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to={createPageUrl("FindJobs")} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white text-[16px] font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Find Jobs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
