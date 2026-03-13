import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0533] to-[#3d1078] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-9xl font-bold text-white/10 mb-4">404</div>
        <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-purple-200 text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center gap-2 bg-white text-[#3d1078] font-semibold px-6 py-3 rounded-full hover:bg-purple-50 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
}