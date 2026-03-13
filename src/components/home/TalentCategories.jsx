import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Code2, BarChart2, Headphones, PenTool, BookOpen, TrendingUp, ArrowRight } from "lucide-react";

const categories = [
  { icon: Code2, title: "Technology & Engineering", count: "8,200+", color: "from-violet-500 to-purple-600" },
  { icon: BarChart2, title: "Finance & Accounting", count: "6,500+", color: "from-blue-500 to-indigo-600" },
  { icon: Headphones, title: "Customer Support", count: "12,000+", color: "from-pink-500 to-rose-600" },
  { icon: PenTool, title: "Creative & Design", count: "4,300+", color: "from-amber-500 to-orange-600" },
  { icon: BookOpen, title: "Education & Training", count: "3,100+", color: "from-green-500 to-emerald-600" },
  { icon: TrendingUp, title: "Sales & Marketing", count: "7,900+", color: "from-cyan-500 to-teal-600" },
];

export default function TalentCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="inline-block text-[#3d1078] font-semibold text-sm tracking-widest uppercase mb-3">Our Talent Pool</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Browse by <span className="text-[#3d1078]">Expertise</span>
            </h2>
          </div>
          <Link
            to={createPageUrl("FindJobs")}
            className="inline-flex items-center gap-2 text-[#3d1078] font-semibold hover:gap-3 transition-all"
          >
            View all categories <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={createPageUrl("FindJobs")}
              className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-lg`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#3d1078] transition-colors">{cat.title}</h3>
              <p className="text-sm text-gray-400">{cat.count} professionals</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}