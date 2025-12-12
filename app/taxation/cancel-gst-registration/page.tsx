'use client'

import React, { useState } from 'react';
import { XCircle, FileX, CheckCircle, Clock, Shield, Building, DollarSign, AlertTriangle } from 'lucide-react';

export default function CancelGSTPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <XCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cancel GST Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A business may cancel GST registration due to business closure, low turnover, change in structure, or switching to composition scheme. Process involves filing application and submitting final returns.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Reasons for Cancellation */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FileX className="w-8 h-8 text-red-400 mr-3" />
                Reasons for GST Registration Cancellation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Changes</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Business closure or winding up</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Change in business structure</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Transfer of business ownership</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Death of proprietor</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Operational Reasons</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Turnover below threshold limit</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Switching to composition scheme</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Merger or amalgamation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Conversion to different entity type</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Cancellation */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Types of GST Registration Cancellation</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Voluntary Cancellation</h3>
                  <p className="text-gray-300 mb-4">
                    Initiated by the taxpayer when business operations cease or conditions for mandatory registration no longer exist.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Business closure</li>
                    <li>• Turnover below threshold</li>
                    <li>• Switching to composition</li>
                    <li>• Change in business type</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-6 border border-red-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Cancellation by Department</h3>
                  <p className="text-gray-300 mb-4">
                    GST authorities can cancel registration for non-compliance, fraud, or failure to meet obligations.
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Non-filing of returns for 6 months</li>
                    <li>• No business operations detected</li>
                    <li>• Violation of GST provisions</li>
                    <li>• Fraudulent registration</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancellation Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">GST Cancellation Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">File Cancellation Application</h3>
                    <p className="text-gray-300">Submit Form GST REG-16 on the GST portal with required documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">File Final Returns</h3>
                    <p className="text-gray-300">Submit final GSTR-1, GSTR-3B, and GSTR-4 (if applicable) returns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Clear Outstanding Dues</h3>
                    <p className="text-gray-300">Pay all pending tax liabilities, interest, and penalties</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Department Verification</h3>
                    <p className="text-gray-300">GST officer may conduct physical verification if required</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Cancellation Order</h3>
                    <p className="text-gray-300">Receive cancellation certificate (Form GST REG-05)</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Basic Documents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>GST registration certificate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>All filed GST returns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Tax payment challans</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Outstanding liability clearance</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Closure Documents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Business closure notification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Board resolution (for companies)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Final financial statements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Stock disposal details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Considerations */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Post-Cancellation Implications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">No GST Collection/Payment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Loss of Input Tax Credit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Cannot Issue Tax Invoices</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                    <span className="text-white font-medium">Re-registration if Required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Tax Refund Claims</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Compliance Obligations End</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Timeline & Warnings */}
            <section className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-7 h-7 text-red-400 mr-3" />
                Important Warnings & Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Processing Time:</strong> 15-30 working days</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Final Returns:</strong> Must be filed before cancellation</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-1" />
                    <span><strong>Outstanding Dues:</strong> Must clear all liabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Stock Transfer:</strong> Pay tax on remaining stock</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">GST Cancellation Assistance</h2>
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
                  placeholder="Describe the reason for GST cancellation and your current business status..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload GST Documents (Optional)</label>
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
                  className="w-full bg-white text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Cancellation Service
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Cancellation Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Processing Time</span>
                  <p className="text-white font-medium">15-30 Working Days</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Form Required</span>
                  <p className="text-white font-medium">GST REG-16</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Final Returns</span>
                  <p className="text-white font-medium">Mandatory</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Re-registration</span>
                  <p className="text-white font-medium">Possible if Required</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}