'use client';

import React, { useState } from 'react';
import { FileCheck, Shield, AlertTriangle, TrendingUp, CheckCircle, XCircle, Award, Users, FileText, Clock } from 'lucide-react';

export default function LLPAnnualCompliancePage() {
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
            <FileCheck className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            LLP Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ensure your Limited Liability Partnership stays compliant with all legal requirements under the LLP Act, 2008
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is LLP Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">What is LLP Compliance?</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  LLP compliance refers to the legal and regulatory obligations that Limited Liability Partnerships in India must fulfill to operate legally. These compliances are primarily governed by the Limited Liability Partnership Act, 2008, and rules set by the Ministry of Corporate Affairs (MCA).
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: 'Legal Adherence',
                      description: 'Ensures your LLP operates within the framework of Indian law'
                    },
                    {
                      icon: <FileText className="w-5 h-5" />,
                      title: 'Transparency',
                      description: 'Promotes clear business practices and financial transparency'
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: 'Government Oversight',
                      description: 'Allows MCA to monitor and regulate LLPs effectively'
                    },
                    {
                      icon: <CheckCircle className="w-5 h-5" />,
                      title: 'Mandatory Requirement',
                      description: 'Fulfilling obligations is prerequisite for legal operation'
                    }
                  ].map((aspect, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-[#3d9cf5] flex-shrink-0">{aspect.icon}</div>
                        <div>
                          <h3 className="font-semibold mb-1">{aspect.title}</h3>
                          <p className="text-gray-400 text-sm">{aspect.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* LLP vs Private Limited Comparison */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">LLP vs Private Limited Company Compliances</h2>
              <p className="text-gray-300 mb-6">
                LLPs generally have a lighter compliance burden compared to private limited companies:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                      <th className="text-left py-3 px-4 font-semibold text-green-400">LLP</th>
                      <th className="text-left py-3 px-4 font-semibold text-blue-400">Private Limited</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Annual Filings</td>
                      <td className="py-3 px-4">Form 8 & 11 annually</td>
                      <td className="py-3 px-4">AOC-4, MGT-7, ADT-1, etc.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Board Meetings</td>
                      <td className="py-3 px-4">Not mandatory</td>
                      <td className="py-3 px-4">Minimum 4/year required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Audit</td>
                      <td className="py-3 px-4">If turnover &gt; ₹40L or contribution &gt; ₹25L</td>
                      <td className="py-3 px-4">Mandatory regardless</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Compliance Cost</td>
                      <td className="py-3 px-4">Generally low</td>
                      <td className="py-3 px-4">Comparatively higher</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Taxation</td>
                      <td className="py-3 px-4">Flat 30% + surcharge</td>
                      <td className="py-3 px-4">22% (or 15% for new mfg)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Consequences of Non-Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Consequences of Non-Compliance</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <AlertTriangle className="w-6 h-6" />,
                    title: 'Heavy Financial Penalties',
                    description: 'Daily fine of ₹100 per day per form with no upper limit. A 3-month delay in filing both Form 8 and Form 11 could result in ₹18,000 penalty.',
                    severity: 'high'
                  },
                  {
                    icon: <XCircle className="w-6 h-6" />,
                    title: 'Personal Liability for Designated Partners',
                    description: 'Can lead to disqualification, legal action including fines, prosecution in cases of fraud, imprisonment for severe violations, and reputational damage.',
                    severity: 'high'
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'LLP Being Declared Defunct',
                    description: 'MCA can initiate strike-off proceedings (Form 75), leading to loss of legal status, asset freezing, and inability to conduct business.',
                    severity: 'critical'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Hurdles in Business Operations',
                    description: 'Banking restrictions, inability to borrow, investor hesitation, closure complications, and contractual issues.',
                    severity: 'medium'
                  }
                ].map((consequence, index) => (
                  <div 
                    key={index} 
                    className={`rounded-lg p-6 border ${
                      consequence.severity === 'critical' 
                        ? 'bg-red-900/30 border-red-500/30' 
                        : consequence.severity === 'high'
                        ? 'bg-orange-900/30 border-orange-500/30'
                        : 'bg-yellow-900/30 border-yellow-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 ${
                        consequence.severity === 'critical' 
                          ? 'text-red-400' 
                          : consequence.severity === 'high'
                          ? 'text-orange-400'
                          : 'text-yellow-400'
                      }`}>
                        {consequence.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{consequence.title}</h3>
                        <p className="text-gray-300 text-sm">{consequence.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits of Annual Filing */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Benefits of LLP Annual Filing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: 'Maintaining Clean Record',
                    description: 'Prevents daily fines, demonstrates responsible practices, keeps record unblemished with MCA, and avoids unnecessary financial drain.'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Ensures Active Status',
                    description: 'Confirms operational status, safeguards against strike-off proceedings, preserves legal existence and limited liability status.'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Enhanced Credibility',
                    description: 'Builds trust with lenders, investors, clients, and partners. Simplifies due diligence for collaborations and acquisitions.'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Easier Conversion/Closure',
                    description: 'Expedites conversion to other entity types, simplifies winding up process, reduces bureaucracy, and saves time and money.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-[#3d9cf5] mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Compliances After Incorporation */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Key Compliances After LLP Incorporation</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Execute LLP Agreement',
                    description: 'Must be executed within 30 days of incorporation. File Form 3 with MCA. Establishes governance framework and profit-sharing ratios.',
                    timeline: '30 days'
                  },
                  {
                    title: 'Obtain PAN and TAN',
                    description: 'LLP needs its own PAN for all financial dealings. TAN is necessary if making payments requiring TDS/TCS deduction.',
                    timeline: 'Immediately'
                  },
                  {
                    title: 'Open LLP Bank Account',
                    description: 'Maintains separation between partners\' personal finances and LLP funds. Required for all business transactions and audits.',
                    timeline: 'After PAN'
                  },
                  {
                    title: 'Additional Licenses',
                    description: 'GST Registration (if turnover exceeds threshold), Shop License, specific industry licenses, and employee-related registrations (EPF, ESI).',
                    timeline: 'As applicable'
                  }
                ].map((compliance, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-lg">{compliance.title}</h3>
                      <span className="text-xs bg-[#3d9cf5]/20 text-[#3d9cf5] px-3 py-1 rounded-full whitespace-nowrap">
                        {compliance.timeline}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{compliance.description}</p>
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
                    <p>📞 +91 85211 39114</p>
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
