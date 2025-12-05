'use client';

import React, { useState } from 'react';
import { FileText, Building, CheckCircle, AlertTriangle, Calendar, FileCheck } from 'lucide-react';

export default function AnnualROCFilingPage() {
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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20">
              <Building className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Annual ROC Filing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mandatory yearly compliance for all companies registered with MCA
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ What Is Annual ROC Filing?</h2>
              <p className="text-gray-300 mb-4">
                Annual ROC Filing means submitting yearly financial reports and company details to the Registrar of Companies (ROC) under the Companies Act, 2013.
              </p>
              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                <h3 className="font-semibold text-lg mb-3">Mandatory for:</h3>
                <ul className="space-y-2">
                  {['Private Limited Companies', 'Public Limited Companies', 'One Person Companies (OPC)', 'Section 8 Companies (NGOs)'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-yellow-300 mt-4 text-sm">
                  ⚠️ ROC filing is compulsory every year, even if the company has ZERO business, NO turnover, or NO bank transactions.
                </p>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Why Is Annual ROC Filing Important?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Legal Existence', desc: 'ROC can mark company as inactive or strike it off if not filed' },
                  { title: 'Mandatory Compliance', desc: 'Required under Companies Act for all annual returns & financial statements' },
                  { title: 'Avoid Penalties', desc: 'Non-filing leads to heavy penalties on company and directors' },
                  { title: 'Shows Credibility', desc: 'Banks and investors check ROC filings for loans, funding, and tenders' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold mb-2">✔ {item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Key ROC Forms Filed Annually</h2>
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileCheck className="w-6 h-6" />
                    📌 1. AOC-4 — Financial Statements
                  </h3>
                  <p className="text-gray-300 mb-3">Contains:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mb-3">
                    <li>• Balance Sheet</li>
                    <li>• Profit & Loss Statement</li>
                    <li>• Notes to Accounts</li>
                    <li>• Audit Report</li>
                  </ul>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> 30 days from AGM
                  </p>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 2. MGT-7 / MGT-7A — Annual Return</h3>
                  <p className="text-gray-300 mb-3">Contains:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mb-3">
                    <li>• Shareholder details</li>
                    <li>• Directors' details</li>
                    <li>• Shareholding pattern</li>
                    <li>• Changes in management</li>
                  </ul>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> 60 days from AGM
                  </p>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 3. ADT-1 — Auditor Appointment</h3>
                  <p className="text-gray-300 mb-3">
                    Filed yearly after first appointment
                  </p>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> 15 days from AGM
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Required Documents for ROC Filing</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Audited financial statements',
                  'Director report',
                  'Shareholding details',
                  'List of directors',
                  'Board meeting minutes',
                  'Auditor\'s report',
                  'Balance sheet & P&L',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                ⭐ Consequences of Not Filing ROC Returns
              </h2>
              <div className="space-y-3">
                {[
                  { title: '❌ Heavy penalties', desc: '₹50–₹200 per day' },
                  { title: '❌ Director disqualification', desc: 'For 5 years' },
                  { title: '❌ Company marked as defaulting', desc: 'Loss of credibility' },
                  { title: '❌ Company struck off', desc: 'ROC may dissolve the company' },
                  { title: '❌ Cannot apply for loans or tenders', desc: 'Banks reject applications' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                    <h3 className="font-semibold mb-1 text-red-300">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ ROC Filing Process</h2>
              <div className="space-y-4">
                {[
                  '1. Prepare financial statements',
                  '2. Conduct board meeting',
                  '3. Conduct Annual General Meeting (AGM)',
                  '4. File AOC-4 (financial statement)',
                  '5. File MGT-7/7A (annual return)',
                  '6. File ADT-1',
                  '7. Submit forms on MCA portal',
                  '8. Pay ROC filing fee',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300 pt-1">{step.substring(3)}</p>
                  </div>
                ))}
              </div>
              <p className="text-blue-300 mt-6 text-center">
                👉 All filings done online via: <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">www.mca.gov.in</a>
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Fees for Annual ROC Filing</h2>
              <p className="text-gray-300 mb-4">Fees depend on:</p>
              <ul className="space-y-2 mb-4">
                {['Authorized share capital', 'Company type', 'Form type'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-lg">
                  Usually <strong>₹1,500 – ₹10,000</strong> for small companies <span className="text-gray-400">(excluding penalties)</span>
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Expert Assistance</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white" placeholder="Enter your name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white" placeholder="Enter your phone" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white resize-none" placeholder="How can we help you?" required />
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium mb-2">Attach Document (Optional)</label>
                  <input type="file" id="file" onChange={handleFileChange} className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3d9cf5] file:text-white hover:file:bg-[#2d7cd5] file:cursor-pointer" />
                </div>
                <button type="submit" className="w-full bg-[#3d9cf5] hover:bg-[#2d7cd5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
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
