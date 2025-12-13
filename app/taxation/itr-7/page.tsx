'use client'

import React, { useState } from 'react';
import { Building2, Shield, CheckCircle, Clock, FileText, Heart, DollarSign, AlertCircle } from 'lucide-react';

export default function ITR7Page() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ITR-7 Form Filing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ITR-7 is filed by trusts, NGOs, section 8 companies, and entities claiming exemption under sections 11, 12, 10, 13A/13B. Covers income application, donations, and statutory compliance for non-profit entities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Entities Required to File */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Building2 className="w-8 h-8 text-orange-400 mr-3" />
                Entities Required to File ITR-7
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Charitable Organizations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Charitable and religious trusts</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">NGOs and non-profit organizations</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Section 8 companies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Educational institutions</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Political & Other Entities</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Political parties</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Research institutions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Medical institutions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Social welfare organizations</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Exemption Sections */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Exemption Sections Covered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                    <h3 className="font-semibold text-white mb-2">Section 11 & 12</h3>
                    <p className="text-gray-300 text-sm">Charitable and religious trusts, income application for charitable purposes</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                    <h3 className="font-semibold text-white mb-2">Section 10</h3>
                    <p className="text-gray-300 text-sm">Various exemptions including agricultural income, HUF income, etc.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                    <h3 className="font-semibold text-white mb-2">Section 13A & 13B</h3>
                    <p className="text-gray-300 text-sm">Political parties and their income exemptions</p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg p-4 border border-indigo-500/30">
                    <h3 className="font-semibold text-white mb-2">Section 35AC</h3>
                    <p className="text-gray-300 text-sm">Eligible institutions for donations and research</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Filing Requirements */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">ITR-7 Filing Requirements</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Income Details</h3>
                    <p className="text-gray-300">Report all sources of income including donations, grants, and investment income</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Application of Income</h3>
                    <p className="text-gray-300">Detail how income was applied for charitable/exempt purposes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Donation Details</h3>
                    <p className="text-gray-300">Provide comprehensive details of donations received and their utilization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Accumulation Details</h3>
                    <p className="text-gray-300">Report accumulated income and its proposed application</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Balance Sheet & P&L</h3>
                    <p className="text-gray-300">Attach audited financial statements and activity reports</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Compliance Areas */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Key Compliance Areas</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Donation Management</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 80G certificate issuance</li>
                    <li>• Donor details maintenance</li>
                    <li>• Receipt management</li>
                    <li>• Utilization tracking</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Income Application</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• 85% application rule</li>
                    <li>• Accumulation permissions</li>
                    <li>• Activity-wise allocation</li>
                    <li>• Corpus fund management</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Statutory Compliance</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Annual activity reports</li>
                    <li>• Audit requirements</li>
                    <li>• Registration renewals</li>
                    <li>• FCRA compliance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits of Proper Filing */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Proper ITR-7 Filing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Maintain Exemption Status</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Regulatory Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Transparency & Accountability</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Donor Confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-indigo-400" />
                    <span className="text-white font-medium">Institutional Credibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Avoid Penalties</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Deadlines */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-red-400 mr-3" />
                Critical Compliance Deadlines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>ITR-7 Filing:</strong> By July 31st annually</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Annual Report:</strong> Within 15 days of filing</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Audit Report:</strong> By September 30th</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>80G Renewal:</strong> Every 5 years</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get ITR-7 Filing Assistance</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Organization Name"
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
                  placeholder="Describe your organization type, exemption sections, and filing requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Financial Documents (Optional)</label>
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
                  className="w-full bg-white text-orange-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request ITR-7 Service
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">ITR-7 Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Applicable For</span>
                  <p className="text-white font-medium">Trusts, NGOs, Section 8</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Due Date</span>
                  <p className="text-white font-medium">July 31st</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Audit Requirement</span>
                  <p className="text-white font-medium">Mandatory if income &gt; ₹25 Lakh</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Key Focus</span>
                  <p className="text-white font-medium">Income Application</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}