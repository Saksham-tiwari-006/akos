'use client';

import React, { useState } from 'react';
import { Building2, Shield, CheckCircle, AlertTriangle, FileCheck, Users } from 'lucide-react';

export default function NGOCompliancePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20">
              <Building2 className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            NGO Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete guide to annual compliance requirements for Trusts, Societies, and Section 8 Companies in India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Section */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Overview of Annual Compliance for NGOs</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Annual compliance for NGOs is not just a legal formality—it's the backbone of trust, transparency, and operational success. Whether you run a grassroots trust or a large Section 8 company, following the right NGO compliance checklist ensures your organization stays credible, attracts funding, and avoids harsh penalties.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Compliance also plays a vital role in securing and maintaining certifications like <strong>12A and 80G</strong>, which offer income tax exemptions and donor tax benefits. Without these, your NGO may lose out on major funding opportunities, including CSR contributions from corporate entities.
              </p>
            </section>

            {/* What is NGO Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What is NGO Annual Compliance?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                NGO annual compliance refers to the set of statutory filings, audits, and documentation that every Non-Governmental Organization must complete each year to remain legally operational. These requirements are based on the type of NGO and are governed by various Indian laws:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-2">📜 Societies Registration Act, 1860</h3>
                  <p className="text-gray-400 text-sm">For societies</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-2">📜 Indian Trusts Act, 1882</h3>
                  <p className="text-gray-400 text-sm">For charitable trusts</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-2">📜 Companies Act, 2013</h3>
                  <p className="text-gray-400 text-sm">For Section 8 companies</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-2">📜 FCRA, 2010</h3>
                  <p className="text-gray-400 text-sm">For NGOs receiving foreign donations</p>
                </div>
              </div>
            </section>

            {/* Why Follow Rules */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Why is Annual Compliance Important?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Legal Protection',
                    desc: 'Annual compliance safeguards your registration and legal status. Missing even one requirement can jeopardize your organization\'s existence.',
                  },
                  {
                    title: 'Financial Health',
                    desc: 'Ensures you can claim tax exemptions and avoid penalties. Helps maintain eligibility for grants and CSR funding.',
                  },
                  {
                    title: 'Donor Confidence',
                    desc: 'Transparent compliance reports build trust with donors and partners, making it easier to secure funding.',
                  },
                  {
                    title: 'Reputation Management',
                    desc: 'Non-compliance can result in public blacklisting, damaging your reputation and future prospects.',
                  },
                  {
                    title: 'Sustainability',
                    desc: 'Regular compliance ensures long-term sustainability and smooth operations.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What Happens if Not Following */}
            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                What Happens if an NGO Does Not Follow the Rules?
              </h2>
              <div className="space-y-4">
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">🚫 Deregistration</h3>
                  <p className="text-gray-300">Authorities can cancel your registration, effectively shutting down your NGO.</p>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">💰 Financial Penalties</h3>
                  <p className="text-gray-300">Heavy fines ranging from ₹50,000 to ₹2 lakh. Late FCRA filing can result in penalties up to 5% of foreign contribution received.</p>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">📉 Loss of Tax Benefits</h3>
                  <p className="text-gray-300">Revocation of 12A and 80G certificates, removing donors' ability to claim 50% or 100% tax deductions under Section 80G.</p>
                </div>
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">⚖️ Legal Action</h3>
                  <p className="text-gray-300">Authorities may initiate legal proceedings, and directors or trustees can be held personally liable.</p>
                </div>
              </div>
            </section>

            {/* Types of NGOs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <Users className="w-8 h-8" />
                Types of NGOs and Their Compliance
              </h2>

              {/* Trust */}
              <div className="mb-8 bg-blue-500/5 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">1. NGOs Registered as a Trust</h3>
                <p className="text-gray-300 mb-4">
                  The Indian Trusts Act of 1882 mainly deals with private trusts. Most public charitable trusts follow specific public trust laws in each state. Compliance requirements for trusts are relatively simpler:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Income Tax Return:</strong> File annual ITR, regardless of income size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Audit:</strong> Annual audit is mandatory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Books of Accounts:</strong> Maintain clear records of all receipts, payments, and assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Renewals:</strong> Required only if trust holds 12A, 80G, or FCRA registration</span>
                  </li>
                </ul>
              </div>

              {/* Society */}
              <div className="mb-8 bg-purple-500/5 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">2. NGOs Registered as a Society</h3>
                <p className="text-gray-300 mb-4">
                  Societies are governed by the Societies Registration Act, 1860. Their compliance checklist includes:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>AGM:</strong> Hold within six months after financial year ends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Annual Report:</strong> Submit to Registrar of Societies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Income Tax Return:</strong> File ITR annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Audit:</strong> If registered under 12A or if gross receipts exceed exemption limits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Renewal:</strong> Every five years or as required by state law</span>
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="bg-green-500/5 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-2xl font-bold mb-4 text-green-300">3. NGOs Registered as a Section 8 Company</h3>
                <p className="text-gray-300 mb-4">
                  Section 8 Companies have the most comprehensive compliance requirements, governed by the Companies Act, 2013:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Board Meetings:</strong> At least two yearly; four if turnover exceeds ₹2 crore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>AGM:</strong> Must be held each year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>ROC Filings:</strong> AOC-4 within 30 days of AGM, MGT-7 within 60 days, ADT-1 within 15 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Director's KYC:</strong> File DIR-3 KYC by 30th September</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Income Tax Return:</strong> File ITR annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>FCRA Compliance:</strong> If receiving foreign funds, file FC-4 return</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Expert Assistance</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium mb-2">
                    Attach Document (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3d9cf5] file:text-white hover:file:bg-[#2d7cd5] file:cursor-pointer"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3d9cf5] hover:bg-[#2d7cd5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
