'use client'

import React, { useState } from 'react';
import { FileBarChart, Building, CheckCircle, Clock, Shield, Globe, DollarSign, AlertCircle } from 'lucide-react';

export default function GSTRegistrationPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
              <FileBarChart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GST Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Businesses must obtain GST registration if turnover crosses the threshold or if they meet specific criteria like e-commerce sellers. Registration provides a unique GSTIN.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is GST Registration */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Building className="w-8 h-8 text-indigo-400 mr-3" />
                What is GST Registration?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  GST Registration is a mandatory process for businesses whose annual turnover exceeds the prescribed threshold limits or fall under specific categories. Upon registration, businesses receive a unique 15-digit GSTIN (Goods and Services Tax Identification Number) that enables them to collect GST, claim Input Tax Credit, and operate legally within the Indian taxation system.
                </p>
              </div>
            </section>

            {/* Mandatory Registration Criteria */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Mandatory Registration Criteria</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Turnover Thresholds</h3>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">₹40 Lakh</div>
                        <div className="text-gray-300 text-sm">Annual Turnover (Goods)</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">₹20 Lakh</div>
                        <div className="text-gray-300 text-sm">Annual Turnover (Services)</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">₁0 Lakh</div>
                        <div className="text-gray-300 text-sm">Special Category States</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Compulsory Registration</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">E-commerce marketplace sellers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Inter-state supply of goods/services</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Non-resident taxable persons</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Input service distributors</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Agents and TCS collectors</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">GST Registration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Document Collection</h3>
                    <p className="text-gray-300">Gather PAN, Aadhaar, business registration documents, and address proofs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Online Application</h3>
                    <p className="text-gray-300">Fill GST REG-01 form on the GST portal with business details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Document Upload</h3>
                    <p className="text-gray-300">Upload scanned copies of all required documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Application Verification</h3>
                    <p className="text-gray-300">GST officer reviews and may request additional information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">GSTIN Issuance</h3>
                    <p className="text-gray-300">Upon approval, receive GST registration certificate with GSTIN</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Identity Documents</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• PAN Card</li>
                    <li>• Aadhaar Card</li>
                    <li>• Passport (for NRIs)</li>
                    <li>• Director/Partner details</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Business Documents</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Certificate of incorporation</li>
                    <li>• Partnership deed</li>
                    <li>• MOA & AOA</li>
                    <li>• Shop Act license</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-white">Address Proof</h3>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Rent agreement</li>
                    <li>• Property documents</li>
                    <li>• Electricity bill</li>
                    <li>• NOC from landlord</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits of GST Registration */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of GST Registration</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Legal Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Input Tax Credit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Pan-India Operations</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Business Credibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">E-commerce Eligibility</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileBarChart className="w-6 h-6 text-indigo-400" />
                    <span className="text-white font-medium">Easy Loan Access</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Timeline */}
            <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-7 h-7 text-blue-400 mr-3" />
                Registration Timeline & Important Notes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1" />
                    <span><strong>Processing Time:</strong> 7-15 working days</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1" />
                    <span><strong>Validity:</strong> No expiry (unless cancelled)</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
                    <span><strong>Penalty:</strong> ₹10,000 for late registration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
                    <span><strong>Cost:</strong> Free government process</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get GST Registration Assistance</h2>
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
                  placeholder="Describe your business type, turnover, and GST registration requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Business Documents (Optional)</label>
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
                  className="w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request GST Registration
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">GST Registration Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Turnover Threshold</span>
                  <p className="text-white font-medium">₹20L (Services) / ₹40L (Goods)</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Processing Time</span>
                  <p className="text-white font-medium">7-15 Working Days</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Government Fee</span>
                  <p className="text-white font-medium">Free</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">GSTIN Format</span>
                  <p className="text-white font-medium">15-Digit Unique Number</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}