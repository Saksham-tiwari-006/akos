'use client'

import React, { useState } from 'react';
import { ArrowRightLeft, FileText, CheckCircle, AlertTriangle, Clock, Shield, DollarSign, UserCheck } from 'lucide-react';

export default function TransferOfSharesPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
              <ArrowRightLeft className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transfer of Shares
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Facilitate share transfers between shareholders with proper documentation. Handle SH-4 forms, stamp duty, and regulatory compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Share Transfer */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <ArrowRightLeft className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">What is Share Transfer?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Share transfer is the process of transferring ownership of shares from one person (transferor) to another (transferee). This involves proper documentation, stamp duty payment, and compliance with Companies Act provisions to ensure legal validity of the transaction.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 p-6 rounded-lg border border-orange-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <UserCheck className="w-5 h-5" />
                      Types of Transfers
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Inter-se Transfer:</strong> Between existing shareholders</li>
                      <li>• <strong>Sale Transfer:</strong> To new third party investors</li>
                      <li>• <strong>Gift Transfer:</strong> Without consideration (family)</li>
                      <li>• <strong>Transmission:</strong> By operation of law (death/insolvency)</li>
                      <li>• <strong>Pledge Transfer:</strong> As security for loans</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Key Considerations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Right of first refusal to existing shareholders</li>
                      <li>• Valuation of shares for transfer pricing</li>
                      <li>• Stamp duty payment as per state laws</li>
                      <li>• Board approval required (if Articles provide)</li>
                      <li>• Tax implications for both parties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Share Transfer Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Share Transfer Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Share Transfer Deed</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Execute proper share transfer deed between transferor and transferee with all necessary details.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prepare share transfer deed on stamp paper</li>
                        <li>• Include transferor and transferee details</li>
                        <li>• Mention share numbers, consideration amount</li>
                        <li>• Get signatures of both parties with witnesses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">💰 Stamp Duty Payment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Pay stamp duty on share transfer deed as per applicable state laws and transfer value.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Calculate stamp duty (typically 0.25% to 0.5%)</li>
                        <li>• Use appropriate value stamp paper</li>
                        <li>• Pay online stamp duty if e-stamping available</li>
                        <li>• Obtain stamp duty payment receipts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 Application to Company</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit transfer application to company along with required documents for board approval.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Submit duly executed transfer deed</li>
                        <li>• Attach original share certificates</li>
                        <li>• Include KYC documents of transferee</li>
                        <li>• Pay transfer fees to company</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🗳️ Board Approval</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Company board considers and approves the share transfer application as per Articles of Association.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Board reviews transfer application</li>
                        <li>• Verify compliance with Articles of Association</li>
                        <li>• Check right of first refusal compliance</li>
                        <li>• Pass board resolution approving transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📋 Update Records & Issue Certificates</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Update company records, file SH-4 form, and issue fresh share certificates to transferee.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Update register of members</li>
                        <li>• File Form SH-4 with MCA within 60 days</li>
                        <li>• Issue fresh share certificates</li>
                        <li>• Send transfer confirmation to both parties</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Stamp Duty Rates */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Stamp Duty Rates by State</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">📊 Major State Rates</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2">State</th>
                          <th className="text-left py-2">Stamp Duty Rate</th>
                          <th className="text-left py-2">Minimum Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Maharashtra</td>
                          <td className="py-2">0.25% of consideration</td>
                          <td className="py-2">₹100</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Delhi</td>
                          <td className="py-2">0.5% of consideration</td>
                          <td className="py-2">₹100</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Karnataka</td>
                          <td className="py-2">0.5% of consideration</td>
                          <td className="py-2">₹100</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Gujarat</td>
                          <td className="py-2">0.5% of consideration</td>
                          <td className="py-2">₹100</td>
                        </tr>
                        <tr>
                          <td className="py-2">Tamil Nadu</td>
                          <td className="py-2">1% of consideration</td>
                          <td className="py-2">₹100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💡 Stamp Duty Calculation Example</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Share Transfer Value:</span>
                      <span>₹10,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>State (Maharashtra):</span>
                      <span>0.25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Calculated Stamp Duty:</span>
                      <span>₹2,500</span>
                    </div>
                    <div className="flex justify-between font-semibold border-t border-gray-600 pt-2">
                      <span>Stamp Paper Required:</span>
                      <span>₹2,500</span>
                    </div>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📝 Transfer Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Share transfer deed (on stamp paper)</li>
                    <li>• Original share certificates</li>
                    <li>• Transfer application form</li>
                    <li>• Stamp duty payment receipt</li>
                    <li>• Share purchase agreement (if applicable)</li>
                    <li>• No Objection Certificate (if required)</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">👥 Party Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Transferor's identity and address proof</li>
                    <li>• Transferee's KYC documents</li>
                    <li>• PAN cards of both parties</li>
                    <li>• Bank account details</li>
                    <li>• Passport size photographs</li>
                    <li>• Power of Attorney (if applicable)</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ Company Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board resolution approving transfer</li>
                    <li>• Updated register of members extract</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Transfer fees payment receipt</li>
                    <li>• Company secretary certificate</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📋 MCA Filing</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form SH-4 (duly filled)</li>
                    <li>• Digital signatures of directors</li>
                    <li>• Professional certification</li>
                    <li>• Transfer deed copy</li>
                    <li>• Updated shareholding pattern</li>
                    <li>• Filing fee payment receipt</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tax Implications */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Tax Implications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">📊 For Transferor (Seller)</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Capital Gains Tax:</strong> On profit from sale</li>
                    <li>• <strong>Short-term:</strong> Holding < 24 months (30% tax)</li>
                    <li>• <strong>Long-term:</strong> Holding > 24 months (20% + indexation)</li>
                    <li>• <strong>Securities Transaction Tax:</strong> If applicable</li>
                    <li>• <strong>TDS:</strong> May be applicable on consideration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💰 For Transferee (Buyer)</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>No immediate tax:</strong> On purchase</li>
                    <li>• <strong>Cost of acquisition:</strong> Purchase price + expenses</li>
                    <li>• <strong>Future capital gains:</strong> Based on this cost</li>
                    <li>• <strong>Dividend income:</strong> Taxable when received</li>
                    <li>• <strong>TDS deduction:</strong> If required by law</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-500/30">
                <h3 className="font-semibold text-lg mb-3 text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Tax Considerations
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Consult tax advisor for accurate calculation of capital gains and applicable tax rates</li>
                  <li>• Consider timing of transfer for tax optimization (short-term vs long-term)</li>
                  <li>• Maintain proper documentation for cost of acquisition and improvement expenses</li>
                  <li>• File appropriate tax returns and pay advance tax if significant gains</li>
                </ul>
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
                    <li>• <strong>Transfer Deed Execution:</strong> 1-2 days</li>
                    <li>• <strong>Stamp Duty Payment:</strong> 1 day</li>
                    <li>• <strong>Company Board Approval:</strong> 7-15 days</li>
                    <li>• <strong>SH-4 Filing:</strong> Within 60 days</li>
                    <li>• <strong>Certificate Issuance:</strong> 7-10 days</li>
                    <li>• <strong>Total Timeline:</strong> 30-45 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Total Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Stamp Duty:</strong> 0.25%-1% of value</li>
                    <li>• <strong>Transfer Fees:</strong> ₹500-₹2,000</li>
                    <li>• <strong>Legal Documentation:</strong> ₹3,000-₹10,000</li>
                    <li>• <strong>MCA Filing Fee:</strong> ₹300</li>
                    <li>• <strong>Professional Fees:</strong> ₹5,000-₹15,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transfer Shares?</h2>
              <p className="text-xl mb-6 opacity-90">
                Facilitate smooth share transfers with proper documentation, stamp duty compliance, and regulatory filing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-45 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹10K-₹30K+</div>
                  <div className="text-sm opacity-80">Professional Cost</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Transfer Shares</h3>
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
                      Transfer Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Number of shares, transfer value, transferor/transferee details..."
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
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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