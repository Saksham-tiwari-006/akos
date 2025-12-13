'use client'

import React, { useState } from 'react';
import { BarChart, FileText, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function GSTR9Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GSTR-9 Annual Return
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              GSTR-9 is the annual summary of sales, purchases, ITC, and taxes paid. It must be filed by all regular taxpayers once a year and reconciles financial statements with GST returns.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is GSTR-9 */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-8 h-8 text-emerald-400 mr-3" />
                What is GSTR-9 Annual Return?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  GSTR-9 is a comprehensive annual return that consolidates all the monthly and quarterly GST returns filed by a taxpayer during the financial year. It serves as an annual summary of all outward supplies, inward supplies, input tax credit claimed, and tax liability discharged during the year.
                </p>
                <p>
                  This return ensures accuracy by reconciling the data reported in monthly/quarterly returns with the audited financial statements, helping identify and rectify any discrepancies in GST compliance.
                </p>
              </div>
            </section>

            {/* Who Must File GSTR-9 */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Who Must File GSTR-9?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Mandatory Filing</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">All regular GST taxpayers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Taxpayers with annual turnover &gt; ₹2 crore</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Input Service Distributors (ISD)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Deemed exports suppliers</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Exemptions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Composition scheme taxpayers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Taxpayers with turnover ≤ ₹2 crore</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Casual and non-resident taxpayers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">OIDAR service providers</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* GSTR-9 Structure */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">GSTR-9 Return Structure</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="font-semibold text-white mb-3">Part A - Basic Information</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• GSTIN and legal name</li>
                      <li>• Principal place of business</li>
                      <li>• Return filing period</li>
                      <li>• Filing status</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-500/30">
                    <h3 className="font-semibold text-white mb-3">Part B - Outward Supplies</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Taxable outward supplies</li>
                      <li>• Zero-rated supplies</li>
                      <li>• Exempt supplies</li>
                      <li>• Deemed exports</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
                    <h3 className="font-semibold text-white mb-3">Part C - Inward Supplies</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Eligible ITC from supplies</li>
                      <li>• Reversal of ITC</li>
                      <li>• Inward supplies liable to reverse charge</li>
                      <li>• Import of goods and services</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-500/30">
                    <h3 className="font-semibold text-white mb-3">Part D - Tax Paid & Refunds</h3>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Tax paid through cash/ITC</li>
                      <li>• Tax paid on reverse charge</li>
                      <li>• Refund claimed and received</li>
                      <li>• Demands and refund adjustments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Filing Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">GSTR-9 Filing Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Data Compilation</h3>
                    <p className="text-gray-300">Collect all GSTR-1, GSTR-3B data for the financial year and reconcile with books</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Reconciliation</h3>
                    <p className="text-gray-300">Reconcile GST returns data with audited financial statements and P&L</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">GSTR-9 Preparation</h3>
                    <p className="text-gray-300">Fill GSTR-9 form with reconciled data covering all sections systematically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Review & Validation</h3>
                    <p className="text-gray-300">Thorough review for accuracy, mathematical errors, and compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Submit Return</h3>
                    <p className="text-gray-300">File return on GST portal and generate acknowledgment</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Reconciliation Areas */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Key Reconciliation Areas</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Turnover Reconciliation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>GSTR-1 vs books of accounts</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Audited financial statements matching</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Exempt and taxable supply segregation</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">ITC Reconciliation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>GSTR-2A vs GSTR-3B comparison</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Reversal and reclaim adjustments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Blocked credit identification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits of Accurate Filing */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Accurate GSTR-9 Filing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Compliance Assurance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BarChart className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Data Accuracy Verification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Financial Reconciliation</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Tax Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-indigo-400" />
                    <span className="text-white font-medium">Audit Trail Maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Penalty Avoidance</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Deadlines */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-red-400 mr-3" />
                Important Deadlines & Penalties
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Due Date:</strong> December 31st of next financial year</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Late Filing Penalty:</strong> ₹200 per day</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Maximum Penalty:</strong> 0.25% of turnover</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Revision:</strong> Allowed within prescribed time</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get GSTR-9 Filing Assistance</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Business Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe your GSTR-9 filing requirements, financial year, and business details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload GST Returns Data (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".xlsx,.csv,.pdf"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-emerald-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request GSTR-9 Service
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">GSTR-9 Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Filing Frequency</span>
                  <p className="text-white font-medium">Annual</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Due Date</span>
                  <p className="text-white font-medium">December 31st</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Applicability</span>
                  <p className="text-white font-medium">Turnover &gt; ₹2 Crore</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Late Fee</span>
                  <p className="text-white font-medium">₹200 per day</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}