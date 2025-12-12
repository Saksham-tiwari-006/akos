'use client'

import React, { useState } from 'react';
import { Users, FileText, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function PFReturnPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              PF Return Filing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Employers registered under EPFO must file monthly PF returns. The return includes details of employees' contributions, employer share, and wage data.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is PF Return */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-400 mr-3" />
                What is PF Return Filing?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p>
                  PF Return Filing is a mandatory monthly compliance requirement for employers registered under the Employees' Provident Fund Organization (EPFO). The return contains comprehensive details of employee contributions, employer contributions, and wage data that must be submitted through the EPFO Unified Portal using ECR (Electronic Challan cum Return) format.
                </p>
              </div>
            </section>

            {/* Filing Requirements */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Filing Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Employee Details</h3>
                      <p className="text-gray-300">Complete employee information including UAN, wages, and joining/leaving dates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Contribution Details</h3>
                      <p className="text-gray-300">Employee and employer PF contributions at 12% each</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Wage Information</h3>
                      <p className="text-gray-300">Basic wages, DA, and other allowances subject to PF</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">ECR Format</h3>
                      <p className="text-gray-300">Filed through EPFO Unified Portal in prescribed format</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Filing Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">PF Return Filing Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Data Preparation</h3>
                    <p className="text-gray-300">Compile employee wage data, attendance records, and contribution calculations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">ECR Generation</h3>
                    <p className="text-gray-300">Create ECR file with employee details and contribution amounts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Portal Upload</h3>
                    <p className="text-gray-300">Upload ECR file through EPFO Unified Portal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Challan Generation</h3>
                    <p className="text-gray-300">Generate and pay monthly challan for PF contributions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Return Submission</h3>
                    <p className="text-gray-300">Submit completed return with payment confirmation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Compliance Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Compliance Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Legal Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Timely Submission</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Penalty Avoidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Employee Benefits</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-red-400 mr-3" />
                Important Compliance Notes
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                  <span>Monthly filing deadline is 15th of the following month</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                  <span>Late filing attracts penalties and interest charges</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                  <span>Non-compliance may lead to prosecution under EPF Act</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                  <span>Maintain proper records for EPFO inspections</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get PF Return Filing Assistance</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe your PF return filing requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Employee Data (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".xlsx,.xls,.csv"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request PF Return Service
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Filing Frequency</span>
                  <p className="text-white font-medium">Monthly</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Due Date</span>
                  <p className="text-white font-medium">15th of Next Month</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Platform</span>
                  <p className="text-white font-medium">EPFO Unified Portal</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Format</span>
                  <p className="text-white font-medium">ECR (Electronic)</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}