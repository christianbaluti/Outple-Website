import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Hire card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2d0a5e] to-[#3d1078] p-10 flex flex-col justify-between min-h-[320px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url('/src/assets/images/team-working.jpg')` }}
            />
            <div className="relative">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">For Businesses</span>
              <h3 className="text-3xl font-bold text-white mb-3">Ready to Build Your Dream Team?</h3>
              <p className="text-purple-200 leading-relaxed">
                Post your requirements and receive matched candidates within 48 hours. No long-term contracts required.
              </p>
            </div>
            <Link
              to={createPageUrl("HireTeam")}
              className="relative inline-flex items-center gap-2 bg-white text-[#3d1078] font-semibold px-6 py-3 rounded-full w-fit hover:bg-purple-50 transition-all group mt-6"
            >
              Start Hiring <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Job seeker card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 p-10 flex flex-col justify-between min-h-[320px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{ backgroundImage: `url('/src/assets/images/professional-woman-2.jpg')` }}
            />
            <div className="relative">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">For Job Seekers</span>
              <h3 className="text-3xl font-bold text-white mb-3">Launch Your Global Career Today</h3>
              <p className="text-gray-300 leading-relaxed">
                Join 50,000+ Malawian professionals already working with leading global companies. Your opportunity starts here.
              </p>
            </div>
            <Link
              to={createPageUrl("FindJobs")}
              className="relative inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-all group mt-6"
            >
              Browse Jobs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}