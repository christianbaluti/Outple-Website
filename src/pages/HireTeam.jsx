import React, { useState } from "react";
import { CheckCircle, Users, Clock, Shield, ArrowRight, Loader2 } from "lucide-react";

const services = [
  {
    title: "Dedicated Remote Teams",
    desc: "Full-time, dedicated professionals who work exclusively for your business. Ideal for long-term projects and scaling operations.",
    features: ["Full-time commitment", "Exclusive to your company", "Managed onboarding", "Performance reviews"],
    img: "/src/assets/images/team-collaboration.jpg",
  },
  {
    title: "Flexible Staffing",
    desc: "Scale your workforce up or down based on project needs. Perfect for seasonal spikes or short-term engagements.",
    features: ["No long-term contracts", "Quick turnaround", "Pay as you go", "Pre-vetted talent"],
    img: "/src/assets/images/needs-discussion.jpg",
  },
  {
    title: "Executive Search",
    desc: "Headhunting services for senior roles and specialist positions requiring exceptional talent and leadership.",
    features: ["C-suite & senior roles", "Confidential search", "Deep talent network", "Reference verification"],
    img: "/src/assets/images/collaboration.jpg",
  },
];

export default function HireTeam() {
  const [formData, setFormData] = useState({
    company: "", name: "", email: "", phone: "", role: "", timeline: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/hire.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#1a0533] to-[#3d1078]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-purple-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">For Businesses</span>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Hire World-Class <span className="text-purple-300">Remote Talent</span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Build your ideal team from Malawi's top talent pool. Skilled, vetted, and remote-ready professionals — placed in 48 hours.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Staffing Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#3d1078] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Request Talent</h2>
            <p className="text-gray-500">Fill in your requirements and our team will be in touch within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
              <p className="text-gray-500">Our team will contact you within 24 hours to discuss your requirements.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role(s) Required *</label>
                  <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hiring Timeline</label>
                  <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}>
                    <option value="">Select timeline</option>
                    <option>Within 48 hours</option>
                    <option>Within 1 week</option>
                    <option>Within 1 month</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Skills, experience level, tools required..." />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-[#3d1078] text-white font-semibold py-4 rounded-xl hover:bg-[#2d0a5e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                ) : (
                  <>Submit Request <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}