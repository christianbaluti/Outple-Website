import React from "react";

const sections = [
  {
    title: "1. Who We Are",
    content: `Outple Limited ("Outple", "we", "us", or "our") is a staffing and outsourcing company incorporated in England and Wales, with operations in Malawi. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services.`
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly, including:
    
• Name, email address, phone number, and professional details when you submit enquiries or register interest
• CV/résumé and employment history for job seeker registrations
• Company name, role, and hiring requirements for business enquiries
• Communication records when you contact us

We also collect technical data automatically, including IP addresses, browser type, and pages visited via standard analytics tools.`
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal data to:

• Match job seekers with relevant employment opportunities
• Connect businesses with pre-vetted candidates
• Respond to enquiries and manage our relationship with you
• Improve our services and website experience
• Comply with legal obligations

We do not sell or rent your personal data to third parties.`
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data on the following legal bases:

• Contractual necessity — to fulfil our services to you
• Legitimate interests — to improve our services and communicate with clients and candidates
• Consent — where you have given explicit consent
• Legal obligation — where required by law`
  },
  {
    title: "5. Data Retention",
    content: `We retain personal data for as long as necessary to fulfil the purposes for which it was collected. For job seekers, we typically retain data for up to 2 years. For business clients, we retain data for the duration of the relationship plus 7 years for legal and accounting purposes.`
  },
  {
    title: "6. Your Rights",
    content: `Under applicable data protection law, you have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request erasure of your data
• Object to or restrict processing
• Data portability

To exercise any of these rights, contact us at privacy@outple.com.`
  },
  {
    title: "7. Cookies",
    content: `Our website uses cookies to improve your experience. Essential cookies are required for the site to function. Analytics cookies help us understand how visitors use our site. You may disable non-essential cookies via your browser settings.`
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by updating the date at the bottom of this page. Continued use of our services constitutes acceptance of the updated policy.`
  },
  {
    title: "9. Contact Us",
    content: `For any questions about this Privacy Policy, contact us at:

Outple Limited
privacy@outple.com
+265 1 234 567`
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}