'use client'

import React, { useState } from 'react';
import { TrendingUp, Users, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function TaxAdvisoryPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-600 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tax Advisory Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tax advisory provides expert guidance on direct and indirect tax matters including compliance strategy, GST & Income Tax queries, litigation support, business tax structuring, and audit assistance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is Tax Advisory */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                What is Tax Advisory?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  Tax Advisory is a comprehensive service that provides expert guidance on various tax matters, helping businesses and individuals navigate complex tax regulations, optimize their tax positions, and ensure compliance. Our tax advisors offer strategic insights to minimize tax liability while maintaining full compliance with current tax laws.
                </p>
                <p>
                  This service is ideal for businesses requiring continuous tax support, complex tax situations, and strategic tax planning to enhance overall financial performance.
                </p>
              </div>
            </section>

            {/* Service Areas */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Tax Advisory Service Areas</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Direct Tax Advisory</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Income Tax planning and optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Corporate tax structuring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Capital gains optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>TDS compliance and planning</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Compliance Strategy</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Tax calendar management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Regular compliance monitoring</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Risk assessment and mitigation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Documentation and record keeping</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Indirect Tax Advisory</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>GST compliance and planning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Input Tax Credit optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Place of supply determination</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>GST audit and assessment support</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-500/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Litigation Support</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Tax notice handling and responses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Assessment proceedings representation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Appeal filing and support</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span>Settlement and negotiation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Business Tax Structuring */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Business Tax Structuring</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Entity Selection</h3>
                    <p className="text-gray-300">Advise on optimal business structure (Pvt Ltd, LLP, Partnership) based on tax implications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Transaction Structuring</h3>
                    <p className="text-gray-300">Design tax-efficient structures for mergers, acquisitions, and business reorganizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">International Tax Planning</h3>
                    <p className="text-gray-300">Cross-border tax planning, transfer pricing, and DTAA optimization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Exit Strategy Planning</h3>
                    <p className="text-gray-300">Tax-efficient exit planning for business sales and succession</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Audit Assistance */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Tax Audit Assistance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Pre-Audit Preparation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Documentation review and organization</li>
                    <li>• Risk assessment and gap analysis</li>
                    <li>• Internal audit and mock assessments</li>
                    <li>• Compliance checklist preparation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Audit Representation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Direct representation before authorities</li>
                    <li>• Query response and clarification</li>
                    <li>• Documentation submission management</li>
                    <li>• Settlement negotiation and closure</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Tax Advisory Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Tax Optimization & Savings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Risk Mitigation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Compliance Assurance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Strategic Business Support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Time & Resource Savings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    <span className="text-white font-medium">Expert Guidance</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Professional Advisory */}
            <section className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-cyan-400 mr-3" />
                Why Professional Tax Advisory is Essential
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span>Complex and frequently changing tax regulations require expert interpretation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span>Professional advisory helps identify tax-saving opportunities often missed</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span>Proactive compliance management prevents costly penalties and disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></span>
                  <span>Strategic tax planning supports long-term business growth and profitability</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get Tax Advisory Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name / Business Name"
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
                  placeholder="Describe your tax advisory requirements, current challenges, or specific queries..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Tax Documents (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.xls,.xlsx"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-cyan-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Tax Advisory
                </button>
              </form>
            </div>



            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Service Coverage</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Direct Tax Advisory</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between">
                  <span>GST & Indirect Tax</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between">
                  <span>Litigation Support</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between">
                  <span>Business Structuring</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}