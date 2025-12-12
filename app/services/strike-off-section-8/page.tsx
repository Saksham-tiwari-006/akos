'use client'

import React, { useState } from 'react';
import { Heart, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, Users } from 'lucide-react';

export default function StrikeOffSection8Page() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strike-off Section 8 Company
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dissolve your Section 8 company (NGO/Non-profit) through proper regulatory procedures with specialized compliance requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Section 8 Strike-off */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Heart className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">What is Section 8 Company Strike-off?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Section 8 company strike-off is the process of dissolving a non-profit organization registered under Section 8 of the Companies Act, 2013. These companies, formed for charitable, religious, educational, or social welfare purposes, have specific compliance requirements and dissolution procedures different from regular companies.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Section 8 Companies
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>NGOs:</strong> Non-governmental organizations</li>
                      <li>• <strong>NPOs:</strong> Non-profit organizations</li>
                      <li>• <strong>Trusts:</strong> Charitable and educational trusts</li>
                      <li>• <strong>Societies:</strong> Social welfare societies</li>
                      <li>• <strong>Foundations:</strong> Research and development</li>
                      <li>• <strong>Associations:</strong> Professional associations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Reasons for Strike-off
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Completion of organizational objectives</li>
                      <li>• Lack of funding or resources</li>
                      <li>• Change in regulatory environment</li>
                      <li>• Merger with other organizations</li>
                      <li>• Inactive operations for extended period</li>
                      <li>• Non-compliance with statutory requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 Strike-off Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Section 8 Strike-off Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Board Resolution & Members' Consent</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Pass board resolution and obtain members' consent for voluntary dissolution of Section 8 company.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene board meeting with proper notice</li>
                        <li>• Pass resolution for voluntary dissolution</li>
                        <li>• Call general meeting of members</li>
                        <li>• Pass special resolution (75% majority)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🏛️ Regulatory Clearances</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain clearances from all regulatory authorities and settle outstanding obligations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Income Tax Department clearance</li>
                        <li>• GST registration cancellation</li>
                        <li>• 12A/80G registration cancellation</li>
                        <li>• FCRA clearance (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">💰 Asset Distribution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Transfer assets to similar Section 8 companies as required by law.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identify similar objects organizations</li>
                        <li>• Prepare asset transfer documents</li>
                        <li>• Execute transfer deeds</li>
                        <li>• Obtain beneficiary acceptance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📄 File STK-2 with MCA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Form STK-2 for voluntary strike-off with specialized Section 8 requirements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form STK-2 accurately</li>
                        <li>• Attach Section 8 specific documents</li>
                        <li>• Submit asset transfer proofs</li>
                        <li>• Pay required government fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📰 Publication & Final Dissolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        MCA publishes notice and completes dissolution after objection period.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• First notice in Official Gazette</li>
                        <li>• 60-day objection period</li>
                        <li>• Final notice and dissolution</li>
                        <li>• Certificate of dissolution issued</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Requirements for Section 8 */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Special Requirements for Section 8</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ Regulatory Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Income Tax:</strong> 12A and 80G registration cancellation</li>
                    <li>• <strong>FCRA:</strong> Foreign contribution clearance (if applicable)</li>
                    <li>• <strong>State Registrations:</strong> Society/Trust act registrations</li>
                    <li>• <strong>Donor Obligations:</strong> Inform major donors and grant agencies</li>
                    <li>• <strong>Beneficiary Notice:</strong> Inform program beneficiaries</li>
                    <li>• <strong>Staff Settlement:</strong> Employee dues and gratuity</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">💝 Asset Transfer Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Similar Objects:</strong> Must transfer to organizations with similar objectives</li>
                    <li>• <strong>No Distribution:</strong> Cannot distribute assets to members</li>
                    <li>• <strong>Proper Valuation:</strong> Assets valued at fair market price</li>
                    <li>• <strong>Documentation:</strong> Proper transfer deeds and acceptance</li>
                    <li>• <strong>Board Approval:</strong> Receiving organization's board consent</li>
                    <li>• <strong>Beneficiary Continuity:</strong> Ensure program continuity</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-orange-600/20 to-red-600/20 p-6 rounded-lg border border-orange-500/30">
                <h3 className="font-semibold text-lg mb-3 text-orange-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important for Section 8 Companies
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Section 8 companies cannot distribute assets to members upon dissolution. All assets must be transferred to other organizations with similar charitable or social objectives as mandated by the Companies Act, 2013.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Mandatory Asset Transfer:</h4>
                    <ul className="space-y-1">
                      <li>• Cash and bank balances</li>
                      <li>• Fixed assets and equipment</li>
                      <li>• Investments and securities</li>
                      <li>• Intellectual property rights</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Eligible Recipients:</h4>
                    <ul className="space-y-1">
                      <li>• Other Section 8 companies</li>
                      <li>• Registered charitable trusts</li>
                      <li>• Societies with similar objects</li>
                      <li>• Government institutions</li>
                    </ul>
                  </div>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Corporate Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Section 8 license certificate</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Board resolution for dissolution</li>
                    <li>• Special resolution of members</li>
                    <li>• Minutes of meetings</li>
                    <li>• List of members and directors</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Regulatory Clearances</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Income Tax clearance certificate</li>
                    <li>• 12A/80G registration cancellation</li>
                    <li>• GST registration cancellation</li>
                    <li>• FCRA clearance (if applicable)</li>
                    <li>• State society/trust cancellation</li>
                    <li>• EPF/ESI clearance certificates</li>
                    <li>• Professional tax clearance</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 Financial Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Audited financial statements (3 years)</li>
                    <li>• Assets and liabilities statement</li>
                    <li>• Bank statements and reconciliation</li>
                    <li>• Asset valuation reports</li>
                    <li>• Utilization certificates</li>
                    <li>• Grant and donation records</li>
                    <li>• Employee dues settlement</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📄 Asset Transfer Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Asset transfer agreements</li>
                    <li>• Beneficiary organization details</li>
                    <li>• Similar objects verification</li>
                    <li>• Receiving organization's consent</li>
                    <li>• Transfer deed execution</li>
                    <li>• Handover completion certificates</li>
                    <li>• Beneficiary acknowledgments</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Dissolution Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Post-Dissolution Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Immediate Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Inform donors and grant agencies</li>
                    <li>• Notify program beneficiaries</li>
                    <li>• Close all bank accounts</li>
                    <li>• Surrender PAN and TAN</li>
                    <li>• Cancel all licenses and registrations</li>
                    <li>• Return unutilized grants</li>
                    <li>• Submit final utilization certificates</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">⚖️ Legal Implications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Section 8 license automatically lapses</li>
                    <li>• No business operations allowed</li>
                    <li>• Directors cease to hold office</li>
                    <li>• Assets legally transferred</li>
                    <li>• Tax exemptions terminated</li>
                    <li>• Records maintained by receiving organization</li>
                    <li>• Restoration possible under special circumstances</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="font-semibold text-lg mb-3 text-purple-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Stakeholder Communication
                </h3>
                <p className="text-sm text-gray-300 mb-3">
                  Section 8 companies must inform all stakeholders including beneficiaries, donors, volunteers, and partner organizations about the dissolution and asset transfer arrangements.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Notify:</h4>
                    <ul className="space-y-1">
                      <li>• Program beneficiaries</li>
                      <li>• Donors and sponsors</li>
                      <li>• Volunteers and staff</li>
                      <li>• Partner organizations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Communicate:</h4>
                    <ul className="space-y-1">
                      <li>• Reasons for dissolution</li>
                      <li>• Asset transfer arrangements</li>
                      <li>• Program continuity plans</li>
                      <li>• Contact details of successor</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Ensure:</h4>
                    <ul className="space-y-1">
                      <li>• Smooth transition</li>
                      <li>• Minimal disruption</li>
                      <li>• Proper handover</li>
                      <li>• Beneficiary protection</li>
                    </ul>
                  </div>
                </div>
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
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Dissolution Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Planning & Documentation:</strong> 45-60 days</li>
                    <li>• <strong>Regulatory Clearances:</strong> 60-90 days</li>
                    <li>• <strong>Asset Transfer Process:</strong> 30-45 days</li>
                    <li>• <strong>STK-2 Filing & Processing:</strong> 30-60 days</li>
                    <li>• <strong>Gazette Publication & Objection:</strong> 60 days</li>
                    <li>• <strong>Total Timeline:</strong> 8-12 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Dissolution Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Government Fees:</strong> ₹5,000-₹10,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹25,000-₹75,000</li>
                    <li>• <strong>Asset Valuation:</strong> ₹10,000-₹50,000</li>
                    <li>• <strong>Transfer Documentation:</strong> ₹15,000-₹40,000</li>
                    <li>• <strong>Compliance Costs:</strong> ₹10,000-₹30,000</li>
                    <li>• <strong>Total Estimate:</strong> ₹65,000-₹2,05,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help with Section 8 Strike-off?</h2>
              <p className="text-xl mb-6 opacity-90">
                Dissolve your Section 8 company with proper asset transfer and full regulatory compliance for NGOs and non-profits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">8-12 Months</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹65K-₹2L</div>
                  <div className="text-sm opacity-80">Total Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Asset Transfer</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Section 8 Strike-off</h3>
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
                      Organization Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Organization name, objectives, reason for strike-off, assets details..."
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get NGO Dissolution Help
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>NGO Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Asset Transfer</span>
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