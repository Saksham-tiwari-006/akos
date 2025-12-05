'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export default function ITRFilingPage() {
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
              <FileText className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Income Tax Return Filing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to ITR filing for individuals and businesses in India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What Is an Income Tax Return (ITR)?</h2>
              <p className="text-gray-300 mb-4">
                An Income Tax Return (ITR) is a statement filed with the Income Tax Department that reports:
              </p>
              <ul className="space-y-2">
                {[
                  'Total income earned during a financial year',
                  'Taxable income',
                  'TDS/TCS details',
                  'Tax paid',
                  'Refund claim',
                  'Deductions under Chapter VI-A (80C, 80D, etc.)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-4">
                Every eligible taxpayer must file an ITR once every year.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Why Is Filing ITR Important?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '✔ Legal compliance', desc: 'Required under Income Tax Act' },
                  { title: '✔ Claim TDS refund', desc: 'Excess tax refunded only after filing ITR' },
                  { title: '✔ Income proof', desc: 'Needed for visa, bank loans, tenders, govt jobs' },
                  { title: '✔ Carry forward losses', desc: 'Business/capital losses can be carried forward' },
                  { title: '✔ Avoid penalties', desc: 'Late fees up to ₹5,000, interest under 234A' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Who Should File an ITR?</h2>
              <div className="space-y-4">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-3">✔ An Individual</h3>
                  <p className="text-gray-300 mb-2">Who earns:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Income above basic exemption limit (₹2.5 lakh for most taxpayers)</li>
                    <li>• Income from salary, business, profession, rent, investments</li>
                    <li>• Foreign income or assets</li>
                  </ul>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-3">✔ A Business (Company, LLP, Firm)</h3>
                  <p className="text-gray-300 text-sm">Filing is compulsory even if:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mt-2">
                    <li>• There is no income</li>
                    <li>• Loss incurred</li>
                    <li>• Business inactive</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-3">✔ Other Cases</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Person with TDS/TCS deductions (to claim refund)</li>
                    <li>• Bank deposits {'>'} ₹1 crore or foreign travel {'>'} ₹2 lakh</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Types of Income Tax Returns (Forms)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3">Form</th>
                      <th className="text-left p-3">Who Should File</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-1 (Sahaj)</td>
                      <td className="p-3">Salaried individuals (income ≤ ₹50 lakh)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-2</td>
                      <td className="p-3">Individuals with capital gains, foreign income, {'>'}₹50 lakh</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-3</td>
                      <td className="p-3">Business/professional income (non-audit)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-4 (Sugam)</td>
                      <td className="p-3">Presumptive business (44AD/44ADA)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-5</td>
                      <td className="p-3">LLPs, firms</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-6</td>
                      <td className="p-3">Companies</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR-7</td>
                      <td className="p-3">Trusts, NGOs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'PAN & Aadhaar',
                  'Form 16 (if salaried)',
                  'Salary slips',
                  'Bank statements',
                  'Interest certificates',
                  'TDS / TCS certificates (Form 16A, 26AS)',
                  'Investment proofs (80C, 80D, 80G, etc.)',
                  'Capital gain statements',
                  'Business audit reports (if applicable)',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ ITR Filing Process</h2>
              <div className="space-y-4">
                {[
                  '1. Collect income and investment details',
                  '2. Check Form 26AS / AIS / TIS',
                  '3. Choose correct ITR form',
                  '4. Login to income tax portal: www.incometax.gov.in',
                  '5. Fill income details & verify tax computation',
                  '6. Submit return',
                  '7. E-verify using Aadhaar OTP / Bank account / Netbanking',
                  '8. Refund (if any) gets credited to bank account',
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300 pt-1">{step.substring(3)}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                ⭐ Due Dates for ITR Filing
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3">Category</th>
                      <th className="text-left p-3">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">Individuals & non-audit cases</td>
                      <td className="p-3">31 July</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Businesses requiring audit</td>
                      <td className="p-3">31 October</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Businesses requiring TP report</td>
                      <td className="p-3">30 November</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                ⭐ Penalties for Late ITR Filing
              </h2>
              <div className="space-y-3">
                {[
                  { title: '₹1,000 to ₹5,000 late filing fee', desc: 'Penalty for missing due date' },
                  { title: 'Interest at 1% per month (u/s 234A)', desc: 'On unpaid tax amount' },
                  { title: 'Cannot carry forward losses', desc: 'Loss of tax benefit' },
                  { title: 'Delay in refund', desc: 'Refund processing delayed' },
                  { title: 'Possible notices', desc: 'From Income Tax Department' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                    <h3 className="font-semibold mb-1 text-red-300">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
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
