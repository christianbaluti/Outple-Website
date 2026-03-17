import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact.php', {
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
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-gradient-to-br from-[#1a0533] to-[#3d1078]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-[48px] font-bold text-white leading-[1.2] mb-4">Get in Touch</h1>
          <p className="text-purple-200 text-[18px] leading-[1.6] max-w-xl mx-auto">Whether you're looking to hire or seeking your next opportunity, we're here to help.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[36px] font-bold text-gray-900 leading-[1.3] mb-6">Contact Information</h2>
                {[
                  { icon: Mail, label: "Email", value: "hello@outple.com" },
                  { icon: Phone, label: "Phone (Malawi)", value: "+265 999 414 113" },
                  { icon: Phone, label: "Phone (UK — WhatsApp only)", value: "+44 7503 055773" },
                  { icon: MapPin, label: "Location", value: "Blantyre, Malawi & London, UK" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#3d1078]" />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[1.5] text-gray-400 mb-0.5">{item.label}</p>
                      <p className="font-semibold text-gray-900 text-[16px] leading-[1.3]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#2d0a5e] to-[#3d1078] rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-[22px] leading-[1.3] mb-2">Office Hours</h3>
                <p className="text-purple-200 text-[14px] leading-[1.6] mb-1">Monday – Friday: 8:00 AM – 6:00 PM (GMT+2)</p>
                <p className="text-purple-200 text-[14px] leading-[1.6]">Saturday: 9:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-14 h-14 text-green-600 mx-auto mb-4" />
                  <h3 className="text-[28px] font-bold text-gray-900 leading-[1.3] mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-[16px] leading-[1.6]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-[14px] leading-[1.6]">
                      {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[14px] font-medium text-gray-700 leading-[1.3] mb-1">Full Name *</label>
                      <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="block text-[14px] font-medium text-gray-700 leading-[1.3] mb-1">Email Address *</label>
                      <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-gray-700 leading-[1.3] mb-1">Company Name *</label>
                    <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-gray-700 leading-[1.3] mb-1">Subject *</label>
                    <input required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-gray-700 leading-[1.3] mb-1">Message *</label>
                    <textarea required rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#3d1078]/30 focus:border-[#3d1078] transition resize-none" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-[#3d1078] text-white text-[16px] font-semibold py-4 rounded-xl hover:bg-[#2d0a5e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                    ) : (
                      <>Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}