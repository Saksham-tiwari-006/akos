'use client'

import React, { useState } from 'react';
import { FileText, User, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function ITR1Page() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ITR-1 Form Filing (Sahaj)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ITR-1 (Sahaj) is for residents whose income is from salary/pension, one house property, and other sources like interest. Simple and straightforward filing for salaried individuals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Eligibility Criteria */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                Who Can File ITR-1?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Eligible Income Sources</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Salary and pension income</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Income from one house property</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Other sources (interest, dividends)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Resident individuals only</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Income Limit</h3>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">₹50 Lakh</div>
                      <div className="text-gray-300">Maximum Total Income</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Not Eligible Criteria */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-red-400 mr-3" />
                ITR-1 is NOT for:
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Business or professional income</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Capital gains income</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Foreign income or assets</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>More than one house property</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Agricultural income above ₹5,000</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2"></span>
                    <span>Non-resident status</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Filing Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">ITR-1 Filing Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Gather Documents</h3>
                    <p className="text-gray-300">Form 16, bank statements, interest certificates, house property documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Access ITR Portal</h3>
                    <p className="text-gray-300">Login to income tax e-filing portal with PAN and password</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Fill ITR-1 Form</h3>
                    <p className="text-gray-300">Enter income details, deductions, and tax payments accurately</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Verify & Submit</h3>
                    <p className="text-gray-300">Review all details, calculate tax, and submit return</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">E-Verification</h3>
                    <p className="text-gray-300">Verify return using Aadhaar OTP, net banking, or send ITR-V</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Timely Filing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Quick Tax Refunds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Legal Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Income Proof</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Loan Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Avoid Penalties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Carry Forward Losses</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Documents Required */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Salary Income</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Form 16</li>
                    <li>• Salary slips</li>
                    <li>• Bank statements</li>
                    <li>• PF statement</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">House Property</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Rent receipts</li>
                    <li>• Property tax receipts</li>
                    <li>• Home loan interest</li>
                    <li>• Municipal taxes</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Other Sources</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Interest certificates</li>
                    <li>• Dividend statements</li>
                    <li>• FD receipts</li>
                    <li>• Savings account interest</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get ITR-1 Filing Assistance</h2>
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
                  placeholder="Describe your ITR-1 filing requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Form 16 (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request ITR-1 Filing
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">ITR-1 Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Form Name</span>
                  <p className="text-white font-medium">ITR-1 (Sahaj)</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Due Date</span>
                  <p className="text-white font-medium">July 31st</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Income Limit</span>
                  <p className="text-white font-medium">Up to ₹50 Lakh</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Verification</span>
                  <p className="text-white font-medium">Aadhaar OTP/Net Banking</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}