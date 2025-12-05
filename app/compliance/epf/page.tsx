'use client';

import React, { useState } from 'react';
import { Shield, Users, TrendingUp, FileText, CheckCircle, Building2, Award, Clock, DollarSign } from 'lucide-react';

export default function EPFRegistrationPage() {
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
            <Shield className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            EPF Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Employees' Provident Fund - A government-backed savings scheme ensuring financial security for your employees' retirement and emergencies
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">Overview of EPF Registration</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  EPF registration is a legal requirement for businesses in India. The Employees' Provident Fund (EPF) is a government-backed savings scheme that helps employees save for retirement or emergencies.
                </p>
                <p className="text-gray-300">
                  Both the employer and the employee contribute a fixed percentage of the employee's salary each month, typically ranging from 10% to 12%. This money grows with interest over time, and employees can withdraw it when they retire or face medical or financial emergencies.
                </p>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#3d9cf5]" />
                    Managed By
                  </h3>
                  <p className="text-gray-300 text-sm">
                    The EPF is managed by the Employees' Provident Fund Organisation (EPFO) under the Ministry of Labour and Employment, Government of India.
                  </p>
                </div>
              </div>
            </div>

            {/* Who Needs EPF */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Who Needs to Register for EPF?</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 border border-red-500/30 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-2">Mandatory For</h3>
                      <p className="text-gray-300 mb-3">
                        EPF registration is compulsory for every establishment in India that employs <strong>20 or more people</strong> at any point in time. This includes permanent, temporary, and contract employees.
                      </p>
                      <p className="text-gray-300 text-sm">
                        Registration must be completed within <strong>30 days</strong> of reaching the 20-employee threshold.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">International Workers Coverage</h3>
                  <p className="text-gray-300 text-sm mb-2">
                    International Workers, including expats working in India and Indian employees working abroad for Indian employers, are also covered under the EPF scheme.
                  </p>
                  <p className="text-gray-300 text-sm">
                    However, exemptions may apply if there is a Social Security Agreement (SSA) between India and the employee's home country.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">Voluntary Registration</h3>
                  <p className="text-gray-300 text-sm">
                    While mandatory for companies with 20 or more employees, smaller businesses can also register voluntarily to provide EPF benefits to their workforce.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits for Employers */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Benefits of EPF for Employers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Legal Compliance',
                    description: 'Registering for EPF is mandatory for eligible businesses. It helps avoid legal penalties and ensures the organization adheres to statutory requirements.'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Employee Trust',
                    description: 'Providing EPF benefits enhances the employer\'s reputation and helps attract and retain skilled employees.'
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: 'Tax Benefits',
                    description: 'Employer contributions to EPF are tax-deductible (100% of the standard contribution - 12% of basic salary + DA - is deductible if paid on time), reducing the overall tax burden.'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Business Credibility',
                    description: 'EPF-compliant status can aid in business transactions, especially when dealing with banks or overseas partners, as it reflects financial discipline and compliance.'
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

            {/* Documents Required */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Documents Required for EPF Registration</h2>
              
              <h3 className="text-xl font-semibold mb-4">Common Documents for All Entities</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {[
                  'Business licenses (GST, Shop Act, etc.)',
                  'Address proof (utility bills or rent agreement)',
                  'Owner\'s address proof and ID',
                  'Employee details and list',
                  'Bank details and canceled cheque',
                  'First sale and purchase bills',
                  'Salary and wage records',
                  'Balance sheets',
                  'Digital Signature Certificate (DSC)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{doc}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Entity-Specific Documents</h3>
              <div className="space-y-4">
                {[
                  {
                    type: 'Proprietorship',
                    docs: ['Proprietor\'s PAN card', 'Government-issued ID (DL, Passport, Voter ID)', 'Address proof (Aadhaar, utility bill)', 'Business premises proof', 'Full proprietor details']
                  },
                  {
                    type: 'Partnership Firm',
                    docs: ['Partnership deed', 'PAN card of partnership', 'ID & address proof of all partners', 'List of partners with details', 'Certificate of registration (if registered)']
                  },
                  {
                    type: 'LLP / Company',
                    docs: ['Certificate of incorporation', 'MOA & AOA', 'PAN card of LLP/Company', 'ID & address proof of directors/partners', 'Board resolution/authorization letter']
                  },
                  {
                    type: 'Society / Trust',
                    docs: ['Registration certificate', 'Trust deed or governing rules', 'PAN card of society/trust', 'List of trustees', 'ID & address proof of trustees']
                  }
                ].map((entity, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                    <h4 className="font-semibold text-[#3d9cf5] mb-3">{entity.type}</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {entity.docs.map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-gray-400 text-xs mt-0.5">•</span>
                          <span className="text-gray-300 text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
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
