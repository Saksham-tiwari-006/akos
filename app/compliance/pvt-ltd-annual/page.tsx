'use client';

import React, { useState } from 'react';
import { Building, Shield, FileText, TrendingUp, CheckCircle, Award, Users, Clock, AlertTriangle } from 'lucide-react';

export default function PvtLtdAnnualCompliancePage() {
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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3d9cf5]/20 rounded-full mb-6">
            <Building className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Private Limited Company Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive compliance requirements under the Companies Act, 2013 for maintaining legal status and good standing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Annual Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">What is Annual Compliance?</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  For a Private Limited Company incorporated in India, "compliance" signifies adherence to the mandates, regulations, and requirements primarily outlined in the Companies Act, 2013. This law governs key areas like appointment and qualifications of directors, board and shareholder meetings, and financial reporting.
                </p>
                <p className="text-gray-300">
                  Crucially, compliance with the regulations set forth by the Registrar of Companies (RoC) is obligatory for every private limited company, irrespective of its turnover or capital.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">ROC Compliance</h3>
                    <p className="text-gray-300 text-sm">
                      All filings, disclosures, and adherence to regulations directly administered by the RoC
                    </p>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Non-Registrar Compliance</h3>
                    <p className="text-gray-300 text-sm">
                      Tax compliance, labor laws, and industry-specific regulations outside RoC purview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Importance of Staying Compliant */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Why Staying Compliant is Important</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: 'Avoiding Legal Issues',
                    description: 'Sidestep potential fines, penalties, lawsuits, and criminal charges'
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    title: 'Boosting Reputation',
                    description: 'Build trust with customers, employees, investors, and the public'
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: 'Optimizing Processes',
                    description: 'Streamline business management, making operations more efficient'
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: 'Managing Risks',
                    description: 'Identify and mitigate potential financial and operational risks'
                  },
                  {
                    icon: <FileText className="w-5 h-5" />,
                    title: 'Financial Stability',
                    description: 'Prevent fraud and ensure accurate financial reporting'
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: 'Ethical Conduct',
                    description: 'Encourage ethical behavior and responsible work environment'
                  }
                ].map((reason, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-[#3d9cf5] flex-shrink-0">{reason.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-1">{reason.title}</h3>
                        <p className="text-gray-400 text-sm">{reason.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Pillars of Annual Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Key Pillars Under Companies Act, 2013</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Board Meetings and AGM',
                    description: 'Companies must hold minimum 4 Board meetings per financial year with a maximum 120-day gap between meetings. Annual General Meeting (AGM) is also mandatory.',
                    icon: <Users className="w-6 h-6" />
                  },
                  {
                    title: 'Financial Statements and Annual Return',
                    description: 'Prepare and file financial statements (Form AOC-4) and annual return (Form MGT-7) with the Registrar of Companies.',
                    icon: <FileText className="w-6 h-6" />
                  },
                  {
                    title: 'Auditor Appointment and Audit',
                    description: 'Appoint auditor and file appointment details using Form ADT-1. Regular statutory audits of financial statements are mandatory.',
                    icon: <CheckCircle className="w-6 h-6" />
                  },
                  {
                    title: 'Related Party Transactions',
                    description: 'Comply with regulations concerning disclosures and approvals for related party transactions.',
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    title: 'Director KYC and Disclosures',
                    description: 'Directors must fulfill KYC requirements (Form DIR-3 KYC) and disclose interests in other companies (Form MBP-1).',
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    title: 'Event-Based Compliance',
                    description: 'Disclose material events including changes in directorship, significant shareholding shifts, and other notable transactions.',
                    icon: <AlertTriangle className="w-6 h-6" />
                  }
                ].map((pillar, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-[#3d9cf5] flex-shrink-0">{pillar.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                        <p className="text-gray-400 text-sm">{pillar.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROC Compliance Types */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">ROC Compliance for Private Limited Company</h2>
              <p className="text-gray-300 mb-6">
                These are obligations that must be fulfilled by regulations established by the Registrar of Companies (ROC):
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Annual Compliance</h3>
                  <p className="text-gray-300 text-sm">
                    Regular yearly filings and disclosures companies are required to make, including submission of annual returns and financial statements.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Event-Based Compliance</h3>
                  <p className="text-gray-300 text-sm">
                    Specific compliances that must be addressed when certain events occur, such as alterations in management, share capital, or registered office.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">Other Compliances</h3>
                  <p className="text-gray-300 text-sm">
                    Additional regulatory obligations including director KYC updates and maintenance of statutory registers.
                  </p>
                </div>
              </div>
            </div>

            {/* Tax Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Tax Compliance Requirements</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#3d9cf5]" />
                    Income Tax
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong>Advance Tax:</strong> Pay in 4 installments if estimated tax ≥ ₹10,000</p>
                    <p><strong>ITR-6 Filing:</strong> By Oct 31 (tax audit) or Nov 30 (transfer pricing)</p>
                    <p><strong>Tax Audit:</strong> Mandatory if turnover exceeds ₹1 crore (Due: Sep 30)</p>
                    <p><strong>TDS/TCS:</strong> Payment by 7th of next month; Quarterly returns</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#3d9cf5]" />
                    GST Compliance
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong>Registration:</strong> Mandatory if turnover exceeds ₹40L (goods) or ₹20L (services)</p>
                    <p><strong>GSTR-1:</strong> Monthly (11th) or Quarterly</p>
                    <p><strong>GSTR-3B:</strong> Monthly (20th) or Quarterly</p>
                    <p><strong>GSTR-9:</strong> Annual Return by Dec 31</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3d9cf5]" />
                    Companies Act Reporting
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p><strong>AGM:</strong> By Sep 30 (for FY ending Mar 31)</p>
                    <p><strong>Form AOC-4:</strong> Within 30 days of AGM</p>
                    <p><strong>Form MGT-7/7A:</strong> Within 60 days of AGM</p>
                    <p><strong>DIR-3 KYC:</strong> Annually by Sep 30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event-Based Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Event-Based Compliance</h2>
              <p className="text-gray-300 mb-4">
                Companies must file different forms with RoC within specific timeframes upon occurrence of these events:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Change in authorized or paid-up capital',
                  'Allotment of new shares',
                  'Transfer of existing shares',
                  'Providing loans to other companies',
                  'Providing loans to directors',
                  'Appointment of Managing/Whole-time Director',
                  'Opening or closing of bank accounts',
                  'Change in authorized bank signatories',
                  'Appointment or change of statutory auditors'
                ].map((event, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Get Expert Assistance</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium mb-2">
                      Upload Document
                    </label>
                    <input
                      type="file"
                      id="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#3d9cf5] file:text-white file:cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3d9cf5] hover:bg-[#2d7cc5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>📧 akos170620250626@gmail.com</p>
                    <p>📞 +91 92119 01927</p>
                    <p>📍 Shakarpur, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
