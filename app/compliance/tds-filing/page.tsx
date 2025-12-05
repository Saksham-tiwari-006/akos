'use client';

import React, { useState } from 'react';
import { Receipt, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export default function TDSFilingPage() {
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
              <Receipt className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TDS Filing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to Tax Deducted at Source filing under Income Tax Act
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What Is TDS Filing?</h2>
              <p className="text-gray-300 mb-4">
                TDS Filing refers to submitting quarterly statements (returns) to the Income Tax Department that contain details of:
              </p>
              <ul className="space-y-2">
                {[
                  'Tax deducted at source (TDS)',
                  'Payments made to parties (salaries, contractors, rent, interest, etc.)',
                  'PAN of deductees',
                  'Challan details (TDS deposited)',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-300 mt-4">
                TDS filing is compulsory for all persons who deduct TDS under the Income Tax Act.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Why Is TDS Filing Important?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '✔ Legal compliance', desc: 'Mandatory under Income Tax Act' },
                  { title: '✔ Ensures credit', desc: 'Employees/vendors can claim TDS in their ITR' },
                  { title: '✔ Avoid penalties', desc: 'Late filing: ₹200/day, up to ₹1 lakh fine' },
                  { title: '✔ Avoid notices', desc: 'Non-filing leads to compliance notices and audits' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Who Must File TDS Returns?</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Any business/company/LLP',
                  'Government offices',
                  'Employers deducting salary TDS',
                  'Banks',
                  'Individuals whose books are audited',
                  'Deductors under 194C, 194J, 194I, 192, 194H',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-yellow-300 mt-4">
                ⚠️ If you deduct TDS, you must file TDS returns.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Types of TDS Returns (Forms)</h2>
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 1. Form 24Q — TDS on Salary</h3>
                  <p className="text-gray-300 mb-2">Filed by employers</p>
                  <p className="text-gray-400 text-sm">Contains details of employee salary & TDS</p>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 2. Form 26Q — TDS on Non-Salary Payments</h3>
                  <p className="text-gray-300 mb-2">Includes TDS for:</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Contractors (194C)</li>
                    <li>• Professionals (194J)</li>
                    <li>• Rent (194I)</li>
                    <li>• Commission (194H)</li>
                    <li>• Interest (194A)</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 3. Form 27Q — TDS on Payments to Non-Residents</h3>
                  <p className="text-gray-400 text-sm">For payments made to foreign nationals/entities</p>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 4. Form 27EQ — TCS Return</h3>
                  <p className="text-gray-400 text-sm">For tax collected at source</p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                ⭐ TDS Filing Due Dates (Quarterly)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3">Quarter</th>
                      <th className="text-left p-3">Period</th>
                      <th className="text-left p-3">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">Q1</td>
                      <td className="p-3">Apr–Jun</td>
                      <td className="p-3">31 July</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Q2</td>
                      <td className="p-3">Jul–Sep</td>
                      <td className="p-3">31 October</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Q3</td>
                      <td className="p-3">Oct–Dec</td>
                      <td className="p-3">31 January</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Q4</td>
                      <td className="p-3">Jan–Mar</td>
                      <td className="p-3">31 May</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'TAN (Tax Deduction Account Number)',
                  'PAN of deductor & deductees',
                  'Challan payment details (CIN, amount, date)',
                  'Salary details (for 24Q)',
                  'Nature of payment (contract, rent, etc.)',
                  'Deductee details (name, amount, TDS rate)',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ TDS Filing Process</h2>
              <div className="space-y-4">
                {[
                  '1. Deduct TDS at applicable rate',
                  '2. Deposit the TDS to government via Challan 281',
                  '3. Prepare the return file using software (RPU)',
                  '4. Validate file using FVU',
                  '5. Upload TDS return on TRACES website or Income Tax Portal',
                  '6. After processing, download Form 16 / Form 16A',
                  '7. Issue Form 16 to employees and Form 16A to vendors',
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

            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                ⭐ Penalties for Late or Incorrect TDS Filing
              </h2>
              <div className="space-y-3">
                {[
                  { title: '❌ Late filing fee: ₹200 per day', desc: 'Until return is filed (u/s 234E)' },
                  { title: '❌ Penalty: ₹10,000 to ₹1,00,000', desc: 'For late or incorrect filing (u/s 271H)' },
                  { title: '❌ Interest on late TDS payment', desc: '1% per month for late deduction, 1.5% per month for late deposit' },
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
