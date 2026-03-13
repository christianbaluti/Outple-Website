import React from "react";

const stats = [
  { value: "50,000+", label: "Verified Professionals" },
  { value: "200+", label: "Global Businesses Served" },
  { value: "95%", label: "Client Satisfaction Rate" },
  { value: "48hrs", label: "Average Placement Time" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#3d1078] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-purple-200 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}