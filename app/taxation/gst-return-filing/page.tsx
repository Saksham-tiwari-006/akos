'use client'

import React, { useState } from 'react';
import { FileText, Calendar, CheckCircle, Clock, Shield, Building, DollarSign, AlertTriangle } from 'lucide-react';

export default function GSTReturnFilingPage() {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GST Return Filing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional GST return filing services ensuring 100% compliance, timely submissions, and maximum input tax credit claims.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding GST Returns */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Understanding GST Returns</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  GST returns are mandatory monthly, quarterly, or annual filings that businesses must submit to report their sales, purchases, output GST collected, and input GST paid. Different types of GST returns serve specific purposes - from regular monthly returns (GSTR-1, GSTR-3B) to annual returns (GSTR-9) and composition scheme returns (GSTR-4). Timely and accurate GST return filing ensures compliance, helps claim input tax credit, and avoids penalties while maintaining good standing with tax authorities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Types of GST Returns
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>GSTR-1:</strong> Monthly outward supply details</li>
                      <li>• <strong>GSTR-3B:</strong> Monthly summary return with tax payment</li>
                      <li>• <strong>GSTR-2A:</strong> Auto-populated purchase return</li>
                      <li>• <strong>GSTR-2B:</strong> Auto-generated ITC statement</li>
                      <li>• <strong>GSTR-4:</strong> Quarterly return for composition dealers</li>
                      <li>• <strong>GSTR-9:</strong> Annual return for regular taxpayers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Filing Frequency
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Monthly:</strong> GSTR-1, GSTR-3B (regular taxpayers)</li>
                      <li>• <strong>Quarterly:</strong> GSTR-1 (turnover &lt; ₹1.5 Crore)</li>
                      <li>• <strong>Quarterly:</strong> GSTR-4 (composition scheme)</li>
                      <li>• <strong>Annual:</strong> GSTR-9 (all registered taxpayers)</li>
                      <li>• <strong>Annual:</strong> GSTR-9C (audited entities)</li>
                      <li>• <strong>One-time:</strong> GSTR-10 (final return)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* GST Return Filing Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">GST Return Filing Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📊 Data Collection & Reconciliation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic collection and verification of all sales and purchase data for accurate return preparation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Sales invoices and credit/debit notes collection</li>
                        <li>• Purchase invoices and supporting documents</li>
                        <li>• Import/export documents and shipping bills</li>
                        <li>• Bank statements and payment records</li>
                        <li>• Previous return data reconciliation</li>
                        <li>• Input tax credit matching and verification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Return Preparation & Review</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional preparation of GST returns with thorough review and accuracy checks.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• GSTR-1 outward supply details preparation</li>
                        <li>• GSTR-3B summary return compilation</li>
                        <li>• Tax liability calculation and verification</li>
                        <li>• Input tax credit optimization</li>
                        <li>• Cross-verification with GSTR-2A/2B</li>
                        <li>• Compliance review and error checking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🏛️ Online Filing & Submission</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Secure online submission of GST returns through official GST portal with proper authentication.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• GST portal login and authentication</li>
                        <li>• Return data upload and validation</li>
                        <li>• Error resolution and corrections</li>
                        <li>• Final submission and acknowledgment</li>
                        <li>• Payment processing (if taxes due)</li>
                        <li>• Filing confirmation and records maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📋 Post-Filing Compliance & Monitoring</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Continuous monitoring and compliance management for ongoing GST obligations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Return status tracking and confirmation</li>
                        <li>• Notices and communication handling</li>
                        <li>• ITC reconciliation and optimization</li>
                        <li>• Monthly compliance calendar maintenance</li>
                        <li>• Amendment returns (if required)</li>
                        <li>• Annual return preparation and filing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Due Dates & Penalties */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">GST Return Due Dates & Penalties</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Monthly Due Dates
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>GSTR-1:</strong> 11th of next month</li>
                    <li>• <strong>GSTR-3B:</strong> 20th of next month</li>
                    <li>• <strong>GSTR-1 (Quarterly):</strong> 13th of month following quarter</li>
                    <li>• <strong>GSTR-4:</strong> 18th of month following quarter</li>
                    <li>• <strong>GSTR-5:</strong> 20th of next month (Non-resident)</li>
                    <li>• <strong>GSTR-6:</strong> 13th of next month (ISD)</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Late Filing Penalties
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>GSTR-1:</strong> ₹200/day (₹100 each CGST/SGST)</li>
                    <li>• <strong>GSTR-3B:</strong> ₹200/day (₹100 each CGST/SGST)</li>
                    <li>• <strong>Maximum penalty:</strong> 0.25% of turnover in state/UT</li>
                    <li>• <strong>Interest:</strong> 18% per annum on tax due</li>
                    <li>• <strong>Additional penalties:</strong> For continued defaults</li>
                    <li>• <strong>Registration cancellation:</strong> After 6 months default</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">GST Return Filing Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Monthly Filing Packages</h3>
                  <div className="space-y-4">
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">Basic Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• GSTR-1 + GSTR-3B filing</li>
                        <li>• Up to 100 invoices/month</li>
                        <li>• Basic reconciliation</li>
                        <li>• <strong>Fee: ₹2,500-₹5,000/month</strong></li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Premium Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• All returns + ITC optimization</li>
                        <li>• Unlimited invoices</li>
                        <li>• Complete reconciliation</li>
                        <li>• <strong>Fee: ₹5,000-₹15,000/month</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📊 Additional Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Annual Return (GSTR-9):</strong> ₹5,000-₹25,000</li>
                    <li>• <strong>Reconciliation Statement (GSTR-9C):</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>Amendment Returns:</strong> ₹2,000-₹10,000 each</li>
                    <li>• <strong>Notice Response:</strong> ₹5,000-₹25,000</li>
                    <li>• <strong>ITC Reconciliation:</strong> ₹3,000-₹15,000</li>
                    <li>• <strong>GST Audit Support:</strong> ₹25,000-₹1,00,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Benefits of Professional GST Filing</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Compliance Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>100% Compliance:</strong> Timely and accurate filings</li>
                    <li>• <strong>Penalty Avoidance:</strong> No late filing penalties</li>
                    <li>• <strong>Error-Free Returns:</strong> Professional review process</li>
                    <li>• <strong>ITC Optimization:</strong> Maximum input credit claims</li>
                    <li>• <strong>Notice Management:</strong> Expert handling of GST notices</li>
                    <li>• <strong>Audit Readiness:</strong> Proper documentation maintenance</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Business Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Time Saving:</strong> Focus on core business activities</li>
                    <li>• <strong>Cost Effective:</strong> Avoid penalties and interest</li>
                    <li>• <strong>Expert Guidance:</strong> Professional tax advice</li>
                    <li>• <strong>Technology Support:</strong> Advanced GST software</li>
                    <li>• <strong>Regular Updates:</strong> Latest compliance changes</li>
                    <li>• <strong>Peace of Mind:</strong> Stress-free GST management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Start GST Return Filing</h2>
              <p className="text-xl mb-6 opacity-90">
                Professional GST return filing services with guaranteed compliance and maximum ITC benefits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Compliance</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Timely</div>
                  <div className="text-sm opacity-80">Filing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">GST Return Filing</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      GST Filing Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Business turnover, return types needed (GSTR-1, GSTR-3B), filing frequency, number of invoices per month, current compliance status..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload GST Documents (Optional)
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
                    Start GST Filing
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert CAs</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>100% Secure</span>
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