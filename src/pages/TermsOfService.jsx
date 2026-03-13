import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Outple website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`
  },
  {
    title: "2. Services Provided",
    content: `Outple provides staffing, recruitment, and outsourcing services connecting businesses with remote professionals based in Malawi. Our services include dedicated remote team placements, flexible staffing solutions, executive search, and business process outsourcing.`
  },
  {
    title: "3. Use of Our Website",
    content: `You agree not to:

• Use our website for any unlawful purpose
• Attempt to gain unauthorised access to any part of our systems
• Transmit any harmful, offensive, or disruptive content
• Misrepresent your identity or affiliation

We reserve the right to suspend or terminate access to users who violate these terms.`
  },
  {
    title: "4. Candidate Registration",
    content: `By registering as a job seeker, you confirm that all information you provide is accurate and up to date. You authorise Outple to share your profile with potential employers for the purpose of employment placement. Outple does not guarantee placement.`
  },
  {
    title: "5. Client Obligations",
    content: `Business clients agree to provide accurate vacancy details and respond to candidate submissions in a timely manner. Clients agree not to directly approach candidates introduced by Outple outside of the Outple relationship without written consent.`
  },
  {
    title: "6. Fees & Payment",
    content: `Fee structures for business clients are agreed upon in a separate engagement letter or service agreement. Outple reserves the right to amend pricing with reasonable notice. No fees are charged to job seekers.`
  },
  {
    title: "7. Limitation of Liability",
    content: `Outple is not liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the fees paid by the client in the preceding three months.`
  },
  {
    title: "8. Intellectual Property",
    content: `All content on this website, including text, logos, graphics, and design, is owned by or licensed to Outple. You may not reproduce, distribute, or create derivative works without prior written consent.`
  },
  {
    title: "9. Governing Law",
    content: `These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`
  },
  {
    title: "10. Contact",
    content: `For queries regarding these Terms, contact us at legal@outple.com.`
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
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