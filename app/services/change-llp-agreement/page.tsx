'use client'

import React, { useState } from 'react';
import { FileEdit, FileText, CheckCircle, AlertTriangle, Clock, Shield, Users, Scale } from 'lucide-react';

export default function ChangeLLPAgreementPage() {
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
              <FileEdit className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Change LLP Agreement
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Modify your LLP Agreement to reflect business changes. Handle partner consent, regulatory filing, and compliance requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is LLP Agreement Change */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileEdit className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">What is LLP Agreement Change?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  LLP Agreement is the constitutional document that governs the mutual rights and duties of partners and their relationship with the LLP. Any changes to this agreement require proper documentation, partner consent, and regulatory compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      Common Changes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Partner capital contribution modifications</li>
                      <li>• Profit sharing ratio changes</li>
                      <li>• Management rights alteration</li>
                      <li>• Business scope expansion/restriction</li>
                      <li>• Partner retirement/admission clauses</li>
                      <li>• Decision-making process updates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Key Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Consent from all partners required</li>
                      <li>• Proper documentation and execution</li>
                      <li>• MCA filing within prescribed time</li>
                      <li>• Update statutory registers</li>
                      <li>• Compliance with LLP Act provisions</li>
                      <li>• Professional certification needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for LLP Agreement Change */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Process to Change LLP Agreement</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Partner Meeting & Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Convene meeting of all partners to discuss and approve proposed changes to LLP Agreement.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send proper notice to all partners</li>
                        <li>• Conduct partner meeting with agenda</li>
                        <li>• Discuss proposed amendments in detail</li>
                        <li>• Pass resolution with unanimous consent</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Draft Amendment Document</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Prepare detailed amendment document clearly stating all changes to the existing LLP Agreement.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identify specific clauses to be amended</li>
                        <li>• Draft clear and comprehensive changes</li>
                        <li>• Ensure compliance with LLP Act</li>
                        <li>• Include effective date of amendments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">✍️ Execute Amendment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        All partners must sign the amendment document with proper stamp duty and attestation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Print amendment on appropriate stamp paper</li>
                        <li>• Obtain signatures of all partners</li>
                        <li>• Get document notarized if required</li>
                        <li>• Pay applicable stamp duty</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ File with MCA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File Form 3 with MCA to notify changes in LLP Agreement within prescribed timeline.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form 3 (Change in LLP Agreement)</li>
                        <li>• Attach amendment document copy</li>
                        <li>• Submit within 30 days of execution</li>
                        <li>• Pay government fees and additional fees if any</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📋 Update Records</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Update all statutory registers and notify relevant parties about LLP Agreement changes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Update register of LLP Agreement</li>
                        <li>• Modify internal policy documents</li>
                        <li>• Notify banks and financial institutions</li>
                        <li>• Update business contracts if required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Agreement Changes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Types of LLP Agreement Changes</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💰 Financial Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Capital contribution modifications</li>
                    <li>• Profit sharing ratio alterations</li>
                    <li>• Loss sharing arrangement changes</li>
                    <li>• Partner drawing rights updates</li>
                    <li>• Interest on capital modifications</li>
                    <li>• Salary/remuneration adjustments</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">⚖️ Management Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Decision-making authority distribution</li>
                    <li>• Management roles and responsibilities</li>
                    <li>• Voting rights modifications</li>
                    <li>• Partner meeting procedures</li>
                    <li>• Quorum requirements changes</li>
                    <li>• Designated partner modifications</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🎯 Business Scope Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Business activities expansion</li>
                    <li>• Geographical operation changes</li>
                    <li>• New business line additions</li>
                    <li>• Partnership objectives modification</li>
                    <li>• Client/market restrictions</li>
                    <li>• Service delivery modifications</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">👥 Partner-related Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Partner admission procedures</li>
                    <li>• Retirement/exit clauses</li>
                    <li>• Expulsion provisions</li>
                    <li>• Succession planning updates</li>
                    <li>• Non-compete clauses</li>
                    <li>• Confidentiality obligations</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📄 Agreement Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Current LLP Agreement (original)</li>
                    <li>• Draft amendment document</li>
                    <li>• Partner resolution/consent</li>
                    <li>• Meeting minutes of partner decision</li>
                    <li>• Comparative statement (old vs new)</li>
                    <li>• Reasons for amendments</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Regulatory Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Certificate of Incorporation</li>
                    <li>• Form 3 (Change in LLP Agreement)</li>
                    <li>• Latest Form 11 (Annual Return)</li>
                    <li>• Latest Form 8 (Statement of Account)</li>
                    <li>• Professional certification</li>
                    <li>• Digital signatures of partners</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">👥 Partner Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• All partners' identity proof</li>
                    <li>• Address proof of all partners</li>
                    <li>• DPIN details of designated partners</li>
                    <li>• Partner consent letters</li>
                    <li>• New partner documents (if adding)</li>
                    <li>• Outgoing partner clearance (if removing)</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Stamp duty payment receipt</li>
                    <li>• Notarization certificates</li>
                    <li>• Legal opinion (if complex changes)</li>
                    <li>• Valuation report (if capital changes)</li>
                    <li>• Bank account details update</li>
                    <li>• Professional fees payment receipt</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline and Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Process Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Partner Meeting:</strong> 2-5 days</li>
                    <li>• <strong>Amendment Drafting:</strong> 3-7 days</li>
                    <li>• <strong>Execution & Stamp Duty:</strong> 2-3 days</li>
                    <li>• <strong>Form 3 Filing:</strong> Within 30 days</li>
                    <li>• <strong>Total Process:</strong> 15-45 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Costs Involved</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Stamp Duty:</strong> ₹100-₹1,000 (varies by state)</li>
                    <li>• <strong>Form 3 Fee:</strong> ₹300</li>
                    <li>• <strong>Professional Fees:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>Late Filing Penalty:</strong> ₹100/day</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="font-semibold text-lg mb-3 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Compliance Alert
                </h3>
                <p className="text-sm text-gray-300">
                  All changes to LLP Agreement must be filed with MCA within 30 days of execution. Unanimous consent of all partners is mandatory for any amendments. Non-compliance can result in penalties and legal complications.
                </p>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need to Change LLP Agreement?</h2>
              <p className="text-xl mb-6 opacity-90">
                Modify your LLP Agreement professionally with complete legal compliance and partner consent management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">15-45 Days</div>
                  <div className="text-sm opacity-80">Process Timeline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹8K-₹20K</div>
                  <div className="text-sm opacity-80">Total Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Legal Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Change LLP Agreement</h3>
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
                      Agreement Changes Required
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe the changes needed in your LLP Agreement..."
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
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                      <span>100% Compliant</span>
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