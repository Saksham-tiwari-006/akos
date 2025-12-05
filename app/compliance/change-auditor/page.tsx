'use client'

import React, { useState } from 'react';
import { Building2, Users, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock, RefreshCw } from 'lucide-react';

export default function ChangeAuditorPage() {
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
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Change of Auditor Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete guide to auditor change process, legal requirements, and compliance procedures under Companies Act 2013.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Company Auditor */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is a Company Auditor?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  A company auditor is an independent professional appointed to examine and verify the accuracy of a company's financial records, accounts, and statements. They ensure compliance with accounting standards and provide an unbiased opinion on the company's financial position.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities of Company Auditor</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">📊 Financial Audit</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Examine financial statements and books</li>
                        <li>• Verify accuracy of accounting records</li>
                        <li>• Check compliance with accounting standards</li>
                        <li>• Review internal control systems</li>
                        <li>• Test transactions and balances</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">📝 Reporting & Compliance</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Issue independent audit report</li>
                        <li>• Report on internal controls</li>
                        <li>• Highlight material misstatements</li>
                        <li>• Ensure regulatory compliance</li>
                        <li>• Attend AGM and answer queries</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Change Auditor */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Why Companies Change Auditors</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">✅ Mandatory Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Completion of maximum term (Section 139(2))</li>
                    <li>• Auditor resignation or death (Section 140)</li>
                    <li>• Disqualification of auditor</li>
                    <li>• Regulatory requirements</li>
                    <li>• Court orders</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <AlertTriangle className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⚠️ Voluntary Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Unsatisfactory performance</li>
                    <li>• High audit fees</li>
                    <li>• Delays in audit completion</li>
                    <li>• Lack of industry expertise</li>
                    <li>• Service quality issues</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <Building2 className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🏢 Business Reasons</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Corporate restructuring</li>
                    <li>• Change in business location</li>
                    <li>• Merger and acquisitions</li>
                    <li>• Need for specialized expertise</li>
                    <li>• Board/management preferences</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <Scale className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⚖️ Policy Changes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Implementation of rotation policy</li>
                    <li>• Good governance practices</li>
                    <li>• Fresh perspective requirement</li>
                    <li>• Independence concerns</li>
                    <li>• Stakeholder demands</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Framework */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Legal Framework for Auditor Change</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📜 Key Sections of Companies Act, 2013</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Section 139 - Appointment</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Auditor appointment process</li>
                        <li>• Maximum term limitations</li>
                        <li>• Rotation requirements</li>
                        <li>• Re-appointment procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Section 140 - Removal & Resignation</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Removal before expiry of term</li>
                        <li>• Central Government approval</li>
                        <li>• Auditor resignation process</li>
                        <li>• Filling casual vacancies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Three Scenarios */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Three Scenarios for Auditor Change</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="font-semibold text-lg text-red-400">Scenario 1: Removal Before Term Completion</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    When the company wants to remove the auditor before the completion of their appointed term.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-300">Required Process:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Apply to Central Government (ADT-2)</li>
                        <li>• Special resolution by members</li>
                        <li>• Auditor's representation</li>
                        <li>• Government approval required</li>
                        <li>• Appoint new auditor after approval</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-300">Key Requirements:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Valid reasons for removal</li>
                        <li>• Board resolution</li>
                        <li>• Notice to auditor (21 days)</li>
                        <li>• AGM/EGM conduct</li>
                        <li>• Form ADT-2 filing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="font-semibold text-lg text-blue-400">Scenario 2: Auditor Resignation</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    When the auditor voluntarily resigns from their position before term completion.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-300">Resignation Process:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Auditor files ADT-3 with ROC</li>
                        <li>• States reasons for resignation</li>
                        <li>• Copy to company within 30 days</li>
                        <li>• Board acknowledges resignation</li>
                        <li>• Casual vacancy to be filled</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-300">Company's Response:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Board meeting within 30 days</li>
                        <li>• Consider auditor's concerns</li>
                        <li>• Fill vacancy by Board resolution</li>
                        <li>• New auditor until next AGM</li>
                        <li>• File ADT-1 for new appointment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="font-semibold text-lg text-green-400">Scenario 3: Change at AGM (End of Term)</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    Normal change when the auditor's term expires and company appoints a new auditor.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-300">At AGM Process:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Not re-appointing existing auditor</li>
                        <li>• Ordinary resolution for new auditor</li>
                        <li>• No Central Government approval</li>
                        <li>• Direct appointment at AGM</li>
                        <li>• New term begins immediately</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-300">Post-AGM Actions:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Obtain new auditor's consent</li>
                        <li>• Check eligibility certificate</li>
                        <li>• File fresh ADT-1 form</li>
                        <li>• Update company records</li>
                        <li>• Inform all stakeholders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents for Auditor Change</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">📄 Common Documents for All Scenarios</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Board & Member Resolutions</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Board resolution for change</li>
                        <li>• Special/Ordinary resolution by members</li>
                        <li>• Notice of AGM/EGM</li>
                        <li>• Minutes of meetings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Government Forms</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Form ADT-2 (for removal)</li>
                        <li>• Application to Central Government</li>
                        <li>• Form ADT-3 (auditor resignation)</li>
                        <li>• Resignation statement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-teal-400">👥 Outgoing Auditor Documents</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">If Removed</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Auditor's representation letter</li>
                        <li>• Response to removal reasons</li>
                        <li>• Final audit report (if applicable)</li>
                        <li>• Handover documents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">If Resigned</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Resignation letter</li>
                        <li>• Reasons for resignation</li>
                        <li>• NOC for pending matters</li>
                        <li>• Transition cooperation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">✨ New Auditor Documents</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Before Appointment</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Written consent letter</li>
                        <li>• Certificate of eligibility</li>
                        <li>• ICAI membership certificate</li>
                        <li>• PAN and address proof</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Post Appointment</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Form ADT-1 filing</li>
                        <li>• Professional engagement letter</li>
                        <li>• Independence confirmation</li>
                        <li>• Fee arrangement agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-500/10 p-6 rounded-lg border border-pink-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-pink-400">🏛️ ROC Filing Forms</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-300">Change Related Forms</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Form MGT-14 (for resolutions)</li>
                        <li>• Form ADT-1 (new auditor appointment)</li>
                        <li>• Form ADT-2 (removal application)</li>
                        <li>• Form ADT-3 (auditor resignation)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-300">Supporting Documents</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Certified true copies of resolutions</li>
                        <li>• Auditor consent and certificates</li>
                        <li>• Government approval (if required)</li>
                        <li>• Compliance certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help with Auditor Change Process?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for smooth auditor change compliance. We handle all legal formalities!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">3 Scenarios</div>
                  <div className="text-sm opacity-80">Complete Coverage</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Legal Compliance</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Guidance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Auditor Change Assistance</h3>
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
                      Company Details & Change Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your auditor change requirements..."
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
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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