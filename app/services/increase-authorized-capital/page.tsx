'use client'

import React, { useState } from 'react';
import { TrendingUp, FileText, CheckCircle, AlertTriangle, Clock, Shield, DollarSign, Building } from 'lucide-react';

export default function IncreaseAuthorizedCapitalPage() {
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
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Increase Authorized Capital
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expand your company's authorized capital to support business growth. Handle SH-7 filing, MOA amendment, and shareholder approval seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Authorized Capital Increase */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">What is Authorized Capital Increase?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Authorized Capital is the maximum amount of share capital that a company is authorized to issue as per its Memorandum of Association. Increasing authorized capital allows the company to issue more shares for business expansion, raising funds, or strategic purposes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Why Increase Capital?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Business expansion funding requirements</li>
                      <li>• Issue new shares to investors</li>
                      <li>• Meet regulatory compliance requirements</li>
                      <li>• Facilitate mergers and acquisitions</li>
                      <li>• Employee stock option plans (ESOPs)</li>
                      <li>• Improve financial flexibility</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Key Considerations
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Shareholder approval required (ordinary resolution)</li>
                      <li>• Additional fees payable to MCA</li>
                      <li>• MOA amendment necessary</li>
                      <li>• Stamp duty on increased capital</li>
                      <li>• Updated share certificates required</li>
                      <li>• Compliance with Companies Act provisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for Capital Increase */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Process to Increase Authorized Capital</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board of Directors must pass resolution to propose increase in authorized capital and call AGM/EGM.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene board meeting with proper notice</li>
                        <li>• Discuss need for capital increase</li>
                        <li>• Determine new authorized capital amount</li>
                        <li>• Pass resolution to call shareholders' meeting</li>
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
                        Shareholders must approve the capital increase through ordinary resolution at AGM or EGM.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice to all shareholders</li>
                        <li>• Conduct meeting with proper quorum</li>
                        <li>• Pass ordinary resolution (simple majority)</li>
                        <li>• Record approval in meeting minutes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 Amend MOA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Prepare amended Memorandum of Association reflecting the increased authorized capital amount.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Update Capital Clause in MOA</li>
                        <li>• Print on appropriate stamp paper</li>
                        <li>• Obtain signatures of subscribers</li>
                        <li>• Ensure compliance with prescribed format</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📝 File Form SH-7</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Form SH-7 with MCA along with required documents and additional fees for capital increase.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form SH-7 accurately</li>
                        <li>• Attach resolution copies and amended MOA</li>
                        <li>• Calculate and pay additional fees</li>
                        <li>• Submit within 30 days of resolution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Receive Certificate</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        MCA will issue fresh Certificate of Incorporation stating increased authorized capital after verification.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• MCA verifies submitted documents</li>
                        <li>• Process additional fee payments</li>
                        <li>• Issue fresh certificate (15-30 days)</li>
                        <li>• Update company records and database</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fee Calculation */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Fee Calculation for Capital Increase</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Additional Fees Structure</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2">Authorized Capital Range</th>
                          <th className="text-left py-2">Additional Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Up to ₹1 Lakh</td>
                          <td className="py-2">₹300</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">₹1 Lakh to ₹5 Lakh</td>
                          <td className="py-2">₹1,000</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">₹5 Lakh to ₹25 Lakh</td>
                          <td className="py-2">₹3,000</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">₹25 Lakh to ₹1 Crore</td>
                          <td className="py-2">₹5,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Above ₹1 Crore</td>
                          <td className="py-2">₹10,000 + 0.1% of increase</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-blue-400">📊 Example Calculation</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex justify-between">
                        <span>Current Capital:</span>
                        <span>₹10 Lakh</span>
                      </div>
                      <div className="flex justify-between">
                        <span>New Capital:</span>
                        <span>₹50 Lakh</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Increase:</span>
                        <span>₹40 Lakh</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t border-gray-600 pt-2">
                        <span>Additional Fee:</span>
                        <span>₹5,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-green-400">💡 Cost Components</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>MCA Additional Fees:</strong> As per slab rates</li>
                      <li>• <strong>Stamp Duty:</strong> Varies by state (₹1,000-₹5,000)</li>
                      <li>• <strong>Professional Fees:</strong> ₹5,000-₹15,000</li>
                      <li>• <strong>Documentation:</strong> ₹1,000-₹3,000</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Board & Shareholder Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board Resolution for capital increase</li>
                    <li>• Notice of AGM/EGM (21 days)</li>
                    <li>• Shareholders' Ordinary Resolution</li>
                    <li>• Minutes of AGM/EGM</li>
                    <li>• Attendance sheet of meeting</li>
                    <li>• Justification letter for increase</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📄 Constitutional Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Current Certificate of Incorporation</li>
                    <li>• Existing Memorandum of Association</li>
                    <li>• Amended MOA with new capital clause</li>
                    <li>• Articles of Association (current)</li>
                    <li>• Latest Annual Return (MGT-7)</li>
                    <li>• Latest Balance Sheet</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📝 MCA Filing Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form SH-7 (duly filled and signed)</li>
                    <li>• Digital signatures of directors</li>
                    <li>• Professional certification by CS/CA</li>
                    <li>• Additional fee calculation sheet</li>
                    <li>• Payment receipts for fees</li>
                    <li>• Stamp duty payment proof</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Financial statements (last 3 years)</li>
                    <li>• Business plan for fund utilization</li>
                    <li>• Bank account details</li>
                    <li>• Director's KYC (DIR-3 KYC)</li>
                    <li>• Share certificate specimen</li>
                    <li>• Compliance certificates</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Increase Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Post-Increase Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📋 Immediate Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Update company statutory registers</li>
                    <li>• Issue fresh share certificates</li>
                    <li>• Update bank account details</li>
                    <li>• Modify official company documents</li>
                    <li>• Update website and marketing materials</li>
                    <li>• Notify key stakeholders and vendors</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">⚖️ Ongoing Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• File annual returns with updated capital</li>
                    <li>• Maintain register of members accurately</li>
                    <li>• Update share capital in balance sheet</li>
                    <li>• Comply with share allotment procedures</li>
                    <li>• Follow SEBI regulations if applicable</li>
                    <li>• Maintain proper accounting records</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline and Costs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Total Costs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Process Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Board Resolution:</strong> 1-2 days</li>
                    <li>• <strong>AGM/EGM Notice:</strong> 21 days</li>
                    <li>• <strong>Shareholder Meeting:</strong> 1 day</li>
                    <li>• <strong>SH-7 Filing:</strong> Within 30 days</li>
                    <li>• <strong>MCA Processing:</strong> 15-30 days</li>
                    <li>• <strong>Total Timeline:</strong> 60-90 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Total Cost Estimate</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>MCA Additional Fees:</strong> ₹300-₹50,000+</li>
                    <li>• <strong>Stamp Duty:</strong> ₹1,000-₹5,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹8,000-₹20,000</li>
                    <li>• <strong>Documentation:</strong> ₹2,000-₹5,000</li>
                    <li>• <strong>Total Cost:</strong> ₹15,000-₹80,000+</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="font-semibold text-lg mb-3 text-green-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Note
                </h3>
                <p className="text-sm text-gray-300">
                  Capital increase allows better financial flexibility but doesn't automatically increase company's cash flow. Plan the increase based on actual business needs and future fund requirements. Higher capital also means higher compliance costs.
                </p>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Increase Authorized Capital?</h2>
              <p className="text-xl mb-6 opacity-90">
                Expand your company's capital base professionally with complete regulatory compliance and cost-effective solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">60-90 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹15K-₹80K+</div>
                  <div className="text-sm opacity-80">Total Investment</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Increase Authorized Capital</h3>
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
                      Capital Increase Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Current capital amount, desired increase amount, purpose..."
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
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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