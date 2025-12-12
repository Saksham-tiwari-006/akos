'use client'

import React, { useState } from 'react';
import { XCircle, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign } from 'lucide-react';

export default function ClosePrivateLimitedCompanyPage() {
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
              Close Private Limited Company
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Close your private limited company legally through voluntary closure process. Handle STK-2 forms and complete regulatory compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Company Closure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">What is Company Closure?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Company closure is the legal process of winding up a private limited company's operations and dissolving it from the Register of Companies. This can be done voluntarily when the company is no longer needed or has ceased operations, ensuring proper settlement of all liabilities and legal compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Types of Closure
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Voluntary Closure:</strong> Company initiated closure</li>
                      <li>• <strong>Compulsory Closure:</strong> Government/Court ordered</li>
                      <li>• <strong>Strike-off:</strong> Removal from register (STK-2)</li>
                      <li>• <strong>Fast Track Exit:</strong> For eligible small companies</li>
                      <li>• <strong>Dissolution:</strong> Final winding up process</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Reasons for Closure
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Business is no longer viable</li>
                      <li>• Change in business objectives</li>
                      <li>• Financial difficulties</li>
                      <li>• Completion of project purpose</li>
                      <li>• Merger with another entity</li>
                      <li>• Regulatory compliance burden</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Closure Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Voluntary Company Closure Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board of Directors must pass resolution to recommend voluntary winding up of the company.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene board meeting with proper notice</li>
                        <li>• Discuss reasons for company closure</li>
                        <li>• Pass resolution recommending closure</li>
                        <li>• Authorize calling of shareholders' meeting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🗳️ Special Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Shareholders must pass special resolution to approve voluntary winding up of company.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice to all shareholders</li>
                        <li>• Conduct AGM/EGM with proper quorum</li>
                        <li>• Pass special resolution (75% majority)</li>
                        <li>• Appoint liquidator if required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">💰 Settle Liabilities</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Clear all outstanding liabilities, dues, and obligations before proceeding with closure.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Pay all creditors and suppliers</li>
                        <li>• Clear employee dues and benefits</li>
                        <li>• Settle tax obligations (Income Tax, GST)</li>
                        <li>• Obtain clearance certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📄 File STK-2</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File Form STK-2 with MCA for voluntary strike-off of company from register.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form STK-2 accurately</li>
                        <li>• Attach required documents and certificates</li>
                        <li>• Pay government fees and charges</li>
                        <li>• Submit through MCA portal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📰 Publication & Final Closure</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        MCA publishes notice in Official Gazette and company is finally dissolved after objection period.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• MCA publishes first notice in Gazette</li>
                        <li>• 60-day objection period for stakeholders</li>
                        <li>• Final notice and company dissolution</li>
                        <li>• Certificate of dissolution issued</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Eligibility for Voluntary Closure</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Eligibility Criteria</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Company should not have commenced business operations</li>
                    <li>• No business operations for 2 immediate preceding financial years</li>
                    <li>• No outstanding liabilities or dues</li>
                    <li>• No assets except cash and bank balance ≤ ₹1 lakh</li>
                    <li>• No application for name change pending</li>
                    <li>• Not under investigation by any authority</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Disqualifying Factors</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Outstanding loans or advances</li>
                    <li>• Pending litigation or legal disputes</li>
                    <li>• Non-filing of annual returns</li>
                    <li>• Outstanding regulatory dues</li>
                    <li>• Investigation by regulatory authorities</li>
                    <li>• Significant assets or operations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Board & Shareholder Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board resolution for voluntary winding up</li>
                    <li>• Notice of AGM/EGM (21 days)</li>
                    <li>• Special resolution of shareholders</li>
                    <li>• Minutes of board and AGM/EGM</li>
                    <li>• Declaration by directors</li>
                    <li>• Liquidator's appointment (if applicable)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Compliance Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Latest audited financial statements</li>
                    <li>• Income Tax clearance certificate</li>
                    <li>• GST clearance certificate</li>
                    <li>• EPF/ESI clearance certificates</li>
                    <li>• No dues certificate from banks</li>
                    <li>• Professional tax clearance</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📄 MCA Filing Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form STK-2 (duly filled and signed)</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Latest annual return (MGT-7)</li>
                    <li>• Digital signatures of directors</li>
                    <li>• Professional certification</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Additional Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Bank statements (last 2 years)</li>
                    <li>• Asset disposal certificates</li>
                    <li>• Employee settlement documents</li>
                    <li>• Vendor/supplier clearances</li>
                    <li>• Rental agreements cancellation</li>
                    <li>• Insurance policy surrenders</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Closure Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Post-Closure Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Immediate Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Surrender all licenses and registrations</li>
                    <li>• Close all bank accounts</li>
                    <li>• Cancel GST registration</li>
                    <li>• Surrender PAN and TAN</li>
                    <li>• Cancel insurance policies</li>
                    <li>• Inform employees and stakeholders</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">⚖️ Legal Implications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Company ceases to exist legally</li>
                    <li>• Directors' liabilities may continue</li>
                    <li>• Assets vest in government</li>
                    <li>• No business operations allowed</li>
                    <li>• Restoration possible within 20 years</li>
                    <li>• Maintain records for statutory period</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="font-semibold text-lg mb-3 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Warning
                </h3>
                <p className="text-sm text-gray-300">
                  Company closure is irreversible under normal circumstances. Ensure all liabilities are settled and consider alternative options like dormancy before proceeding. Directors may face personal liability for company's unsettled obligations even after closure.
                </p>
              </div>
            </section>

            {/* Timeline and Costs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Costs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Process Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Documentation & Compliance:</strong> 30-60 days</li>
                    <li>• <strong>Board & Shareholder Resolutions:</strong> 15-30 days</li>
                    <li>• <strong>STK-2 Filing:</strong> 1-7 days</li>
                    <li>• <strong>MCA Processing:</strong> 60-90 days</li>
                    <li>• <strong>Gazette Publication:</strong> 60 days objection period</li>
                    <li>• <strong>Total Timeline:</strong> 6-12 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Total Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Government Fees:</strong> ₹5,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>Compliance Costs:</strong> ₹10,000-₹25,000</li>
                    <li>• <strong>Liquidation Costs:</strong> Variable</li>
                    <li>• <strong>Total Estimate:</strong> ₹35,000-₹1,00,000+</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Close Your Company?</h2>
              <p className="text-xl mb-6 opacity-90">
                Close your private limited company legally with complete compliance and proper settlement of all obligations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">6-12 Months</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹50K-₹1L+</div>
                  <div className="text-sm opacity-80">Total Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Legal Closure</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Close Company</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Closure Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Company name, reason for closure, current status..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Documents (Optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Expert Assistance
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>100% Legal</span>
                    </div>
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