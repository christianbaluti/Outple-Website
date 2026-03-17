import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "About", page: "About" },
  {
    label: "Company",
    children: [
      { label: "Why Outple", page: "WhyOutple" },
      { label: "Our Values", page: "OurValues" },
      { label: "Why Malawi", page: "WhyMalawi" },
      { label: "Case Studies", page: "CaseStudies" },
    ]
  },
  {
    label: "Services",
    children: [
      { label: "All Services", page: "Services" },
      { label: "How It Works", page: "HowItWorks" },
    ]
  },
  { label: "Find Jobs", page: "FindJobs" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [currentPageName]);

  const isHeroPage = currentPageName === "Home";

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHeroPage
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img
                src="/src/assets/images/logo.png"
                alt="Outple"
                className={`h-10 w-auto transition-all duration-300 ${!scrolled && isHeroPage ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                link.children ? (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    style={{ zIndex: 60 }}>
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                      scrolled || !isHeroPage ? "text-gray-600 hover:text-[#432d7e]" : "text-white/80 hover:text-white"
                    }`}>
                      {link.label} <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-0 pt-2 min-w-[180px] z-50">
                      <div className="bg-white rounded-xl shadow-xl py-2">
                        {link.children.map(child => (
                          <Link key={child.page} to={createPageUrl(child.page)}
                            className="block px-4 py-2.5 text-[14px] font-normal text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.page} to={createPageUrl(link.page)}
                    className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
                      currentPageName === link.page
                        ? "text-[#432d7e] bg-purple-50"
                        : scrolled || !isHeroPage
                          ? "text-gray-600 hover:text-[#432d7e] hover:bg-purple-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}>
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link to={createPageUrl("HireTeam")}
                className="text-[14px] font-semibold px-5 py-2.5 rounded-full bg-[#432d7e] text-white hover:bg-[#2d1a5e] transition-all shadow-lg shadow-[#432d7e]/20">
                Hire Talent
              </Link>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHeroPage ? "text-gray-700" : "text-white"
              }`}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
            <Link to={createPageUrl("Home")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Home</Link>
            <Link to={createPageUrl("About")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">About</Link>
            <Link to={createPageUrl("WhyOutple")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Why Outple</Link>
            <Link to={createPageUrl("Services")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Services</Link>
            <Link to={createPageUrl("HowItWorks")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">How It Works</Link>
            <Link to={createPageUrl("WhyMalawi")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Why Malawi</Link>
            <Link to={createPageUrl("OurValues")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Our Values</Link>
            <Link to={createPageUrl("CaseStudies")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Case Studies</Link>
            <Link to={createPageUrl("FindJobs")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Find Jobs</Link>
            <Link to={createPageUrl("Contact")} className="block px-4 py-3 rounded-xl text-[14px] font-medium text-gray-700 hover:text-[#432d7e] hover:bg-purple-50 mb-1">Contact</Link>
            <div className="border-t border-gray-100 mt-3 pt-3">
              <Link to={createPageUrl("HireTeam")} className="block text-center text-[14px] font-semibold bg-[#432d7e] text-white px-4 py-3 rounded-full hover:bg-[#2d1a5e] transition">
                Hire Talent
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src="/src/assets/images/logo.png"
                alt="Outple"
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-400 text-[16px] leading-[1.6] mb-2">Outple.</p>
              <p className="text-gray-500 text-[14px] leading-[1.6] mb-5">
                Connecting world-class businesses with Malawi's finest remote professionals.
              </p>
              <p className="text-gray-500 text-[12px] leading-[1.5]">Blantyre, Malawi & London, UK</p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-[14px] leading-[1.3] uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "About Us", page: "About" },
                  { label: "Why Outple", page: "WhyOutple" },
                  { label: "Our Values", page: "OurValues" },
                  { label: "Why Malawi", page: "WhyMalawi" },
                  { label: "Case Studies", page: "CaseStudies" },
                  { label: "Contact Us", page: "Contact" },
                ].map(item => (
                  <li key={item.label}>
                    <Link to={createPageUrl(item.page)} className="text-gray-400 text-[14px] leading-[1.6] hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-[14px] leading-[1.3] uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "All Services", page: "Services" },
                  { label: "How It Works", page: "HowItWorks" },
                  { label: "Hire Talent", page: "HireTeam" },
                  { label: "Find Jobs", page: "FindJobs" },
                ].map(item => (
                  <li key={item.label}>
                    <Link to={createPageUrl(item.page)} className="text-gray-400 text-[14px] leading-[1.6] hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-[14px] leading-[1.3] uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Privacy Policy", page: "PrivacyPolicy" },
                  { label: "Terms of Service", page: "TermsOfService" },
                ].map(item => (
                  <li key={item.label}>
                    <Link to={createPageUrl(item.page)} className="text-gray-400 text-[14px] leading-[1.6] hover:text-white transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[14px] leading-[1.6]"> {new Date().getFullYear()} Outple Limited. All rights reserved.</p>
            <p className="text-gray-600 text-[14px] leading-[1.6]">Outple.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}