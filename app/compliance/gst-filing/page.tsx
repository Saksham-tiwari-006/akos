'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';

export default function GSTFilingPage() {
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
            GST Filing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to GST return filing for businesses in India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What Is GST Filing?</h2>
              <p className="text-gray-300 mb-4">
                GST Filing means submitting details of a business's sales, purchases, input tax credit (ITC), and tax payable to the GST Department on a monthly, quarterly, or yearly basis.
              </p>
              <p className="text-gray-300">
                Every registered taxpayer under Goods and Services Tax (GST) must file GST returns on time.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Why Is GST Filing Important?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '✔ Legal Compliance', desc: 'Compulsory for all registered businesses under GST Act' },
                  { title: '✔ Claim Input Tax Credit', desc: 'Get GST credit only with correct filing' },
                  { title: '✔ Avoid Penalties', desc: 'Late filing leads to interest @ 18% and late fees up to ₹100/day' },
                  { title: '✔ Business Credibility', desc: 'Required for loan approvals, tenders, marketplace onboarding' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Who Must File GST Returns?</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'All businesses with GST Registration',
                  'Traders & Manufacturers',
                  'Service Providers',
                  'E-commerce sellers',
                  'Exporters',
                  'Input Service Distributors',
                  'Regular taxpayers',
                  'Composition scheme taxpayers',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-yellow-300 mt-4">
                ⚠️ Even if there is no sales, NIL GST return must be filed.
              </p>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Types of GST Returns</h2>
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 1. GSTR-1 — Sales Return</h3>
                  <p className="text-gray-300 mb-3">Includes:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mb-3">
                    <li>• Outward supplies (sales)</li>
                    <li>• Taxable value</li>
                    <li>• Invoice-wise details</li>
                  </ul>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> Monthly: 11th of next month | Quarterly: 13th of next month after quarter
                  </p>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 2. GSTR-3B — Summary Return</h3>
                  <p className="text-gray-300 mb-3">Includes:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mb-3">
                    <li>• Total sales</li>
                    <li>• Total purchases</li>
                    <li>• ITC claim</li>
                    <li>• Tax payable & tax paid</li>
                  </ul>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> Monthly: 20th of next month | Quarterly: 22nd or 24th (state-dependent)
                  </p>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">📌 3. GSTR-9 — Annual Return</h3>
                  <p className="text-gray-300 mb-3">Includes summary of entire year's:</p>
                  <ul className="space-y-1 text-sm text-gray-300 mb-3">
                    <li>• Sales</li>
                    <li>• Purchases</li>
                    <li>• ITC</li>
                    <li>• Tax paid</li>
                  </ul>
                  <p className="text-yellow-300 text-sm">
                    <strong>Due Date:</strong> 31st December of next financial year
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">📌 Additional GST Returns</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3">Return</th>
                      <th className="text-left p-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">GSTR-2A / 2B</td>
                      <td className="p-3">Auto-populated purchase data</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">GSTR-4</td>
                      <td className="p-3">Composition taxpayers</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">GSTR-6</td>
                      <td className="p-3">ISD return</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">GSTR-7</td>
                      <td className="p-3">TDS under GST</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">GSTR-8</td>
                      <td className="p-3">TCS by E-commerce sites</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ Documents Required</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Sales invoices',
                  'Purchase invoices',
                  'Credit/debit notes',
                  'GSTIN of customers/vendors',
                  'Sales/purchase registers',
                  'Previous GST returns',
                  'Input Tax Credit details',
                  'Payment challans',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">⭐ GST Filing Process</h2>
              <div className="space-y-4">
                {[
                  '1. Collect sales & purchase data',
                  '2. Reconcile GSTR-2B with books',
                  '3. Upload invoices in GSTR-1',
                  '4. Submit GSTR-3B summary',
                  '5. Pay tax online through GST portal',
                  '6. File annual return (GSTR-9)',
                  '7. Download filed returns for records',
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
                👉 All filing done at: <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">www.gst.gov.in</a>
              </p>
            </section>

            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                ⭐ Penalties for Late GST Filing
              </h2>
              <div className="space-y-3">
                {[
                  { title: '₹50/day', desc: '₹25 CGST + ₹25 SGST' },
                  { title: '₹20/day', desc: 'For NIL returns' },
                  { title: '18% interest', desc: 'On tax amount' },
                  { title: 'Blocking of e-way bill', desc: 'Cannot transport goods' },
                  { title: 'Registration suspension', desc: 'GST registration can be suspended' },
                  { title: 'ITC cannot be claimed', desc: 'Loss of input tax credit' },
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
