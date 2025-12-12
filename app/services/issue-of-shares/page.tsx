'use client'

import React, { useState } from 'react';
import { Share, FileText, CheckCircle, AlertTriangle, Clock, Shield, TrendingUp, Award } from 'lucide-react';

export default function IssueOfSharesPage() {
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
              <Share className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Issue of Shares
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Issue Rights, Private Placement, Bonus, or ESOP shares to raise capital and reward stakeholders. Handle PAS-3 forms and regulatory compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Types of Share Issues */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Share className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Types of Share Issue</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    <h3 className="font-semibold text-lg text-blue-400">Rights Issue</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Issue new shares to existing shareholders in proportion to their current holdings at a discounted price.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Offered to existing shareholders first</li>
                    <li>• Usually at discount to market price</li>
                    <li>• Maintains ownership proportions</li>
                    <li>• Requires special resolution</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Share className="w-6 h-6 text-green-400" />
                    <h3 className="font-semibold text-lg text-green-400">Private Placement</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Issue shares to select investors or institutions without public offering to raise specific capital.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Limited to 200 persons in a year</li>
                    <li>• No public advertisement</li>
                    <li>• Faster capital raising process</li>
                    <li>• Requires special resolution</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-purple-400" />
                    <h3 className="font-semibold text-lg text-purple-400">Bonus Shares</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Issue free shares to existing shareholders from reserves and surplus, rewarding loyalty.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Free shares from company reserves</li>
                    <li>• Proportional to existing holdings</li>
                    <li>• No cash consideration required</li>
                    <li>• Improves liquidity of shares</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-orange-400" />
                    <h3 className="font-semibold text-lg text-orange-400">ESOP Shares</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Employee Stock Option Plan shares issued to employees as incentive and retention tool.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Employee motivation and retention</li>
                    <li>• Vesting period conditions</li>
                    <li>• Exercise price determination</li>
                    <li>• Tax implications for employees</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rights Issue Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Rights Issue Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board must approve the rights issue proposal including terms, pricing, and timeline.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Determine number of shares to issue</li>
                        <li>• Fix rights ratio (e.g., 1:2, 1:3)</li>
                        <li>• Set issue price (usually at discount)</li>
                        <li>• Approve issue timeline and record date</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🗳️ Shareholder Approval</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Special resolution required from shareholders to approve the rights issue terms.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice for AGM/EGM</li>
                        <li>• Pass special resolution (75% majority)</li>
                        <li>• Approve all terms and conditions</li>
                        <li>• Record meeting minutes properly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 Rights Issue Letter</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Send rights issue letters to all eligible shareholders with application forms.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prepare rights entitlement letters</li>
                        <li>• Include application forms</li>
                        <li>• Specify subscription period (15-30 days)</li>
                        <li>• Mention payment instructions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">💰 Collect Applications</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Collect applications and payments from shareholders during subscription period.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Open separate bank account for issue</li>
                        <li>• Collect applications with payment</li>
                        <li>• Maintain proper records</li>
                        <li>• Handle renunciation if allowed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">🏛️ File PAS-3 & Allotment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File Form PAS-3 with MCA and allot shares to successful applicants.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form PAS-3 within 30 days</li>
                        <li>• Allot shares to successful applicants</li>
                        <li>• Issue share certificates</li>
                        <li>• Update statutory registers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Private Placement Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Share className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Private Placement Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">Key Steps for Private Placement</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-400">Pre-Issue Requirements</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Board resolution for private placement</li>
                        <li>• Special resolution by shareholders</li>
                        <li>• Identify and approach investors</li>
                        <li>• Prepare private placement offer document</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-green-400">Post-Issue Compliance</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form PAS-3 within 30 days</li>
                        <li>• Issue share certificates</li>
                        <li>• Update register of members</li>
                        <li>• File annual return updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">⚖️ Legal Restrictions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Cannot offer to more than 200 persons in a financial year</li>
                    <li>• No public advertisement or invitation allowed</li>
                    <li>• Lock-in period of 1 year from allotment date</li>
                    <li>• Compliance with SEBI regulations if applicable</li>
                    <li>• Proper disclosure to existing shareholders</li>
                    <li>• Maintain detailed records of all transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Bonus Shares Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Bonus Shares Issue</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📊 Requirements for Bonus Issue</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Sufficient free reserves available</li>
                    <li>• Company must be profit-making</li>
                    <li>• Articles should authorize bonus issue</li>
                    <li>• No default in payment of deposits</li>
                    <li>• Compliance with all regulatory requirements</li>
                    <li>• Auditor's certificate on reserves</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">🔄 Bonus Issue Process</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board resolution for bonus issue</li>
                    <li>• Special resolution by shareholders</li>
                    <li>• Determine bonus ratio (e.g., 1:1, 2:1)</li>
                    <li>• Transfer amount from reserves to share capital</li>
                    <li>• Issue bonus shares to eligible shareholders</li>
                    <li>• File necessary forms with MCA</li>
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
                    <li>• Board Resolution for share issue</li>
                    <li>• Notice of AGM/EGM (21 days)</li>
                    <li>• Special Resolution of shareholders</li>
                    <li>• Minutes of board and AGM/EGM</li>
                    <li>• List of shareholders as on record date</li>
                    <li>• Valuation certificate (if applicable)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📄 Issue Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Rights issue letter/Private placement offer</li>
                    <li>• Application forms for subscription</li>
                    <li>• Share application money bank account</li>
                    <li>• Investor agreements (private placement)</li>
                    <li>• Share certificates (post allotment)</li>
                    <li>• Allotment advice to shareholders</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ MCA Filing Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form PAS-3 (Return of allotment)</li>
                    <li>• Updated Memorandum of Association</li>
                    <li>• Professional certification by CS/CA</li>
                    <li>• Digital signatures of directors</li>
                    <li>• Fee payment receipts</li>
                    <li>• Compliance certificates</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Current Certificate of Incorporation</li>
                    <li>• Latest audited financial statements</li>
                    <li>• Register of members (updated)</li>
                    <li>• Bank account details and statements</li>
                    <li>• KYC documents of new shareholders</li>
                    <li>• Legal opinion (if complex structure)</li>
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
                    <li>• <strong>Rights Issue:</strong> 45-90 days</li>
                    <li>• <strong>Private Placement:</strong> 30-60 days</li>
                    <li>• <strong>Bonus Issue:</strong> 30-45 days</li>
                    <li>• <strong>ESOP Issue:</strong> 60-90 days</li>
                    <li>• <strong>PAS-3 Filing:</strong> Within 30 days of allotment</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Costs Involved</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>MCA Fees:</strong> ₹500-₹5,000</li>
                    <li>• <strong>Stamp Duty:</strong> 0.5% of issue amount</li>
                    <li>• <strong>Professional Fees:</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>Printing & Documentation:</strong> ₹5,000-₹15,000</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-lg mb-3 text-blue-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Compliance Notes
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• All share issues must comply with Companies Act 2013 and SEBI regulations</li>
                  <li>• Private placement shares have 1-year lock-in period from allotment</li>
                  <li>• Rights issue must be offered to all eligible shareholders</li>
                  <li>• Bonus shares can only be issued from free reserves</li>
                </ul>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Issue Shares?</h2>
              <p className="text-xl mb-6 opacity-90">
                Raise capital efficiently through Rights Issue, Private Placement, Bonus Shares, or ESOPs with complete compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-90 Days</div>
                  <div className="text-sm opacity-80">Process Timeline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹25K-₹75K</div>
                  <div className="text-sm opacity-80">Professional Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Regulatory Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Issue Shares</h3>
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
                      Share Issue Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Type of issue (Rights/Private/Bonus/ESOP), amount to raise, purpose..."
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