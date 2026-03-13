import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a0533] via-[#2d0a5e] to-[#4a1a8a]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/src/assets/images/team-collaboration.jpg')`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d0a5e]/90 via-[#2d0a5e]/70 to-transparent" />

      {/* Floating blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-violet-300/15 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Africa's Best-Kept Talent Secret</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Build Global Teams.{" "}
              <span className="bg-gradient-to-r from-violet-300 to-purple-200 bg-clip-text text-transparent">
                Empower Local Talent.
              </span>
            </h1>

            <p className="text-xl text-white/75 leading-relaxed mb-10 max-w-lg">
              Access a world-class workforce in Malawi and grow your business with real impact. Over 50,000 skilled professionals ready to work with you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("HireTeam")}
                className="group inline-flex items-center gap-3 bg-white text-[#3d1078] font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 shadow-xl hover:shadow-purple-900/30 hover:-translate-y-0.5"
              >
                Hire Talent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl("FindJobs")}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Find Jobs
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  "/src/assets/images/avatar-woman.jpg",
                  "/src/assets/images/avatar-man.jpg",
                  "/src/assets/images/professional-woman.jpg",
                  "/src/assets/images/avatar-man-2.jpg",
                ].map((src, i) => (
                  <img key={i} src={src} alt="client" className="w-10 h-10 rounded-full border-2 border-white/50 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-white/70 text-sm">Trusted by 200+ businesses worldwide</p>
              </div>
            </div>
          </div>

          {/* Right content – video card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/50">
              <img
                src="/src/assets/images/team-working.jpg"
                alt="Team working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d0a5e]/60 to-transparent" />
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </button>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <p className="text-white font-semibold">Watch Our Story</p>
                <p className="text-white/70 text-sm">See how Outple is transforming global hiring</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">New hire placed</p>
                  <p className="text-gray-500 text-xs">Senior Developer · 2 min ago</p>
                </div>
              </div>
            </div>

            {/* Second floating card */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-bold text-[#3d1078]">50K+</span>
              </div>
              <p className="text-gray-500 text-xs">Verified professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setVideoOpen(false)}>
          <div className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition">✕</button>
            <div className="aspect-video bg-black">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                className="w-full h-full"
                allow="autoplay"
                title="Outple Story"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}